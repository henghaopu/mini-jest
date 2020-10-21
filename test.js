// a sum function has an intentional bug
const sum = (a, b) => a - b

// Automated test - code that throws an error when unexpected things happened
const result = sum(2, 4)
const expected = 6

// // SIMPLE TEST: too imperative and not easy to read
// if (result !== expected) {
//   // throw: stop executing the current function and jump to execute the outer catch block to handle the exception
//   throw new Error(`${result} is not equal to ${expected}`)
// }

// Tests need to be RITE (Readable, Isolated, Thorough, Explicit)

// ABSTRACT SIMPLE TEST: declarative and easy to read
expect(result).toBe(expected)

// WHAT: expect result to be expected
// HOW: if result is expected, then it's good
//      if result is not expected, then throw an error

// encapsulate the imperative (assertion) code
// this is an abstraction to encapsulate the assertion like an assertion library
function expect(result) {
  return {
    // assertion
    toBe(expected) {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`)
      }
    },

    // examples of other kinds of assertions
    toEqual(expected) {
      // deep equality check
    },
    toBeGreaterThan(expected) {},
    toBeLessThan(expected) {}
  }
}
