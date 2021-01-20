// const sumDigits = (num) => {
//     const str = String(num);
//     let result = 0;

//     for (let i = 0; i < str.length; i++) {
// 	result += Number(str[i]);
//     }

//     return result;
// }

// const addDigits = (num) => {
//     let result = num;

//     while (result >= 10) {
// 	result = sumDigits(result);
//     }

//     return result;
// }

// console.log(addDigits(598997686567));


// array reduce
// let numbers = [1, 2, 3, 4, 5];
// let total = numbers.reduce((accumulator, n) => accumulator + n);
// console.log(total);

// array filter
// let numbers = [1, 2, 3, 4, 5, 6];
// let evenNumbers = numbers.filter(n => n % 2 === 0);
// console.log(evenNumbers);

// array map
// let numbers = [1, 2, 3, 4, 5];
// let newNumbers = numbers.map(n => n * 2);
// console.log(newNumbers);

// object destructuring
// const person = {
//     name: 'Ros',
//     age: 33,
//     gender: 'Male',
// };

// function printDetails({ name, age }) {
//     console.log(`The name is ${name} and they are ${age}`);
// }

// printDetails(person);


// array destructuring
// function bottle() {
//     return ['bottle', 'water'];
// }

// let [red, blue] = bottle();

// console.log(red);
// console.log(blue);


// short circuit evaluation
// const result = 0 || 'string' || 60;
// console.log(result);

// const findKeys = (obj, expectedValue) => {
//     const result = [];

//     const entries = Object.entries(obj);
//     for (const [key, value] of entries) {
// 	if (value === expectedValue) {
// 	    result.push(key);
// 	}
//     }

//     return result;
// }

// console.log(findKeys({a: 2, b: 3}, 3));

// console.time('time');

// let total = 0;

// for (n = 1; n < 1000; n++) {
//     total += n;
// }

// console.timeEnd('time');

// const myList = document.createElement('ul');
// document.querySelector('#root').appendChild(myList);

// const fruitList = ['Banana', 'Orange', 'Mango', 'Lemon'];

// for (let fruit of fruitList) {
//     let newListItem = document.createElement('li');
//     newListItem.textContent = fruit;

//     myList.appendChild(newListItem);
// }

// hash change event
// window.addEventListener('hashchange', () => {
//     hashUpdate.textContent = window.location.hash.substring(1);
// })

// const p = document.createElement('p')
// p.setAttribute('id', 'hash-update');
// document.querySelector('#root').appendChild(p)

// const hashUpdate = document.querySelector('#hash-update')
// console.log(hashUpdate)


// const data = {
//     user: 'ubuntu',
//     cores: 4,
//     os: 'linux',
// };

// const pick = (data, keys) => {
//     const result = {}

//     for (const key of keys) {
// 	if (data.hasOwnProperty(key)) {
// 	    result[key] = data[key]
// 	}
	
//     }

//     return result;
// }

// console.log(pick(data, ['user', 'os']))


//Node insert before method - JS DOM
// const myList = document.createElement('ul');
// document.querySelector('#root').appendChild(myList);

// const orangesItem = document.createElement('li');
// orangesItem.textContent = 'Oranges';
// myList.appendChild(orangesItem);
// const applesItem = document.createElement('li');
// applesItem.textContent = 'Apples';
// myList.insertBefore(applesItem, orangesItem)

// import d from './day5-exercises.js'
// console.log(d)

// stand in line

//const nextInLine = (arr, item) => {
//     arr.push(item);
//     return arr.shift();
// }

// const testArr = [1,2,4,5];

// console.log('Before:', JSON.stringify(testArr));
// console.log(nextInLine(testArr, 6));
// console.log('After:', JSON.stringify(testArr));

// const numbers = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// numbers.forEach(n => {
//     console.log(n.toString().padStart(2, "0"));
// })

// const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(randomRange(3,5))

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// const squareList = (arr) => {
//     const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x)
//     console.log(squaredIntegers)
// }

// squareList(realNumberArray)

// const numberArray = [4, 42, 6, 8.34, -2];
// const result = numberArray.reduce((a, b) => a + b, 0);
// console.log(result)

// const sum = (...num) => num.reduce((a, b) => a + b, 0);}
// console.log(sum(2,4,5))

// const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
// const [, b, ...arr] = realNumberArray;
// console.log(b, arr)

// const createPerson = (name, age, gender) => ({name, age, gender});
// console.log(createPerson("Zodiac", 57, "male"));


// const digitsum = num => String(num).split('').reduce((a, b) => +a + +b, 0)
// console.log(digitsum(19642))



// utils/validations.js

// const isValidEmail = function(email) {
//   if (/^[^@ ]+@[^@ ]+\.[^@ \.]{2,}$/.test(email)) {
//     return "email is valid";
//   } else {
//     return "email is invalid";
//   }
// };

// const isValidPhone = function(phone) {
//   if (/^[\\(]\d{3}[\\)]\s\d{3}-\d{4}$/.test(phone)) {
//     return "phone number is valid";
//   } else {
//     return "phone number is invalid";
//   }
// };

// function isEmpty(value) { 
//   if (/^\s*$/.test(value)) {
//     return "string is empty or contains only spaces";
//   } else {
//     return "string is not empty and does not contain spaces";
//   } 
// }

// export { isValidEmail, isValidPhone, isEmpty };

// RECURSION
// const countup = (n) => {
//     if (n < 1) {
// 	return []
//     } else {
// 	const countArray = countup(n - 1);
// 	countArray.unshift(n);
// 	console.log(countArray)
// 	return countArray;
//     }
// }
// console.log(countup(5));

