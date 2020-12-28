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

let username = "Zsa@38";
let userCheck = /[A-aZ-z]{3}@[0-9]{2}$/;
const result = userCheck.test(username);
console.log(result);
