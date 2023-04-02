const { sum, multiply, divide } = require('./02-math')

test('add to numbers', () => {
  expect(
    sum(10, 10)
  ).toBe(20)
})

test('multiply two numbers', () => {
  expect(multiply(6, 5)).toBe(30)
})

test('divide two nu,bers', () => {
  expect(divide(5, 2)).toBe(2.5)
})

test('divide for zero', () => {
  expect(divide(5, 0)).toBeNull()
})
