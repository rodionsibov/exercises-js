function recursiveSummation(inputNumber) {
    if (inputNumber <= 1) {
        return inputNumber
    }
    return inputNumber + recursiveSummation(inputNumber - 1)
}

const result1 = recursiveSummation(3)
const result2 = recursiveSummation(7)

function findBinary(decimal, result) {
    if (decimal === 0) {
        return result
    }
    result = (decimal % 2 + result)
    return findBinary(decimal / 2, result)
}

const result3 = findBinary(234, '')
// console.log(Number(234).toString(2))

function reverseString(input) {
    if (input === '') {
        return ''
    }
    return reverseString(input.substring(1)) + input.charAt(0)
}

const result4 = reverseString('olleh')

function isPalindrome(input) {
    // Define the base-case / stopping condition
    if (input.length === 0 || input.length === 1) {
        return true
    }
    // Do some work to shrink the problem space
    if (input.charAt(0) === input.charAt(input.length - 1)) {
        return isPalindrome(input.substring(1, input.length - 1))
    }
    return false
}

const result5 = isPalindrome('racecar')

const { stat } = require('fs')
stat('./exercises-04.js', ((err, stats) => console.log('Created date:', stats.birthtime.toLocaleString())));
console.log('Current date:', new Date().toLocaleString()); 