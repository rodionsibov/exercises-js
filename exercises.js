// let challenge = '30 Days Of JavaScript'
// console.log(challenge);
// console.log(challenge.length);
// console.log(challenge.toUpperCase());
// console.log(challenge.toLowerCase());
// console.log(challenge.substring(0, 8));
// console.log(challenge.substr(0, 7));
// console.log(challenge.substring(3, challenge.length));
// console.log(challenge.includes('Script'));
// console.log(challenge.split(' '))
// console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(', '))
// console.log(challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge[15])
// console.log(challenge.indexOf('J'))
// console.log(challenge.charCodeAt(challenge.indexOf('J')))
// console.log('You cannot end a sentence with because because because is a conjunction'.lastIndexOf('because'))
// console.log('You cannot end a sentence with because because because is a conjunction'.indexOf('because'))
// console.log('You cannot end a sentence with because because because is a conjunction'.search('416816'))
// console.log(challenge.trim())
// console.log(challenge)

// let start = 'a', end = 'T'
// console.log(`Start with "${start.toUpperCase()}"`, challenge.startsWith(start))
// console.log(`Ends with "${end}"`, challenge.endsWith(end))
// console.log(challenge.match(/1/i))
// let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super exited to start this challenge'
// console.log(txt)
// console.log(txt.match(/\d+/g))


// console.log(challenge.concat(' Are you ready?'))
// console.log(challenge.repeat(2))

/*
function nextInLine(arr, item) {
    var arr = [arr]
    arr.push(item);
    arr.unshift();

    return arr;
}

console.log(nextInLine('1, 2, 3, 4, 5,', 6))
*/

// let num = '9.8'
// let numInt = parseFloat(num)

// console.log(Math.round(numInt))

// let string = "python and jargon"
// let patternOne = /jargon/
// let patternTwo = /python/


// console.log(string.match(patternOne))
// console.log(string.match(patternTwo))



// let randomNum = Math.random()
// let numBtnZeroAndHundred = Math.floor(randomNum * 102)
// console.log(numBtnZeroAndHundred)
// function random() {
//     let randomNum = Math.random()
//     let numBtnFiftyAndHundred = Math.abs(randomNum * 102 - 50)
//     console.log(numBtnFiftyAndHundred)
//     let randomNumRoundToFloor = Math.floor(numBtnFiftyAndHundred)
//     console.log(randomNumRoundToFloor)

// }
// console.log(random())
// console.log(random())
// console.log(random())

// let randomNum = Math.random()
// let numBtnFiftyAndHundred = Math.abs(randomNum * 102 - 50)
// console.log(numBtnFiftyAndHundred)
// let randomNumRoundToFloor = Math.floor(numBtnFiftyAndHundred)
// console.log(randomNumRoundToFloor)

// function random() {
//     let randomNum += Math.random()
//     let numBtnFiftyAndHundred = (randomNum * 255 + 3)
//     console.log(numBtnFiftyAndHundred)
//     let randomNumRoundToFloor = Math.floor(numBtnFiftyAndHundred)
//     console.log(randomNumRoundToFloor)

// setTimeout(random, 1000)

// }
// console.log(random())


// function interval() {
//     let string = ['JavaScript', 'Exercises', 'Code']
//     let randomNum = Math.floor(Math.random() * string.length)
//     let access = string[randomNum]
//     console.log(access)
    
//     setTimeout(interval, 200)
// }

// interval()
// let str = '1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125'
// console.log(str)

// let strOld = 'You cannot end a sentence with because because because is a conjunction'
// console.log(strOld.replace('because because because', ''))

// let string = 'You cannot end a sentence with because because because is a conjunction'
// let strIndexOf = string.indexOf('because')
// let strLastIndexOf = string.lastIndexOf('because')

// console.log(strIndexOf, strLastIndexOf)
// console.log(string.length)
// console.log(string.substr(0, strIndexOf), string.substr(strLastIndexOf, 'because'.length))

// let string = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let count = string.search(/Love/)
// console.log(count)
// console.log(count.length)


// let string = 'You cannot end a sentence with because because because because is a conjunction'
// let pattern = /because/gi
// let counter = string.match(pattern)
// console.log(counter.length)



// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'


// let sentence1 = sentence.replace(/%/g, '')
// let sentence2 = sentence1.replace(/\$/g, '')
// let sentence3 = sentence2.replace(/@/g, '')
// let sentence4 = sentence3.replace(/&/g, '')
// let sentence5 = sentence4.replace(/#/g, '')
// let sentence6 = sentence5.replace(/;/g, '')
// console.log('Before:\n', sentence)
// console.log()
// console.log('After:\n', sentence6)


// const txt = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let regEx = /\d+/g
// let totalAnnualIncome = parseInt(txt.match(regEx)[0]) + parseInt(txt.match(regEx)[1]) + parseInt(txt.match(regEx)[2])
// console.log(totalAnnualIncome)

