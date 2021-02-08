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

// const arr = ['Florida', 'dog', 'phone']
// function getWords(arr, num) {
//     return arr.filter(el => el.length >= num)
// }
// console.log(getWords(arr, 3))

// const arr = ['23cm', '5.6cm', '1000cm']
// function getValues() {
//     // return arr.map(el => Number(el.slice(0, -2)))
//     return arr.map(el=> parseFloat(el))
// }
// console.log(getValues())

// const string = 'In West Philadelphia, born and raised'
// function getVowelCount() {
// //    return string.split('').filter(el => el.match(/[aeoiyu]/i)).length 
//     return string.split('').filter(el => ['a', 'e', 'o', 'i', 'y', 'u', 'I'].includes(el)).length
// }
// console.log(getVowelCount())

// function capitalize(str) {
//     return str.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
// }
// console.log(capitalize('the queens gambit'))

// const arr = ['hey', 'Hello']
// function mutation(arr) {
//     // const partOne = arr[0]
//     // const partTwo = arr[1]
//     const [str1, str2] = arr.map(el => el.toLowerCase())
    
//     for (let i = 0; i < str2.length; i++) {
// 	const letter = str2[i]
// 	if (str1.indexOf(letter) === -1) {
// 	    return false
// 	}
//     }
//     return true

// }
// console.log(mutation(arr))



// function chunkArrayInGroup(arr, size) {
//     const result = []
//     while (arr.length > 0) {
// 	result.push(arr.splice(0, size))
//     }
//     return result
// }
// console.log(chunkArrayInGroup([0, 1, 2, 3, 4, 5], 3))
// console.log(chunkArrayInGroup([0, 1, 2, 3, 4, 5, 6], 3))
// console.log(chunkArrayInGroup([0, 1, 2, 3, 4, 5], 4))


// function extractData(root) {
//     const children = Array.from(root.parentNode.body.children);
//     return children
// 	.filter(element => element.tagName === "P")
// 	.map(element => element.innerHTML.trim());
// }
// console.log(extractData(document.documentElement))


// const isPrime = num => {
//     for(let i = 2; i < num; i++) {
// 	if (num % i === 0) {
// 	    return false
// 	}
//     }
//     return num > 1
// }



//const result = [3,5,7,4,25].filter(el => isPrime(el))
// for (let i = 15; i < 35; i++) {
//     if (isPrime(i)) {
// 	console.log(i)
//     }
// }


// function sumAll(arr) {
//     const sortArr = arr.sort((a, b) => a - b);
//     let result = 0;
//     for (let i = sortArr[0]; i <= sortArr[sortArr.length - 1]; i++) {
// 	result += i;
//     }
//     return result;
// }
// console.log(sumAll([10, 5]));



// function diffArray(arr1, arr2) {
//     const setA = new Set(arr1);
//     const setB = new Set(arr2);
//     return [...arr1.filter(item => !setB.has(item)), ...arr2.filter(item => !setA.has(item))]

// }
// console.log(diffArray([1,2,3,3,3,3,5,6,7], [1,2,3,4,5])) //4

// function destroyer(arr, ...arg) {
//     return arr.filter(el => !arg.includes(el));
// }
// console.log(destroyer([1,2,3,5,1,2,3], 2,3));



// function whatIsInAName(collection, source) {
//     const arr = [];
//     collection.forEach(item => {
// 	let countProps = 0;
// 	let countEqualProps = 0;
// 	for (const key in source) {
// 	    countProps++;
// 	    if (item[key] && item[key] === source[key]) {
// 		countEqualProps++;
// 	    }
// 	}
// 	if (countEqualProps === countProps) {
// 	    arr.push(item);
// 	}
//     })
//     return arr;
// }
// console.log(whatIsInAName([
//     {first: "Romeo", last: "Montaque"},
//     {first: "Mercutio", last: null},
//     {first: "Tybalt", last: "Capulet"}
// ], {last: "Capulet"}));
// console.log(whatIsInAName([
//     {"apple": 1},
//     {"apple": 1},
//     {"apple": 1},
//     {"bat": 2}
// ], {"apple": 1}));

