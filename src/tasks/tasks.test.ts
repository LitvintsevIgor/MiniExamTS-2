// 1. Функция принимает параметром целые положительные числа (неопределенное кол-во)
// и возвращает их сумму

import {getBanknoteList, getSum, getTriangleType, isEvenSumGreater, isSquareGreater, sum} from "./tasks";

test("sum of numbers should be correct", () => {
    expect(sum(2, 4, 3, 1, 10)).toBe(20)
    expect(sum(10, 20, 30)).toBe(60)
})

// 2. Функция getTriangleType принимает 3 параметра:
// длины сторон треугольника
// Функция должна возвращать:
// "01" - если треугольник равнобедренный
// "10" - если треугольник расносторонний
// "11" - если треугольник обычный
// "00" - если такого треугольника не существует

test("get correct type of triangle", () => {
    expect(getTriangleType(1, 1, 1)).toBe("10")
    expect(getTriangleType(3, 3, 2)).toBe("01")
    expect(getTriangleType(5, 4, 3)).toBe("11")
    expect(getTriangleType(10, 5, 5)).toBe("00")
})

// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

test("get correct sum of numbers", () => {
    expect(getSum(123)).toBe(6)
    expect(getSum(5679)).toBe(27)
    expect(getSum(25)).toBe(7)
    expect(getSum(10000)).toBe(1)
})

// 4. Функция принимает isEvenSumGreater параметром массив чисел.
// Если сумма чисел с четным индексом больше суммы чисел с нечетными индексами
// то функция возвращает true. В противном случае - false.


test("return correct boolean value", () => {
    expect(isEvenSumGreater([2, 5, 2, 5, 2, 5, 2, 5])).toBe(false)
    expect(isEvenSumGreater([5, 2, 5, 2, 5, 2, 5, 2])).toBe(true)
    expect(isEvenSumGreater([100, 2, 200, 1, 300])).toBe(true)
    expect(isEvenSumGreater([1, 2000, 2, 30000, 0])).toBe(false)
    }
)


// 4. Функция  isSquareGreater принимает 2 параметра: площадь круга и
// площадь квадрата. Функция должна возвращать true если круг поместится
// в квадрате и false в противном случае.

test("round fits in a square?", () => {
    expect(isSquareGreater(5, 5)).toBe(false)
})

// 6. Функция-банкомат принимает параметром целое натуральное число (сумму)
// Взвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

test("get correct arr of banknotes", () => {
    let result4345 = getBanknoteList(4345)
    let result123 = getBanknoteList(123)
    let result8500 = getBanknoteList(8500)
    let result10520 = getBanknoteList(10520)

    expect(result4345[0]).toBe(4)
    expect(result4345[1]).toBe(0)
    expect(result4345[2]).toBe(3)
    expect(result4345[3]).toBe(0)
    expect(result4345[4]).toBe(2)
    expect(result4345[5]).toBe(0)
    expect(result4345[6]).toBe(1)
    expect(result4345[7]).toBe(0)
    expect(result4345[8]).toBe(0)

    expect(result123[0]).toBe(0)
    expect(result123[1]).toBe(0)
    expect(result123[2]).toBe(1)
    expect(result123[3]).toBe(0)
    expect(result123[4]).toBe(1)
    expect(result123[5]).toBe(0)
    expect(result123[6]).toBe(0)
    expect(result123[7]).toBe(1)
    expect(result123[8]).toBe(1)

})


































