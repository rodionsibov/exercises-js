// // Functions
// const swapValues = (a, b) => {
//     console.log({a, b})
//     const temp = a;
//     a = b;
//     b = temp;
//     return {a, b}
// }
// console.log(swapValues(1, 7));

// const swapValues = (a, b) => {
//     console.log({a, b});
//     [a, b] = [b, a];
//     return {a, b};
// }
// console.log(swapValues(1, 7));

// const reverseArray = (...args) => {
//     const result = [];
//     for (const el of args) {
// 	result.unshift(el);
//     }
//     return result;
// }
// console.log(reverseArray("A", "B", 3, [2234, 2342, {c: "C", d: "D"}, 4234]));

// const removeItem = (arr, item) => {
//     for (const el of arr) {
// 	if (el === item) {
// 	    arr.splice(arr.indexOf(el), 1);
// 	}
//     }
//     return arr;
// }
// console.log(removeItem(["A", "B", "C", "D"], "C"));

// const sumOfNumbers = (start, end) => {
//     let arr  = [];
//     for (let i = start; i <= end; i++) {
// 	arr.push(i);
//     }
//     result = arr.reduce((a, b) => a + b, 0);
//     console.log(arr);
//     return `Sum of numbers is: ${result}`;
// }
// console.log(sumOfNumbers(3, 7));

// const sumOfOdds = (start, end) => {
//     let result = 0;
//     for (let i = start; i <= end; i++) {
// 	if (i % 2 === 1) {
// 	    result += i;
// 	    console.log(i)
// 	}
//     }
//     return result;
// }
// console.log(sumOfOdds(3, 8));

// const evensAndOdds = num => {
//     let evens = 0;
//     let odds = 0;
//     for (let i = 0; i <= num; i++) {
// 	if (i % 2 === 0) {
// 	    evens += 1;
// 	} else {
// 	    odds += 1;
// 	}
//     }
//     return `The number of odds are ${odds}. The number of evens are ${evens}`
// }
// console.log(evensAndOdds(100))