// function spinalCase(str) {
//     return str.
// 	replace(/([A-Z])/g, " $1")
// 	.trim()
// 	.split(" ")
// 	.filter(el => el !== "")
// 	.map(el => el.toLowerCase())
// 	.join("-");
// }
// //console.log(spinalCase("This Is Spinal Tap"))
// //console.log(spinalCase("thisIsSpinalTap"))
// //console.log(spinalCase("AllThe-small Things"))
// console.log(spinalCase("Teletubbies say Eh-oh"))


// function translatePigLatin(str) {
//     const regex = /^([^aeiou]+)(.*)/;
//     if (regex.test(str)) {
// 	str = str.replace(regex, "$2$1ay");
//     } else {
// 	str += "way";
//     }
//     return str;
// }
// console.log(translatePigLatin("algorithm")) // lgorithmway
// console.log(translatePigLatin("glove")) // oveglay
// console.log(translatePigLatin("paragraphs")) // aragraphspay





// function myReplace(str, before, after) {
//     if (before[0].toLowerCase() !== before[0]) {
// 	after = after[0].toUpperCase() + after.slice(1);
//     }
//     return str.replace(before, after);
// }
// console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")) // "He is Sitting on the couch"


// const pairs = {
//     A: "T",
//     T: "A",
//     C: "G",
//     G: "C"
// }

// function pairElement(str) {
//     return str.split("").map(item => [item, pairs[item]])
// }
// console.log(pairElement("GCG"))


// function fearNotLetter(str) {
//     const arr = str.split("").map(el => el.charCodeAt());
//     for (let i = 0; i < arr.length - 1; i++) {
// 	if (arr[i] + 1 !== arr[i + 1]) {
// 	    return String.fromCharCode(arr[i + 1]);
// 	}
//     }
//     return undefined;
// }
// console.log(fearNotLetter("abce")); // d
// console.log(fearNotLetter("stvwx")); // u

// function uniteUnique(arr) {
//     //    return [...new Set(arr.flat())];
//     const finalArr = [];
//     // arr.forEach(innerArr => {
//     // 	innerArr.forEach(item => {
//     // 	    if (!finalArr.includes(item)) {
//     // 		finalArr.push(item);
//     // 	    }
//     // 	});
//     // });
//     // return finalArr;
//     return arr.reduce((acc, innerArr) => {
// 	innerArr.forEach(item => {
// 	    if (!acc.includes(item)) {
// 		acc.push(item)
// 	    }
// 	});
// 	return acc;
//     }, [])
// }
// console.log(uniteUnique([[1,3,2],[5,2,1,4],[2,1]])) // [1,3,2,5,4]
// console.log(uniteUnique([[1,2,3],[5,2,1]])) // [1,2,3,5]


// const repl = {
//     "&": "&amp;",
//     ">": "&gt;"
// }
// function convertHTML(str) {
//     for (const key in repl) {
// 	const re = new RegExp(key, "g");
// 	str = str.replace(re, repl[key]);
//     }
//     return str;
// }
// console.log(convertHTML("Sixty > twelve")) // Sixty &gt; twelve


// function sumFibs(num) {
//     let a = 1;
//     let b = 1;
//     let sum = a + b;
//     while(b <= num) {
// 	const temp = a;
// 	a = b;
// 	b = temp + b;
// 	if (b <= num) {
// 	    sum += (b % 2 !== 0) ? b : 0;
// 	}
//     }

//     return sum;
// }
// console.log(sumFibs(1000)); // 1785



// function sumPrimes(num) {
//     let sum = 0;
//     for (let i = 2; i <= num; i++) {
// 	if (isPrime(i)) {
// 	    sum += i;
// 	}

//     }
//     return sum;
// }

// function isPrime(num) {
//     for (let i = 2; i <= num / 2; i++) {
// 	if (num % i === 0) {
// 	    return false;
// 	}
//     }
//     return true;
// }
// // console.log(isPrime(9))
// console.log(sumPrimes(10)); // 17
// console.log(sumPrimes(977)); // 73156


