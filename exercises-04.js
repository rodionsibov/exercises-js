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
    result = decimal % 2 + result
    return findBinary(decimal / 2, result)
}

const result3 = findBinary(234, '')

function reverseString(input) {
    if (input === '') {
        return ''
    }
    return reverseString(input.substring(1)) + input.charAt(0)
}

const result4 = reverseString('olleh')
