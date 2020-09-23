// the sum function has an intentional bug
const sum = (a, b) => a - b

// Automated test - code that throws an error when unexpected things happened
const result = sum(2, 4)
const expected = 6
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`)
}
