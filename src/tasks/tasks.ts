// 1. Функция принимает параметром целые положительные числа (неопределенное кол-во)
// и возвращает их сумму

export const sum = (...numbers: number[] ) => {
    return numbers.reduce( (acc, el) => acc + el)
}

// 2. Функция getTriangleType принимает 3 параметра:
// длины сторон треугольника
// Функция должна возвращать:
// "01" - если треугольник равнобедренный
// "10" - если треугольник расносторонний
// "11" - если треугольник обычный
// "00" - если такого треугольника не существует

export const getTriangleType = (a: number, b: number, c: number): string => {
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c && a === c) {
            return "10"
        } else if ( a === b || b === c || a === c){
            return "01"
        } else {
            return "11"
        }
    } else {
        return "00"
    }
}

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export const getSum = (num: number): number => {
    // нужно разбить число на на кол-во цифр в ней, засунуть их в массив и редьюсом получить сумму
    // можно превратить число в строку
    return num.toString()
        .split("")
        .map( n => Number(n))
        .reduce((acc, el) => acc + el);
}


// 4. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма чисел с четным индексом больше суммы чисел с нечетными индексами
// то функция возвращает true. В противном случае - false.


export const isEvenSumGreater = (arr: number[]): boolean => {
    let sumOfEvenIndex = 0
    let sumOfOddIndex = 0
    // нам надо получить четные индексы и сложить числа под этими индексами
    // нужно пробежаться по массиву и проверить на четность и сделать условие, если четный индекс, то суммируем в
    // одну переменну, если нечетный то в другую
    for (let i = 0; i < arr.length; i ++) {
        if (i % 2 === 0) {
            sumOfEvenIndex += arr[i]
        } else {
            sumOfOddIndex += arr[i]
        }
    }
    return sumOfEvenIndex > sumOfOddIndex;
}


// 5. Функция  isSquareGreater принимает 2 параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится
// в квадрате и false в противном случае. Центры фигур совпадают

export const isSquareGreater = (roundSquare: number, quadrangleSquare: number) => {
    // если диаметр круга ( 2 * Math.sqrt(roundSquare/Math.PI) ) меньше или
    // равна стороне квадрата (Math.sqrt(quadrangleSquare)) , то вернуть true если нет - false
    return  2 * Math.sqrt(roundSquare/Math.PI) <= Math.sqrt(quadrangleSquare)
        //2.523 и 2.23
}

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму)
// Взвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

export const getBanknoteList = (amount: number) => {
    // debugger
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let resultArr = []
    for (let i = 0; i < banknotes.length; i ++) {
        if (amount === 0) {
            resultArr.push(0)
        } else if (amount % banknotes[i] !== 0) {
            resultArr.push( Math.floor(amount / banknotes[i]) )
            amount = amount - resultArr[i] * banknotes[i]
        } else {
            resultArr.push(amount / banknotes[i])
            amount = amount - banknotes[i]
        }
    }
    return resultArr
}

// к примеру принимает 3600, как понять сколько в этом числе 1000,
// нужно 3600 / 1000, получится 3.6, и округляем это число в меньшую сторону и получаем 3
// дальше чтобы понять сколько осталось мы из нашей суммы 3600 вычитаем 3 (полученное число) * на первую купюру
// и у нас остается 600, то есть теперь у нас 600 - amount
// теперь делим 600 на второй элемент массива banknotes