// const rangeOfNumbers = (start, end) => {
//     let result = 0;
//     for (; start <= end; start++) {
// 	result += start;
// 	console.log(start);
//     }
//     return result;
// }
// console.log(rangeOfNumbers(4, 15));

// const rangeOfNumbers2 = (start, end) => start > end ? 0 : start + rangeOfNumbers(start + 1, end);
// console.log(rangeOfNumbers2(4, 15));


// const result = "<h1>Winter is coming. 2020</h1>".match(/\w/g).join("");
// console.log(result)

// let username = "Zsdcvb@38";
// let userCheck = /\b[A-aZ-z]{3,5}@[0-9]{2}$/;
// const result = userCheck.test(username);
// console.log(result);

// if (convertToF(-30) !== -22) {
//     throw new Error();
// }

// function convertToF(celsius) {
//     return celsius * 9 / 5 + 32;;
// }
// console.log(convertToF(0));


// function reverseString(str) {
    //    return str.split("").reverse().join("")
    // let result = [];
    // for (let i = 0; i < str.length; i++) {
    // 	result.unshift(str[i])
    // }
    // return result.join("");
// }
// console.log(reverseString("hello"))

// function factorialize(num) {
//     if (num === 1) {
// 	return 1;
//     }
//     return num * factorialize(num - 1);
    // let result = 1;
    // for (let i = 1; i <= num; i++) {
    // 	result *= i;
    // }
    // return result;
    
// }
// console.log(factorialize(5))


// function findLongestWordLength(str) {
//     // return parseInt(str.split(" ").map(el=>el.length).sort().slice(-1).join())

//     let max = -Infinity;
//     str.split(" ").forEach(el => {
// 	if (el.length > max) {
// 	    max = el.length;
// 	}
//     })
//     return max;
// }
// console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))

//function largestOfFour(arr) {
    // const result = [];
    // let max = -Infinity;
    // arr.forEach(el => {
    // 	max = 0;
    // 	el.forEach(i => {
    // 	    if (i > max) {
    // 		max = i;
    // 	    }
    // 	})
    // 	result.push(max)
    // })
    // return result;
//     return arr.map(el => el.reduce((a, b) => a > b ? a : b));
// }
// console.log(largestOfFour([[13,27,18,26],[4,5,1,3],[32,35,37,39],[1000,1001,857,1]]))


// function confirmEnding(str, target) {
//     //    return str.endsWith(target)
//     return str.slice(-target.length) === target
// }
// console.log(confirmEnding("Congratulation", "on"))

// function repeatStringNumTimes(str, num) {
//     //    return str.repeat(3)
//     let result = "";
//     for (let i = 0; i < num; i++) {
// 	result += str;
//     }
//     return result;
// }
// console.log(repeatStringNumTimes("abc", 3))

// function truncateString(str, num) {
//     //    return str.slice(0, num).concat("...")
//     //return `${str.slice(0, num)}...`;
// }
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))

// function findElement(arr, func) {
//     // let result = []
//     // arr.forEach(num => {
//     // 	if (func(num)) {
//     // 	    result.push(num)
//     // 	} else {
//     // 	    return undefined;
//     // 	}
//     // })
    
//     // return result.shift()
//     return arr.filter(func)[0];
// } 
// console.log(findElement([1,3,5,8,9,10], num => num % 2 === 0));


// function booWho(bool = null) {
//     return typeof bool === "boolean" ? `${bool} is boolean` : `${bool} is not boolean`
// }
// console.log(booWho(33))

// function titleCase(str) {
//     return str.split(" ").map(el => el[0].toUpperCase() + el.slice(1).toLowerCase()).join(" ")
// }
// console.log(titleCase("I,m a little tea POT"))

// function frankenSplice(arr1, arr2, index) {
//     arr2.splice(index, 0, arr1);
//     return arr2.join();
// }
// console.log(frankenSplice([10,2], ["a","b","c"], 1))

// function bouncer(arr) {
//     return arr.filter(el => el).join()
// }
// console.log(bouncer([null, NaN, 1, 2, undefined]))

// function getIndexToIns(arr, n) {
//     arr.sort((a,b) => a - b);
//     let index = arr.findIndex(el => el >= n);

//     return index === -1 ? arr.length : index;
// }
// //console.log(getIndexToIns([10, 20, 50, 40, 30], 35))
// console.log(getIndexToIns([3, 10, 5], 3))


// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
// 	if (i % 3 === 0) {
// 	    console.log("Fizz") 
// 	} else if (i % 5 === 0) {
// 	    console.log("Buzz") 
// 	} else if (i % 15 === 0) {
// 	    console.log("FizzBuzz") 
// 	} else {
// 	    console.log(i)	    
// 	}

//     }

// }
// fizzBuzz()

// const farenheit = [23, 140, 212, 41]
// function getCelcius() {
//     return farenheit.map(num => ((num - 32) * 5) / 9)
// }
// console.log(getCelcius())

// const arr = [11, NaN, [], 'Angels']
// function checkForFalsey() {
//     return arr.some(el => !el)
// }

// console.log(checkForFalsey())

// const arr = ['Rabbit', 'Football', 'Cracking']
// function getTotal() {
//     return arr.reduce((a,b) => a + b.length, 0)
// }
// console.log(getTotal())

// const arr = [9, 16, 81]
// function checkSquares() {
//     return arr.every(el => Math.sqrt(el) % 1 === 0)
// }
// console.log(checkSquares())

const arr = ['Florida', 'dog', 'phone']
function getWords(arr, num) {
    return arr.filter(el => el.length >= num)
}
console.log(getWords(arr, 3))

// if (getIndexToIns([10, 20, 30, 40, 50], 35) !== 3) {
//     throw new Error("boom")
// }