// function nextInLIne(arr, item) {
//     const array = [arr]
//     console.log('Array:', array)
//     array.push(item)
//     console.log('Added this element:', item); 
//     console.log('Array:', array)
//     let shifted = array.shift()
//     console.log('Removed this element:', shifted); 
//     console.log('Array:', array)
// }
// nextInLIne('JavaScript', 'Code')


// let isRaining = false
// isRaining
//   ? console.log('You need a rain coat.')
//   : console.log('No need for a rain coat.')


// let number = 5
// number > 0
//     ? console.log(`${number} is a positive nubmer`)
//     : console.log(`${number} is a negative nubmer`)

// alert('Welcome to 30DaysOfJavaScript')
// let number = prompt('Enter number', 'number goes here')
// console.log(number)


// const now = new Date()
// console.log(now)
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())
// console.log(now.getTime())


// const assert = require('assert');

// var myDog = {
//     'name': 'Camper',
//     'legs': 4,
//     'tails': 1,
//     'friends': ['everything']
// };
// console.log(myDog)
// myDog.bark = 'bow-wow';

// console.log(myDog)
// myDog.name = 'Happy Camper'
// console.log(myDog)

// delete myDog['bark']
// console.log(myDog)

// var myDog = {
//     'name': 'Camper',
//     'legs': 4,
//     'tails': 1,
//     'friends': ['everything']
// };

// function checkObj(n) {
// if (myDog.hasOwnProperty(n)) {
//     console.log(myDog[n]);
//     return myDog[n]
// }
//     console.log('Not found'); 
// }

// checkObj('n')

// var firstName = "Voo"
// var lastName = "Fer"
// var country = "UK"
// var country = "London"
// var age = 33
// var isMarried = true

// const now = new Date()
// var year = now.getFullYear()

// let array = [firstName, lastName, country, age, isMarried, year]
// console.log(array)

// const typeOfIndexInArray = (array) => {
//     for (let i = 0; i < array.length; i++) {
// 	console.log(`${array[i]}: ${typeof array[i]}`)
//     }
// }

// typeOfIndexInArray(array)

// console.log(parseInt(9.8) === 10)
// console.log(parseInt(9.8))
// console.log(10 === 10)


// console.log(5 === "5")
// console.log(true === "true")
// console.log(5 < 3)

// console.log(true == 1)
// console.log(1 > -5)
// console.log('love' === 'love')

// console.log('python'.length === 'jargon'.length)


// console.log('The result is:', !(4 > 3 && 10 < 12))
// console.log('The result is:', !(4 === '4'))
// console.log("There is no 'on' in both dragon and python", !('dragon'.includes('on') && 'python'.includes('on')))


// const now = new Date()
// console.log(now.getFullYear())
// console.log(now.getMonth())
// console.log(now.getDate())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getTime())
// console.log(now.getDay())

// const b = prompt('Enter base:')
// const h = prompt('Enter height:')

// alert('The area of the triangle is' + 0.5 * b * h)

// const b = prompt('Enter base:')
// const h = prompt('Enter height:')

// alert('The area of the triangle is ' + 0.5 * b * h)

// const a = +prompt('Enter side a:')
// const b = +prompt('Enter side b:')
// const c = +prompt('Enter side c:')

// alert(`The perimeter of the triangle is ${a + b + c}`)

// const length = +prompt('Enter length:')
// const width = +prompt('Enter width:')
// const area = length * width 

// alert(`The area of the rectangle  is ${a + b + c}`)

// var ourArray = [];

// var i = 0;
// while (i < 50) {
//     ourArray.push(i);
//     i++;
// }

// console.log(ourArray)

// ourArray = [];

// var i = 49;
// while (i >= 0) {
//     ourArray.push(i);
//     i--;
// }


// for (let i = 4999; i >= 0; i--) {
//     ourArray.push(i);
// }


// console.log(ourArray)

// let ourArray = [];
// for (let i = 1; i < 10; i += 2) {
//     ourArray.push(i);
// }
// console.log(ourArray)

// let myArr = [10, 9, 8, 7, 6];
// let myArr = [2, 3, 4, 5, 6];
// let total = 0;

// for (let i = 0; i < myArr.length; i++) {
//     total += myArr[i];
//     console.log(total)
// }

// function multiplyAll(arr) {
//     let product = 1;
//     console.log(arr)
//     for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 	    product *= arr[i][j];
// 	    console.log(product)
// 	}
//     }
//     console.log('result is:', product)
//     return product;
// }

// multiplyAll([[1,2],[3,4],[5,6,7]]);

// const randomRange = (min, max) => {
//     console.log(Math.random() * (max - min + 1) + min)

//    setTimeout(randomRange, 3000)
// }


// const getCompetenceLogs = (fun, times) => {
//     for (let i = 1; i <= times; i++) {
// 	fun
//     }
// }

