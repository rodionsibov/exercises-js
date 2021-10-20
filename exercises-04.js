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
    result = parseInt(decimal) % 2 + result
    return findBinary(parseInt(decimal) / 2, result)
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

// const { readdir, stat } = require('fs')

// readdir('./', (err, files) => {
//     files.forEach(file => {
//         // if (statSync(file).isFile()) console.log(statSync(file).birthtime.toLocaleString(), ' - ', file);
//         stat(file, (err, stats) => {
//             if (stats.isFile() && file.includes('04')) {
//                 console.log(`${file} -> ${stats.birthtime.toLocaleString()}`)
//             }
//         })
//     })
// })

function binarySearch(list, left, right, x) {
    if (left > right) {
        return -1
    }
    let mid = parseInt((left + right) / 2)
    if (x === list[mid]) {
        return mid
    }
    if (x < list[mid]) {
        return binarySearch(list, left, mid - 1, x)
    }
    return binarySearch(list, mid + 1, right, x)
}

const result6 = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1, 11, 9)