// function smallestCommons(arr) {
//     if(arr[0] > arr[1]) {
// 	const temp = arr[1];
// 	arr[1] = arr[0];
// 	arr[0] = temp;
//     }

//     const newArr = [];
//     for(let i = arr[0]; i <= arr[1]; i++) {
// 	newArr.push(i);
//     }
//     const prod = newArr.reduce((acc, nr) => acc *= nr, 1);
//     for (let i = 1; i <= prod; i++) {
// 	const len = newArr.filter(nr => i % nr === 0).length;
// 	if (len === newArr.length) {
// 	    return i;
// 	}
//     }

//     return prod;
// }
// console.log(smallestCommons([1,5])) // 60
// console.log(smallestCommons([2,10])) // 2520


// function dropElements(arr, func) {
//     const index = arr.findIndex(func);
//     return (index === -1) ? [] : arr.slice(index);
// }

// console.log(dropElements([1,2,3,4], function(n) {return n >= 3;})) // [3,4]
// console.log(dropElements([0,1,0,1], function(n) {return n === 1;})) // [1,0,1]
// console.log(dropElements([1,2,3,4], function(n) {return n > 5;})) // []


// function steamrollArray(arr) {
//     return arr.flat(3);
// }
// console.log(steamrollArray([1,[2],[3,[[4]]]])) // [1,2,3,4]
// console.log(steamrollArray([1,{},[3,[[4]]]])) // [1,2,3,4]
//console.log(Array.isArray([]))


// function binaryAgent(str) {
//     return str.split(" ")
// 	.map(item => String.fromCharCode(parseInt(item, 2)))
// 	.join("");
// }
// console.log(binaryAgent("010000001 010101 0100010 0101010101 11101010101 010 01100101")) 


// const items = { a: 1, b: 2 };
// const newItems = { ...items, a: 3 };
// console.log(newItems)


// function addTogether(a, b) {
//     return function(b) {
// 	return a + b;
//     }
// }
// console.log(addTogether(2)(3))	// 5
// console.log(addTogether(2)([3])) // undefined


// function steamrollArray(arr) {
//     const finalArr = [];
//     arr.forEach(item => {
// 	if (Array.isArray(item)) {
// 	    finalArr.push(...steamrollArray(item));
// 	} else {
// 	    finalArr.push(item);
// 	}
//     });
//     return finalArr;
// }
// console.log(steamrollArray([1,[2],[3,[[4]]]])) // [1,2,3,4]
    
// const Person = function(firstAndLast) {
//     let [first, last] = firstAndLast.split(" ");
    
//     this.getFullName = function() {
// 	return `${first} ${last}`
//     }

//     this.getFirstName = function() {
// 	return first;
//     }

//     this.getLastName = function() {
// 	return last;
//     }

//     this.setFirstName = function(_first) {
// 	first = _first;
//     }

//     this.setLastName = function(_last) {
// 	last = _last
//     }

//     this.setFullName = function(_firstAndLast) {
// 	[first, last] = _firstAndLast.split(" ");
//     }
// }

// const bob = new Person("Bob Ross");
// console.log(bob.getFullName());


// function orbitalPeriod(arr) {
//     const GM = 398600.4418;
//     const earthRadius = 6367.4447;
//     return arr.map(item => ({
// 	name: item.name,
// 	orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM))
//     }))
// }
// console.log(orbitalPeriod([{name: "sputnik", avgAlt: 35873.5553}])) // [{name: "sputnik", orbitalPeriond: 86400}]


// function palindrome(str) {
//     const newStr = str.replace(/[_\W]/g, "").toLowerCase();
//     const revStr = newStr.split("").reverse().join("");
//     return newStr.toLowerCase() === revStr;
// }
// //console.log(palindrome("eye"))	// true
// console.log(palindrome("never odd or even"))	// true
// console.log(palindrome("A man, a plan, a canal. Panama"))	// true
// console.log(palindrome("_eye"))	// true







// if (function() !== "") {
//     throw new Error("boom")
// }


