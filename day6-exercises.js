// Loops

// const pattern = (symbol, lines) => {
//     let result = "";
//     for (let i = 0; i < lines; i++) {
// 	result += symbol;
// 	console.log(result)
//     }
//     return "---------"
// }

// console.log(pattern("#", 7))


// const pattern = (start, end) => {
//     for (; start < end--; start++) {
// 	const result = `${start} x ${end} = ${start * end}`;
// 	console.log(result)
//     }
//     return "";
// }
// console.log(pattern(1, 10));


// for (let i = 0; i <= 17; i++) {
//     // console.log(`${i} x ${i} = ${i * i}`)
//     if (i % 2 === 0) {
// 	console.log(i);
//     }
// }

// for (let i = 0; i <= 17; i++) {
//     if (i % 2 === 1) {
// 	console.log(i);
//     }
// }

//The first 25 prime numbers (all the prime numbers less than 100) are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

// const printNumbers = range => {
//     const resultsPrime = [];
//     const resultsNotPrime = [];


//     const checkPrimeNumber = n => {
// 	for (c = 2; c <= n - 1; c++) {
// 	    if (n % c === 0) {
// 		return false;
// 	    } else {
// 		return true;
// 	    }
// 	}
//     }
    
//     const printPrimeNumber = number => checkPrimeNumber(number)
// 	  ? resultsPrime.push(number)
// 	  : resultsNotPrime.push(number);
    
    
//     for (i = 1; i <= range; i++) {
// 	printPrimeNumber(i);

//     }
//     console.log(resultsPrime)    
// }
// printNumbers(100)

// let result = 0;
// for (i = 0; i <= 100; i++) {
//     result += i;
// }
// console.log(`The sum of all numbers from 0 to 100 is ${result}`);

// let evens = 0,
//     odds = 0;
// for (i = 0; i <= 100; i++) {
//     i % 2 === 0
// 	? evens += i
// 	: odds += i;
// }
// console.log(`The sum of all evens from 0 to 100 is ${evens}. And the sum of all odds from 0 to 100 is ${odds}.`);


// const result = []
// let evens = 0;
// let odds = 0;
// for (i = 0; i <= 100; i++) {
//     if (i % 2 === 0) {
// 	evens += i;
// 	result[0] = evens;
//     } else {
// 	odds += i;
// 	result[1] = odds;
//     }
// }
// console.log(result);

