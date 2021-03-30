// #1 Iterate through string

// Iterative
// function printCharacters(str) {
//     for (let i = 0; i < str.length; i++) {
//         console.log(str[i]);
//     }
// for (let i in str) {
//     console.log(str[i]);
// }
// for (let char of str) {
//     console.log(char);
//   }
// }
// printCharacters('hello')

// Recursive
// function printCharactersRec(str) {
//     if (str.length === 0) return
//     return '?'
// }
// console.log(printCharactersRec('hello'));




// #2 Factorial

// Iterative
// function factorial(n) {
//     let prod = 1
//     for (let i = 1; i <= n; i++) {
//         prod = prod * i
//     }
//     console.log(prod);
// }
// factorial(5)

// Recursive
// function factorialRec(n) {
//     if (n <= 1) return 1
//     return n * factorialRec(n - 1)
// }
// console.log(factorialRec(5));


// #3 Fibonacci

// Iterative
// function fibonacciLoop(num) {
//     if (num === 0) return 0
//     if (num === 1) return 1
//     let n1 = 0
//     let n2 = 1
//     let f = 0
//     for (let i = 2; i <= num; i++) {
//         f = n1 + n2
//         n1 = n2
//         n2 = f
//     }
//     console.log(f)
// }
// fibonacciLoop(10)

// Recursive
// function fibonacciRec(num) {
//     if (num <= 1) return num
//     return fibonacciRec(num - 1) + fibonacciRec(num - 2)
// }
// console.log(fibonacciRec(10))

// #4 Series and Sequences

// Iterative
// function sequenceSum(start, ratio, nterms){
//     let currentTerm = start
//     let endTerm = start + ratio * (nterms - 1)
//     let sum = 0
//     while(currentTerm <= endTerm){
//         sum = sum + currentTerm
//         currentTerm = currentTerm + ratio
//     }
//     console.log(sum);
// }
// sequenceSum(1, 1, 5)

// Recursive
// function sequenceSumRec(s, rat, nter) {
//     if (nter === 1) return s
//     return s + sequenceSumRec(s + rat, rat, nter - 1)
// }
// console.log(sequenceSumRec(1, 1, 5));

// function sumOfDigits(num) {
//     if (num == 0) {
//         return 0;
//     }
//     return num % 10 + sumOfDigits(Math.floor(num / 10));
// }

