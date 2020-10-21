const { sum, substract } = require('../math')

let result, expected

result = sum(2, 4)
expected = 6
expect(result).toBe(expected)

result = substract(8, 5)
expected = 3
expect(result).toBe(expected)

function expect(result) {
  return {
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    }
  }
}
