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

// const sum = (...arg) => {
//     let result = 0;
//     for (const el of arg) {
// 	result += el;
//     }
//     return result;
// }
// console.log(sum(1, 3, 55, 1, 40));

// const shuffleArray = array => {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = array[i];
//         array[i] = array[j];
//         array[j] = temp;
//     }
//     return array;
// }
// console.log(shuffleArray([1,3,4]))

// const factorial = num => {
//     if (num === 1) {
// 	return 1;
//     }
//     return factorial(num - 1) * num;
// }
// console.log(factorial(5));

// const isEmpty = param => {
//     return (param === undefined);
// }
// console.log(isEmpty())


// const sumOfArrayItems = arr => {
//     let result = 0;
//     if (!Array.isArray(arr)) {
// 	return "There is not an array, try again please"
//     }
//     for (item of arr) {
// 	if (typeof item === "number") {
// 	    result += item;
// 	} else {
// 	    return "The array items are not number types"
// 	}
//     }
//     return result;
// }
// console.log(sumOfArrayItems([2,3,4]))

// const modifyArray = arr => {
//     if (arr.length < 5) {
// 	return "Item not found";
//     }
//     arr.splice(4, 1, arr[4].toUpperCase())
//     return arr;
// }
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']));
// console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));

// const isPrime = num => {
//     for (let i = 2; i < num; i++) {
// 	if(num % i === 0) {
// 	    return false;
// 	}
//     }
//     return num > 1;
// }
// console.log(isPrime(37));


// const isUnique = arr => {
//     return arr.length === new Set(arr).size;
// }
// console.log(isUnique([1,2,4,3]));


// const isSameDataType = arr => {
//     return arr.every(item => typeof item === "string")
// }
// console.log(isSameDataType(["a", "b"]));

// const reverseCountries = arr =>  arr.reverse();
// console.log(reverseCountries(["A", "B", "C"]));


