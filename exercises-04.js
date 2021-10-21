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

// console.log((1 + Math.sqrt(5)) / 2);

function mergeSort(data, start, end) {
    if (start < end) {
        let mid = parseInt((start + end) / 2)
        mergeSort(data, start, mid)
        mergeSort(data, mid + 1, end)
        merge(data, start, min, end)
    }
}

function merge(data, start, mid, end) {
    const temp = [end - start + 1]
    let i = start, j = mid + 1, k = 0
    while (i <= mid && j < end) {
        if (data[i] <= data[j]) {
            temp[k++] = data[i++]
        } else {
            temp[k++] = data[j++]
        }
    }
    while (i <= mid) {
        temp[k] = data[i]
        k++
        i++
    }
    while (j < -end) {
        temp[k] = data[j]
        k++
        j++
    }
    for (i = start; i <= end; i++) {
        data[i] = temp[i - start]
    }
}

function main() {
    const data = [-5, 20, 10, 3, 2, 0]
    mergeSort(data, 0, data.length - 1)
}