// getCompetenceLogs(randomRange(1,2), 5)


// console.log(typeof parseInt('56'))

// const checkEqual = (a, b) => a === b ? `"${a}" and "${b}" are Equal` : `"${a}" and "${b}" are Not Equal`
// console.log(checkEqual(3, 31))


// const countDown = n => {
//     if (n < 1) {
// 	return []
//     } else {
// 	const countArray = countDown(n - 1)
// 	countArray.unshift(n)
// 	return countArray
//     }
// }
// console.log(countDown(5))


// const countDown = (start, end) => {
//     if (start === end + 1) {
// 	return []
//     } else {
// 	const arr = countDown(start + 1, end)
// 	arr.unshift(start)
// 	return arr
//     }
// }
// console.log(countDown(4, 25))


// const increment = (number, value = +'') => number + value;
// console.log(increment(5, 2))
// console.log(typeof increment(5))

// let a = 8, b = 6;
// let temp = b;
// b = a;
// a = temp

// [a, b] = [b, a]
// console.log('a:', a)
// console.log('b:', b)

// const source = [1,2,3,4,5,6,7,8,9,10];
// const removeFirstTwo = list => {
//     const [,,...arr] = list;
//     return arr;
// }

// const arr = removeFirstTwo(source);
// console.log(arr);
// console.log(source);

// let movieName = "2001: A Space Odyssey";
// let numRegex = /\D/g;
// let result = movieName.match(numRegex).length;
// console.log(result)


// let username = "Z97";
// let userCheck = /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i;
// let result = username.match(userCheck);
// let result2 = userCheck.test(username);

// console.log(result)
// console.log(result2)


// console.log(`${'world'[1]}${'world'[4]}` === `${'world'[1]}${'word'[4]}`)

// for (let i = 1; i <= 50; i++)
//     console.log((i % 3 ? '' : '%3') + (i % 5 ? '' : '%5') + (i % 8 ? '' : '%8')|| i);   


// const num1 = 5;
// const num2 = 10;

// const sum = (a, b) => {
//     return a + b;
// }

// const func = () => {
//     const num2 = 2;
//     return sum(num1, num2);
// };
// console.log(func())
// func();

// const arr = [3, 8, 1];
// arr.sort();
// console.log(arr); 

// function htmlColorNames(arr) {
//     arr.splice(0, 2, 'DarkSalmon', 'BlanchedAlmond');
//     return arr;
// }

// console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// let ageUserInput = +prompt('Enter your age:', '437287498')
// let nameEl = document.querySelector('h1')


// ageUserInput >= 18
//     ? nameEl.innerHTML = 'You are old enough to drive'
//     : nameEl.innerHTML = `You are left with ${18 - ageUserInput} years to drive.`



// Basic Algorithm Scripting


//


// function convertToF(celsius) {
//     let fahrenheit = celsius * 9 / 5 + 32;
//     return fahrenheit;
// }

// console.log(convertToF(40));


// reverse a string

// function reverseString(str) {
//     return str.split('').reverse().join('');
// }

// console.log(reverseString('hello'));


// BAS: Factorialize a Number


// const factorialize = num => {
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
// 	result *= i;

//     }
//     console.log(result)
// }

// factorialize(7);




// BAS: Find the Longest Word in a String


// const findLongestWordString = (str = 'The quick brown fox jumped over the lazy dog') => {
//     let result = 0
//     let wordsArr = str.split(' ')
//     let wordsLength = wordsArr.map(element => element.length)
//     let wordMaxNum = Math.max(...wordsLength)


//     result = wordsArr.filter(value => value.length === wordMaxNum).join().toUpperCase()

//     console.log(`The longest word in this string '${str}' is ${result}`)    
    
// }

// findLongestWordString()


//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement in to ways

// let a = Math.random() * 10
// let b = Math.floor(Math.random() + a)
// console.log(a)
// console.log(b)
// a > b
//     ? console.log(`${a} is greater than ${b}`)
//     : console.log(`${a} is less than ${b}`)
    
//Even numbers are divisible by 2 and the remainder is zero. How do you check if a number is even or not using JavaScript?

// let a = Math.floor(Math.random() * 10)
// a % 2 === 0
//     ? console.log(`${a} is an even number`)
//     : console.log(`${a} is an odd number`)


//Write a code which can give grade to students according to theirs scores:

// let score = Math.floor(Math.random() * 100 + 1)
// console.log(score)

//     if (score > 80 && score < 100) {
//     console.log(`You have ${score} scores. Your grade is "A"`)	
//     } else if (score > 70 && score < 89) {
//     console.log('B')	
//     } else if (score > 60 && score < 69) {
//     	console.log('C')
//     } else if (score > 50 && score < 59) {
//     	console.log('D')
//     } else if (score > 0 && score < 49) {
//     	console.log('F')
//     }

