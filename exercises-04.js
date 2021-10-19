function recursiveSummation(inputNumber) {
    if (inputNumber <= 1) {
        return inputNumber
    }
    return inputNumber + recursiveSummation(inputNumber - 1)
}

let result1 = recursiveSummation(3)
let result2 = recursiveSummation(7)


