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


//Check if the season is Autumn, Winter, Spring or Summer.

// let months = [
//     'September',
//     'October',
//     'November',
//     'December',
//     'January',
//     'February',
//     'March',
//     'April',
//     'May',
//     'June',
//     'July',
//     'August'
// ]

// let randomMonths = months[Math.floor(Math.random() * 11 )] 

// console.log(randomMonths)

// switch (randomMonths) {
// case 'September':
// case 'October':
// case 'November':
//     console.log('The season is Autumn')
//     break;
// case 'December':
// case 'January':
// case 'February':
//     console.log('The season is Winter')
//     break;
// case 'March':
// case 'April':
// case 'May':
//     console.log('The season is Spring')
//     break;
// case 'June':
// case 'July':
// case 'August':
//     console.log('The season is Summer')
//     break;
    
// }


//Write a script that prompt a user to enters hours and rate per hour. Calculate pay of the person?

// let hours = 40
// let ratePerHour = 28

// console.log(`Your weekly earning is ${hours * ratePerHour}`)

//If the length of your name is greater than 7 say, your name is long else say your name is short.

// let name = 'Oralkdir'

// name.length > 7
//     ? console.log('Your name is long')
//     : console.log('Your name is short')



//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let years = 100
// let now = new Date()
// console.log(`You lived ${years * now.}`)




//Check if a day is weekend day or a working day. Your script will take day as an input.

// const now = new Date()
// let today = now.getDay()

// const _ = require('lodash');

// const numbers = [33,46,76,44,32,3,876,20,2,2,4,23,5,];

// _.each(numbers, function(number, i) {
//     console.log(number)
// });



//Javascript OOP
//console.log(window);
//aler(1);
//console.log(navigator.appVersion);

//Object Literal

// const book1 = {
//     title: 'Book One',
//     author: 'John Doe',
//     year: '2013',
//     getSummary: function() {
// 	return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

// const book2 = {
//     title: 'Book Two',
//     author: 'Jane Doe',
//     year: '2016',
//     getSummary: function() {
// 	return `${this.title} was written by ${this.author} in ${this.year}`;
//     }
// }

// console.log(Object.values(book1));


//Constructor

// function Book(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;

//     this.getSummary = function() {
//  	return `${this.title} was written by ${this.author} in ${this.year}`;

//     }
// }


// Instatiate an Object
// const book1 = new Book('Book One', 'John Doe', '2013');
// const book2 = new Book('Book Two', 'Jane Doe', '2016');

// console.log(book2.getSummary())



//Basic Algorithm Scripting: Return largest numbers in arrays
// let arr  = [['3','4','6'],['12','34']]; 

// function largesOfTwo(arr){
// let arrOfMax = [];

// for (let i = 0; i < arr.length; i++) {
//     let max = -Infinity;
//     for (let j = 0; j < arr[i].length; j++) {
// 	if (arr[i][j] > max) {
// 	    max = arr[i][j];
// 	}
//     }
//     arrOfMax.push(max);
// }
    
//     return arrOfMax;
// }

//console.log(largesOfTwo(arr));

// const p = document.createElement('p');
// const t = document.createTextNode('5');
// p.appendChild(t);
// document.body.appendChild(p);
// p.style.fontSize = '20vh';
// p.style.textAlign = 'center';

// const countItDown = () => {
//     let currentTime = parseFloat(t.textContent);
//     if (currentTime > 0) {
// 	t.textContent = currentTime - 1;
//     } else {
// 	clearInterval(timer);
//     }
// }

// let timer = setInterval(countItDown, 1000);


//Challenge: Stopwatch


// const p = document.createElement('p');
// const tP = document.createTextNode('0');
// const b = document.createElement('button');
// const tB = document.createTextNode('Stop');
// const s = document.createElement('style');

// p.appendChild(tP);
// document.bodzy.parentNode.insertBefore(s, document.body);
// document.body.appendChild(p);
// b.appendChild(tB);
// document.body.appendChild(b);

// document.body.style.textAlign = 'center';
// p.style.fontSize = '20vh';
// b.style.textAlign = 'center';
// s.innerHTML = `
// button {
// font-size: 30px;
// padding: 20px;
// width: 200px;
// background: tomato;
// border: none;
// cursor: pointer;
// color: white;
// outline: none;
// }

// button:hover {
// filter: brightness(1.4);
// }

// `

// const countUp = () => {
//     tP.textContent++
// }

// const timer = setInterval(countUp, 1000);

// const stopCountUp = () => {
//     clearInterval(timer)
//     console.log('You pressed stop!')
// }

// b.addEventListener('click', stopCountUp);

// const e = document.querySelector('script');
// const img = document.createElement('img');
// img.src = 'https://image.flaticon.com/icons/png/512/2598/2598933.png';
// document.body.insertBefore(img, e);
// img.style.width = '100px';

// const startTime = new Date().getTime();
// const makeItBigger = () => {
//     const currTime = new Date().getTime();
//     const newWidth = (50 + ((currTime - startTime)/1000) * 30);
//     img.style.width = newWidth + 'px';
//     console.log(newWidth);
//     if (newWidth < 200) {
// 	window.requestAnimationFrame(makeItBigger);	
//     }
// };

// makeItBigger();

		      
		      
// const divEl = document.createElement('div')
// const classAtt = document.createAttribute('class');
// classAtt.value = 'penguin';
// divEl.setAttributeNode(classAtt);
// divEl.classList.add('penguin');
// document.body.insertBefore(divEl, document.body.childNodes[penguinsEl.length]);

// const calculateMax = (coll) => {

//     if (coll.length === 0) {
// 	return null;
//     }

//     let max = coll[0];
//     for (let i = 1; i < coll.length; i += 1) {
// 	const currentElement = coll[i];
// 	if (currentElement > max) {
// 	    max = currentElement;
// 	}
//     }
//     return max;
// };

// console.log(calculateMax([3, 2, -10, 38, 0]));


//Canvas Clock
  
// const divEl = document.createElement('div');
// divEl.innerHTML = `<canvas id="myCanvas" width="400" height="400" style="background-color: #333;"></canvas>`;
// document.body.insertBefore(divEl, document.body.childNodes[2]);
// const canvas = document.getElementById('myCanvas');
// const ctx = canvas.getContext('2d');
// let radius = canvas.height / 2;
// ctx.translate(radius, radius);
// radius = radius * 0.90;
// drawClock();
// setInterval(drawClock, 1000);

// function drawClock() {
//   drawFace(ctx, radius);
//   drawNumbers(ctx, radius);
//   drawTime(ctx, radius);
// }

// function drawTime(ctx, radius){
//     var now = new Date();
//     var hour = now.getHours();
//     var minute = now.getMinutes();
//     var second = now.getSeconds();
//     //hour
//     hour = hour%12;
//     hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
//     drawHand(ctx, hour, radius*0.5, radius*0.07);
//     //minute
//     minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
//     drawHand(ctx, minute, radius*0.8, radius*0.07);
//     // second
//     second = (second*Math.PI/30);
//     drawHand(ctx, second, radius*0.9, radius*0.02);
// }

// function drawHand(ctx, pos, length, width) {
//   ctx.beginPath();
//   ctx.lineWidth = width;
//   ctx.lineCap = "round";
//   ctx.moveTo(0,0);
//   ctx.rotate(pos);
//   ctx.lineTo(0, -length);
//   ctx.stroke();
//   ctx.rotate(-pos);
// }

// function drawNumbers(ctx, radius) {
//     var ang;
//     var num;
//     ctx.font = radius * 0.15 + "px arial";
//     ctx.textBaseline = "middle";
//     ctx.textAlign = "center";
//     for(num = 1; num < 13; num++){
// 	ang = num * Math.PI / 6;
// 	ctx.rotate(ang);
// 	ctx.translate(0, -radius * 0.85);
// 	ctx.rotate(-ang);
// 	ctx.fillText(num.toString(), 0, 0);
// 	ctx.rotate(ang);
// 	ctx.translate(0, radius * 0.85);
// 	ctx.rotate(-ang);
//     }
// }

// function drawFace(ctx, radius) {
//     var grad;

//     ctx.beginPath();
//     ctx.arc(0, 0, radius, 0, 2 * Math.PI);
//     ctx.fillStyle = 'white';
//     ctx.fill();

//     grad = ctx.createRadialGradient(0, 0 ,radius * 0.95, 0, 0, radius * 1.05);
//     grad.addColorStop(0, '#333');
//     grad.addColorStop(0.5, 'white');
//     grad.addColorStop(1, '#333');
//     ctx.strokeStyle = grad;
//     ctx.lineWidth = radius*0.1;
//     ctx.stroke();

//     ctx.beginPath();
//     ctx.arc(0, 0, radius * 0.1, 0, 2 * Math.PI);
//     ctx.fillStyle = '#333';
//     ctx.fill();
// }

// const string = 'hello';
// for (const symbol of string) {
//     console.log(symbol);
// }


// const numbers = [1, 10];
// delete numbers[0];
// console.log(numbers);

// const field = [
//     [null, null, null],
//     [null, null, null],
//     [null, null, null]
// ];

// field[1][2] = 'x';

// const didPlayerMove = (field, symbol) => {
//     for (const row of field) {
// 	if (row.includes(symbol)) {
// 	    return true;
// 	}
//     }

//     return false;
// }

// console.log(didPlayerMove(field, 'x'));


// const getSuperSeriesWinner = (scores) => {
//     let ussrScore = 0;
//     let canadaScore = 0;
    
//     for (let i = 0; i < scores.length; i++) {
// 	if (scores[i][0] > scores[i][1]) {
// 	    canadaScore++
// 	}
// 	if (scores[i][0] < scores[i][1]) {
// 	    ussrScore++
// 	}
//     }
    
//     if (ussrScore === canadaScore) {
// 	return null
//     }    

//     if (ussrScore > canadaScore) {
// 	return 'ussr'
//     } else {
// 	return 'canada'
//     }
    
// }

// getSuperSeriesWinner([
//     [3, 7],
//     [4, 9],
//     [4, 4],
//     [3, 5],
//     [4, 5],
//     [3, 7],
//     [4, 3],
//     [6, 5],
// ])


// function longestWord(str) {
//     let words = str.split(" ");
//     let longestWord = "";

//     for (const word of words) {
// 	if (word.length > longestWord.length) {
// 	    longestWord = word;
// 	}
//     }

//     return longestWord;
// }

// console.log(longestWord("I woke up early today"));
// console.log(longestWord("I went straight to the beach"));


// function capitalizeWords(str) {
//     let words = str.split(" ").map(word => {
// 	return `${word.slice(0, 1).toUpperCase()}${word.slice(1)}`;
//     })

//     return words.join(" ");
// }

// console.log(capitalizeWords("I woke up early today"));
// console.log(capitalizeWords("I went straight to the beach"));

//console.log(Array.isArray([[2],[4,5], 3, "a"]))
//console.log([[["a","b"],[1], 3], "c"].flat())


// function secondValue(arr) {
//     let values = [...new Set(arr)].sort((a, b) => a - b);
//     return values;
// }

// console.log(secondValue([3, 2, 88, 3, -11, 67, 7]));

// function unique(str) {
//     return new Set(str).size === str.length;
// }
// console.log(unique("abcdd"));

// const countUniqChars = (text) => {
//     const uniqChars = [];

//     for (const char of text) {
// 	if (!uniqChars.includes(char)) {
// 	    uniqChars.push(char);
// 	}
//     }

//     return uniqChars.length;
// }


// console.log(countUniqChars('Fear cuts deeper than swords.'));

// const cUc = (str) => [...new Set(str.split(''))].length;

// const bubbleSort = (items) => {
//     let stepsCount = items.length - 1;
//     let swapped;

//     do {
// 	swapped = false;

// 	for (let i = 0; i < stepsCount; i += 1) {
// 	    if (items[i] > items[i + 1]) {
// 		let temp = items[i];
// 		items[i] = items[i + 1];
// 		items[i + 1] = temp;
// 		swapped = true;
// 	    }
// 	}
// 	stepsCount -= 1;
//     } while (swapped);

//     return items;
// }

// console.log(bubbleSort([3, 2, 10, -2, 0]));

// function isPrime(num) {
//     if (num < 2) {
// 	return false;
//     }

//     for (let i = 2; i < num; i++) {
// 	if (num % i === 0) {
// 	    return false;
// 	}
//     }

//     return true;
// }

// console.log(isPrime(11));


// for (let i = 0; i < 11; i++) {
//     console.log(`${i} x ${i} = ${i * i}`)
// }

// console.log(`i i^2 i^3`)
// for (let i = 0; i < 11; i++) {
//     console.log(`${i} ${i*i} ${i*i*i}`)
// }

//  for (let i = 0; i < 51; i += 1) {
//      if (i % 2 === 1) {
// 	 console.log(i)
//      }
// }   

// let sum = 0;
// for (let i = 0; i < 101; i += 1) {
//     sum += i;
// }   
// console.log(sum)

// let evens = 0, odds = 0;
// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
// 	evens += i;
//     } else if (i % 2 === 1) {
// 	odds += i
//     }
// }
// console.log(`The sum of all evens is ${evens}. And the sum of all odds is ${odds}.`)


// let array = [0, 0];
// for (let i = 0; i < 101; i++) {
//     if (i % 2 === 0) {
// 	array[0] += i;
//     } else if (i % 2 === 1) {
// 	array[1] += i
//     }
// }
// console.log(array)

// const makeId = (length) => {
// 	let characters = '0123456789ABCDEF'; //ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789
// 	let result = '#';
// 	for (let i = 0; i < length; i++) {
// 	    result += characters[(Math.floor(Math.random() * characters.length))]
// 	}
//     return result;
//     }

//console.log(makeId(6))



// const r = () => Math.floor(Math.random() * 255);  
// const makeRgbColor = () => `rgb(${r()}, ${r()}, ${r()})`;

// console.log(makeRgbColor());

// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let cIndex = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5];
// let arr = []
// for (let e of cIndex) {
//     arr.push(countries[e])   
// }
// console.log(arr)


// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let arr = [];
// for (let e of countries) {
//     arr.push(e, e.slice(0, 3), e.length)
// }
// console.log(arr)


// let countries = ['Albania', 'Bolivia','Ethiopia'];
// let biggestNumberOfCharacters = '';
//     for (let country of countries ) {
// 	if (country.length > biggestNumberOfCharacters.length) {
// 	    biggestNumberOfCharacters = country
// 	}
//     }
    
//console.log(biggestNumberOfCharacters)


// let countries = ["Albania", "Bolivia", "Canada", "Denmark", "Ethiopia", "Finland", "Germany", "Hungary", "Ireland", "Japan", "Kenya"]
// let result = []
// for (let c of countries) {
//     if (c.length < 6) {
// 	result.push(c)
//     }
// }
// console.log(result)


// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// let result = '';
// for (let w of webTechs) {
//     if (w.length > result.length) {
// 	result = w
//     }
// }
// console.log(result)



// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// let result = []
// for (w of webTechs) {
//     result.push([w, w.length])
// }
// console.log(result);


// const stack = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
// let result = []
// for (let s of stack) {
//     result.unshift(s)
// }
// console.log(result)

// const countries = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'Andorra',
//   'Angola',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bahamas',
//   'Bahrain',
//   'Bangladesh',
//   'Barbados',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'Brunei',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Colombi',
//   'Comoros',
//   'Congo (Brazzaville)',
//   'Congo',
//   'Costa Rica',
//   "Cote d'Ivoire",
//   'Croatia',
//   'Cuba',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor (Timor Timur)',
//   'Ecuador',
//   'Egypt',
//   'El Salvador',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Fiji',
//   'Finland',
//   'France',
//   'Gabon',
//   'Gambia, The',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Greece',
//   'Grenada',
//   'Guatemala',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Honduras',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iran',
//   'Iraq',
//   'Ireland',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Korea, North',
//   'Korea, South',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Mauritania',
//   'Mauritius',
//   'Mexico',
//   'Micronesia',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Morocco',
//   'Mozambique',
//   'Myanmar',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Poland',
//   'Portugal',
//   'Qatar',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'Sao Tome and Principe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia and Montenegro',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Swaziland',
//   'Sweden',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Venezuela',
//   'Vietnam',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe'
// ]
// let containWord = []
// let result = ''
// let onlyFour = []
// let twoOrMoreWords = []
// let arr = []
// for (let c of countries) {
//     if (c.includes('ah')) {
// 	containWord.push(c)
//     } else if (c.length > result.length ) {
// 	result = c
//     } else if (c.length === 4) {
// 	onlyFour.push(c)
//     } else if (c.includes(' ')) {
// 	twoOrMoreWords.push(c)
//     } else {
// 	arr.push(c.toUpperCase())
// 	arr.reverse()
//     }
// }  
// console.log(arr.indexOf('GHANA'))


// //Destructuring
// const myArray = ["a", "b", "c"];
// const [x, y] = myArray;
// console.log(x);
// console.log(y);

// const getWordsCount = (content) => {
//     const words = content.split(' ');
//     const result = {};

//     for (const word of words) {
// 	if (!result.hasOwnProperty(word)) {
// 	    result[word] = 1;
// 	} else {
// 	    result[word] += 1;
// 	}
//     }

//     return result;
// };

// console.log(getWordsCount('cat cat dog'))

// const obj = { name: 'JS: React', slug: 'js-react' };

// console.log(obj)
// console.log(Object.keys(obj))
// console.log(Object.values(obj))
// console.log(Object.entries(obj))

// const entries = Object.entries(obj)
// for (const [key, values] of entries) {
//     console.log(key);
//     console.log(values);
// }



// const lessonMembers = {
//   syntax: 3,
//   using: 2,
//   foreach: 10,
//   operations: 10,
//   destructuring: 2,
//   array: 2,
// };

// const findKeys = (obj, expectedValue) => {
//   const result = [];

//   const entries = Object.entries(obj);
//   for (const [key, value] of entries) {
//     if (value === expectedValue) {
//       result.push(key);
//     }
//   }

//   return result;
// };

// console.log(findKeys(lessonMembers, 2))


// function confirmEnding(str, target) {
//     return str.slice(str.length - target.length) === target;
// }

// console.log(confirmEnding("Adfdjf", "f"))


// function repeatStringNumTimes(str, num) {
//     if (num < 0) return "";

//     return new Array(num).fill(str).join('');
// }

// console.log(repeatStringNumTimes("abc", 3));



//freeCodeCamp. Basic Algorithm Scripting: Repeat a String Repeat a String
// function repeatStringNumTimes(str, num) {
//     if (num < 0) return "";
//     let finalString = '';

//     for (i = 0; i < num; i++) {
// 	finalString += str;
//     }

//     return finalString;
// }

// console.log(repeatStringNumTimes("abc", 3));

//freeCodeCamp. Basic Algorithm Scripting: Truncate a String
// function truncateString(str, num) {
//     if (str.length > num) {
// 	    return str.slice(0, num) + " ...";
//     }
//     return str;
// }
// console.log(truncateString("A-tisket, a-tasket A green and yellow basket", 8));
// console.log(truncateString("basket", 8));

//freeCodeCamp. Basic Algorithm Scripting: Finders Keepers
// function findElement(arr, func) {
// //    return arr.find(func);
//     return arr.filter(func)[0];
// }
// console.log(findElement([1, 2, 3, 4], num => num % 2 === 0));

// //freeCodeCamp. Basic Algorithm Scripting: Boo who
// function booWho(bool) {
//     return typeof bool === 'boolean';
// }
// console.log(booWho([],''))

// //freeCodeCamp. Basic Algorithm Scripting: Title Case a Sentence
// function titleCase(str) {
//     return str.split(' ').map(e => e[0].toUpperCase() + e.slice(1).toLowerCase()).join(' ');
// }

// console.log(titleCase("I'm a little tea pot"));

//freeCodeCamp. Basic Algorithm Scripting: Slice and Splice
// function frankenSplice(arr1, arr2, n) {
//     const newArr = arr2
//     newArr.splice(n, 0, ...arr1)
//     return newArr;
// }
// console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));

// //freeCodeCamp. Basic Algorithm Scripting: Falsy Bouncer
// function bouncer(arr) {
//     return arr.filter(e => e)

// }
// console.log(bouncer([7, "ate", "", false, 9]));

//freeCodeCamp. Basic Algorithm Scripting: Where do I belong
// function getIndexToIns(arr, num) {
//     // let index = arr.sort((a, b) => a - b)
//     // 	.findIndex(e => e >= num);

//     // return index === -1 ? arr.length : index;

//     let sortedArray = arr.sort((a, b) => a - b);
//     let index = arr.length;
//     for (let i = 0; i < sortedArray.length; i++) {
// 	if (sortedArray[i] >= num) {
// 	    index = i;
// 	    break;
// 	}
//     }

//     return index;
// }
// console.log(getIndexToIns([20, 3, 5, 4, 14, 1, 6], 50));


// //freeCodeCamp. Basic Algorithm Scripting: Mutations
// function mutation(arr) {
//     const [str1, str2] = arr.map(s => s.toLowerCase());
//     for (let i = 0; i < str2.length; i++) {
// 	const letter = str2[i];
// 	if (str1.indexOf(letter) === -1) {
// 	    return false;
// 	}
//     }
    
//     return true;
// }
// console.log(mutation(["hello", "hey"]));

//freeCodeCamp. Basic Algorithm Scripting: Chunky Monkey
// function chunkArrayInGroups(arr, size) {
//     let index = 0;
//     let finalArray = [];
//     let innerArray = [];

//     for (let i = 0; i < arr.length; i++) {
// 	innerArray.push(arr[i]);

// 	index++;

// 	if (index === size) {
// 	    finalArray.push(innerArray);
// 	    innerArray = [];
// 	    index = 0;
// 	}
//     }

//     if (innerArray.length > 0) {
// 	finalArray.push(innerArray);
//     }

//     return finalArray;
// }

// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// function Dog(name, color) {
//     this.name = name;
//     this.color = color;
//     this.numLegs = 4;
// }

// const terrier = new Dog("Terrier", "blue");
// const puppy = new Dog("Puppy", "yellow");
// console.log(terrier, puppy);




//freeCodeCamp. Object Oriented Programming: Verify an Object's Constructor with instanceof
// function House(numBedrooms) {
//     this.numBedrooms = numBedrooms;
// }

// const myHouse = new House(1000);
// console.log(myHouse instanceof House);

//freeCodeCamp. Object Oriented Programming: Understand Own Properties
// function Bird(name) {
//     this.name = name;
//     this.numLegs = 2;
// }

// let canary = new Bird("Tweety");
// let ownProps = [];

// for (let property in canary) {
//     if (canary.hasOwnProperty(property)) {
// 	ownProps.push(property);
//     }
// }

// console.log(ownProps);

//freeCodeCamp. Object Oriented Programming: Use Prototype Properties to Reduce Duplicate Code
// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs = 4;

// let beagle = new Dog("Snoopy");

// console.log(beagle.numLegs);


//freeCodeCamp. Object Oriented Programming: Iterate Over All Properties
// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype.numLegs = 4;
// let beagle = new Dog("Snoopy");

// let ownProps = [];
// let prototypeProps = [];

// for (let property in beagle) {
//     if (beagle.hasOwnProperty(property)) {
// 	ownProps.push(property);
//     } else {
// 	prototypeProps.push(property);
//     }

// }

// console.log(beagle);


//freeCodeCamp. Object Oriented Programming: Change the Prototype to a New Object
// function Dog(name) {
//     this.name = name;
// }

// Dog.prototype = {
//     numLegs: 2,
//     eat: function () {
// 	console.log("nom nom nom");
//     },
//     describe: function () {
// 	console.log("My name is " + this.name);
//     }
// };

//js challenges: regex palindrome
// function checkPalindrome(str) {
// //     str = str.toLowerCase();
// //     let first = str.split(' ').join('');
// //     let second = first.split('').reverse().join('');

//     let first = str.match(/[a-z0-9]+/ig).join('').toLowerCase();
//     let second = first.split('').reverse().join('');
//     return first === second;
// }

// // console.log(checkPalindrome("Was it a car or a cat I saw"));
// console.log(checkPalindrome("Red -rum-, sir,-is-murder"));

////30DaysOfJavaScript. 7Day. Functions. ex. lv 1.1
// function fullName() {
//     return "R S";
// }
// console.log(fullName());

////30DaysOfJavaScript. 7Day. Functions. ex. lv 1.2
// function fullName(firsName, lastName) {
//     return firsName + ' ' + lastName;
// }
// console.log(fullName('R', 'S'));

// //30DaysOfJavaScript. 7Day. Functions. ex. lv 1.3
// function addNumbers(num1, num2) {
//     return num1 + num2;
// }
// console.log(addNumbers(2, 5));

// //30DaysOfJavaScript. 7Day. Functions. ex. lv 1.4
// function areaOfRectangle(length, width) {
//     let area = length * width;
//     return `Area of rectangle is ${area}`
// }
// console.log(areaOfRectangle(4, 7));

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv1.7
// function areaOfCircle(radius) {
//     // const p = Math.PI;
//     // let area = p * radius * radius;
//     // return area;
//     return Math.PI * radius ** 2;
// }
// console.log(areaOfCircle(7));

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv1.12
// function convertCelciusToFahrenheit(celcius) {
//     return (celcius * 9/5) + 32;
// }
// console.log(convertCelciusToFahrenheit(34));

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv1.13
// function bmi(weight, height) {
//     let bmi = weight / (height * height);
//     let result = '';

//     if (bmi < 18.5) {result = 'Underweight'}
//     else if (bmi >= 18.5 && bmi < 24.9) {result = 'Normal weight'}
//     else if (bmi >= 25 && bmi < 29.9) {result = 'Overweight'}
//     else if (bmi > 30) {result = 'Obese'}
//     else result = 'Please, insert your weight and height.';
//     return result
// }

// console.log(bmi(65, 1.7));

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv1.14
// function findMax(x1, x2, x3) {
//     return Math.max(x1, x2, x3)
// }
// console.log(findMax(1, 5, 8));

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv2.2
// function solveQuadratic(a, b, c) {
//     //quadratic equation: ax2 + bx + c = 0

//     if (a === undefined || b === undefined || c === undefined) {
// 	return 0;
//     }
//     let x1 = (-b + Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
//     let x2 = (-b - Math.sqrt(b ** 2 - 4 * a * c)) / 2 * a;
//     return `${x1}, ${x2}`;
    
// }
// console.log(solveQuadratic()); 

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv2.3
// function printArray(arr) {
//     return arr
// }
// console.log(printArray(["name", "company", "phone"]));

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv2.4
// function showDateTime() {
//     let now = new Date();
//     return `${now.getDate()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`
// }
// console.log(showDateTime());


// function sumAllNums() {
//  console.log(arguments)
// }

// sumAllNums(1, 2, 3, 4)

// function sumAllNums() {
//     let sum = 0;
//     for (const a of arguments) {
// 	sum += a;
//     }
//     return sum;
// }
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173

// const sumAllNums = (...args) => {
//     let sum = 0;
//     for (const element of args) {
// 	sum += element
//     }
//     return sum;
// }
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93


// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv2.5
// function swapValues(x, y) {
//     let temp = x;
//     console.log(`Before: ${x}, ${y}`);
//     x = y;
//     y = temp;

//     return `After: ${x}, ${y}`
// }
// console.log(swapValues(3, 4));

// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv2.6
// function reverseArray(arr) {
//     let result = [];
// //    let sortedArr = arr.sort((a, b) => b - a);
    
//     for (const e of arr) {
// 	result.unshift(e)
//     }
//     return result;
// }
// console.log(reverseArray([1, 2, 3, 4, 5]));
// console.log(reverseArray(['A', 'B', 'C']))


// //30DaysOfJavaScript. 7Day. Functions. Ex1-lv2.7

// //Array methods - map / filter / reduce / find
// const numbers = [0, 1, 2, 3, 4, 5, 6];
// const doubledNumbers = numbers.map(n => n * 2); // [0, 2, 4, 6, 8, 10, 12]
// const evenNumbers = numbers.filter(n => n % 2 === 0); // [0, 2, 4, 6]
// const sum = numbers.reduce((prev, next) => prev + next, 0); // 21
// const greaterThanFour = numbers.find((n) => n>4); // 5


//freeCodeCamp. JavaScript Functional Programming
// const prepareTea = () => 'greenTea';

// const getTea = (numOfCaps) => {
//     const teaCups = [];

//     for (let cups = 1; cups <= numOfCaps; cups += 1) {
// 	const teaCup = prepareTea();
// 	teaCups.push(teaCup);
//     }

//     return teaCups;
// };
// console.log(getTea(5));



// const modifyArray = (arr) => {
//     if (arr.length < 5) {
// 	return  'Not Found';
//     }

//     arr[4] = arr[4].toUpperCase()
//     return arr
// }

// console.log(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
//console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));
//console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']));


//#######################################################
// //RANDOM USER
// fetch('https://randomuser.me/api/?results=33')
//     .then(res => res.json())
//     .then(data => {

// 	const results = data.results.map(item => {
// 	    return `

// <div class="col-md-3 mb-3">

// <div class="card text-center h-100">
// <img src="${item.picture.medium}" class="" alt="${item.login.username}" style="width: 100px; border-radius: 50%; margin: 20px auto 0; ">

// <div class="card-body">
// <h5 class="card-title">${item.name.title} ${item.name.first} ${item.name.last}</h5>
// <p class="card-text">${item.email}</p>
// </div>

// <div class="card-footer">
// <p class="card-text"><small class="text-muted">Last updated ${item.registered.date}</small></p>
// </div>

// </div>

// </div>

// `;
// 	}).join('')
// document.querySelector('h1').innerHTML = `Random User`
// document.querySelector('#root').innerHTML = `<div class="row" id="cards"></div>`;
// document.querySelector('#cards').innerHTML = results;
// console.log(data.results)
// })

//#######################################################





// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3]
// fruits.push('mangos')
// fruits.unshift('strawberries')
// fruits.pop()
// console.log(fruits)
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('oranges'))


// const todos = [
//     {
// 	id: 1,
// 	text: 'take out trash',
// 	isCompleted: true
//     },
//     {
// 	id: 2,
// 	text: 'meeting with boss',
// 	isCompleted: false
//     }
// ];

//const todoJSON = JSON.stringify(todos)

// for (const todo of todos) {
//     console.log(todo)
// }

//todos.forEach(todo => console.log(todo.text))
//const todoText = todos.map(todo => todo.text)
//const todoCompleted = todos.filter(todo => todo.isCompleted === true).map(todo => todo.text)

//console.log(todoCompleted)

//OOP
//Class
// class Person {
//     constructor(firstName, lastName, dob) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.dob = new Date(dob);
//     }

//     getBirthYear() {
// 	return this.dob.getFullYear();
//     }

//     getFullName() {
// 	return `${this.firstName} ${this.lastName}`;
//     }
// }

//Instantiate object
//const person1 = new Person('John', 'Doe', '4-14-1980');
//console.log(person1.getBirthYear());
//console.log(person1, '\n', person1.getFullName())


//###################################################
//JavaScript DOM

//document.querySelector('h1').classList.add('text-black-50')
// document.querySelector('h1').style.opacity = '0.3'
// document.querySelector('#root').innerHTML = `
// <section class="col-md-6 container">
// <form class="" id="my-form">
// <p class="h2 text-center text-primary mt-5">Add User</p>
// <div class="msg"></div>
// <div class="form-group">
// <label for="name">Name:</label>
// <input type="text" id="name" class="form-control">
// </div>
// <div class="form-group">
// <label for="email">Email:</label>
// <input type="text" id="email" class="form-control">
// </div>
// <input class="btn btn-block btn-primary" type="submit" value="Submit">
// </form>
// <ul class="list-group mt-3" id="users"></ul>
// `;


//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].style.color = 'red';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
// document.querySelector('.btn').addEventListener('click', (e) => {
//     e.preventDefault()
//     e.target.classList.toggle('btn-danger')
//     console.log(e.target.className)
// })

// const myForm = document.querySelector('#my-form')
// const nameInput = document.querySelector('#name')
// const emailInput = document.querySelector('#email')
// const msg = document.querySelector('.msg')
// const userList = document.querySelector('#users')

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if (nameInput.value === '' || emailInput.value === '') {
// 	//	alert('Please enter fields')
// 	msg.className = 'p-3 mb-2 bg-danger text-white'
// 	msg.innerHTML = 'Please enter all fields'
// 	setTimeout(() => msg.remove(), 3000)
//     } else {
// 	console.log('succes')
// 	const li = document.createElement('li')
// 	li.className = 'list-group-item'
// 	li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
// 	userList.appendChild(li)
// 	//clear fields
// 	nameInput.value = '';
// 	emailInput.value = '';

//     }
// })

//###################################################
//document.querySelector('h1').style.color = 'whitesmoke'
// document.querySelector('h1').remove()
// document.querySelector('#root').innerHTML = `
// <header id="main-header" class="bg-success text-white p-4 m-3">
// <div class="container">
// <h1 id="header-title">Item Lister</h1>
// </div>
// </header>
// <div class="container">
// <div class="card card-body" id="main">
// <h2 class="title">Add Items</h2>
// <form class="form-inline mb-3">
// <input type="text" class="form-control mr-2">
// <input type="submit" class="btn btn-dark" value="Submit">
// </form>
// <h2 class="title">Items</h2>
// <ul id="items" class="list-group"><li class="list-group-item">Item 1</li>
// <li class="list-group-item">Item 2</li>
// <li class="list-group-item">Item 3</li>
// <li class="list-group-item">Item 4</li>
// </ul>
// <br>
// <div id="output"></div>
// <button class="btn btn-dark btn-block" id="button">Click Here</button>
// </div>
// </div>
// `;


//console.dir(document.all);
//let input = document.querySelector('input[type="submit"]').value = 'SEND'
//console.log(input)

// const btn = document.createElement('button')
// document.querySelector('#root').insertBefore(btn, document.querySelector('#main-header'))
// btn.id = 'btn'
// btn.setAttribute('title', 'I am a button')
// btn.className = 'btn btn-danger btn-block'
// btn.appendChild(document.createTextNode('button'))
// console.log(btn)

// document.querySelector('body').addEventListener('mousemove', (e) => {
// console.log(e.target)
// document.querySelector('h1').style.color = `rgb(${e.offsetY},${e.offsetX}, 44)`
// })

// const item = document.querySelectorAll('li:nth-child(odd)')
// const itemTwo = document.getElementsByTagName('li')
// item.forEach(i => i.style.color = 'red')
// //console.log(itemTwo[3].innerText)

// console.log(itemTwo)
// for (let i = 0; i < itemTwo.length; i++) {
//     console.log(itemTwo[i])
// }


//traversing the dom
//const itemList = document.querySelector('#items')
//parentNode
//console.log(itemList.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode)
//itemList.parentNode.style.background = '#f4f4f4';

//parentElement
//console.log(itemList.parentElement)

//childNodes
//console.log(itemList.childNodes)
//console.log(itemList.children)
//itemList.children[2].style.background = 'gold'
//children
//firstChild
//console.log(itemList.lastElementChild)
//firstElementChild
//lastChild
//lastElementChild

//nextSibling
//console.log(itemList.nextSibling)
//nextElementSibling
//previousSibling
//previousElementSibling
//console.log(itemList.previousElementSibling)

//createElement

// //create a div
// const newDiv = document.createElement('div')
// document.querySelector('.container').insertBefore(newDiv, document.querySelector('hr'))

// //add class
// newDiv.className = 'hello'
// //add id
// newDiv.id = 'hello1'
// //add attr
// newDiv.setAttribute('title', 'hello Div')
// //create text node
// const newDivText = document.createTextNode('hello World')
// //set text to div
// newDiv.appendChild(newDivText)
// newDiv.style.fontSize = '33px'
// //newDiv.className = 'text-center'
// newDiv.classList.add('text-center')
// console.log(newDiv)

// document.querySelector('#button').addEventListener('click', (e) => {
//     const box = document.createElement('div')
//     // box.style.width = '300px'
//     // box.style.height = '200px'
//     // box.style.background = '#eee'
//     // box.style.margin = '20px auto'
//     box.setAttribute('style', 'width: 300px; height: 200px; margin: 20px auto; background: #eee;')
//     // box.className = 'container mt-3'
//     document.querySelector('#main').appendChild(box)
//     //document.querySelector('#header-title').textContent = 'Changed'
//     // console.log(e)
//     // console.log(e.target)
//     // console.log(e.target.id)
//     // console.log(e.target.className)
//     // console.log(e.target.classList)
//     // document.querySelector('#output').innerHTML = `<p class="text-center h1">${e.target.className}</p>`
//     // document.querySelector('#output').innerHTML = `<p class="text-center h1">${e.clientX}</p>`
//     //console.log(e.type)
//     // console.log(e.clientX)
//     // console.log(e.offsetX)
//     // console.log(e.altKey)
//     // console.log(e.ctrlKey)
//     // console.log(e.shiftKey)
//     box.addEventListener('mousemove', (e) => {
// 	document.querySelector('#output').innerHTML = `<p class="text-center h1">${e.offsetX}, ${e.offsetY}</p>`
// 	let title = `x:${e.offsetX}, y:${e.offsetY}`
// 	box.setAttribute('title', title)

// 	console.log(title)
// 	document.body.style.background = `rgb(${e.offsetX}, ${e.offsetY}, 0)`
// //	console.log(e.type)
//     })

// });


// const itemInput = document.querySelector('input[type="text"]')
// const form = document.querySelector('form')
// document.querySelector('#output').className = 'text-center h2'

// //events: click, dblclick, mousedown, mouseup, mouseenter, mouseleave, keydown, keyup, keypress, cut, paste, focus, blur, input, change, submit

// itemInput.addEventListener('input', (e) => {
//     document.querySelector('#output').textContent = e.type

//     console.log(e.type)
// })







// const root = document.querySelector('#root')

// let liTag = '';

// for (let i = 0; i < 3; i++) {
//     liTag += `<li class="list-group-item">Item ${i + 1}<button class="btn btn-danger delete float-right btn-sm">X</button></li>`
// }
// root.innerHTML = `<form class="form-inline"><input type="text" class="form-control mb-3"><input type="text" class="form-control mb-3 ml-3" placeholder="filter ..." id="filter"></form><ul class="list-group"></ul>`

// //add item
// const addItem = (e) => {
//     e.preventDefault()

//     //get input value
//     const input = document.querySelector('input')

//     //create new li element
//     const li = document.createElement('li')
//     //add class
//     li.className ="list-group-item"
//     //add text node with input value
//     li.appendChild(document.createTextNode(input.value))
//     document.querySelector('ul').appendChild(li)

//     //create delete button element
//     const deleteBtn = document.createElement('button')
//     //add class to del button
//     deleteBtn.className = 'btn btn-danger delete btn-sm float-right'
//     //append text node
//     deleteBtn.appendChild(document.createTextNode('X'))
//     li.appendChild(deleteBtn)
// }

// const removeItem = (e) => {
//     if (e.target.classList.contains('delete')) {
// 	document.querySelector('ul').removeChild(e.target.parentElement)

//     }
// }

//form submit event
//document.querySelector('form').addEventListener('submit', addItem);

//delete item
//document.querySelector('ul').addEventListener('click', removeItem)

//#######################################################

//Random User
// fetch('https://randomuser.me/api/?results=5')
//     .then(res => res.json())
//     .then(data => {
// 	console.log(data)
// //	const genders = data.results.map(user => user.gender)
// 	const genders = data.results.map(({ gender }) => gender)
// 	console.log(genders)

//     })




// export default (users) => users.flatMap(({ children }) => children);
//console.clear()
//console.assert(3 > 4)
//console.debug()
// console.count()
// console.countReset()
//console.dir()
//console.error()
//console.info()
//console.log()
//console.table()
//console.time()
//console.timeStamp() 
//console.timeLog()
//console.timeEnd()
//console.warn()
//console.trace()





// const sum = (...numbers) => {
//     let result = 0;
//     for (let num of numbers) {
// 	result += num;
//     }
//     return numbers
// };

// const union = (first, ...rest) => {
//     const concated = first.concat(...rest);
//     return [...new Set(concated)]
// }

// console.log(union(['a', 3, false], [true, false, 3], [false, 5, 8]))


// const dog = {
//     name: "",
//     legs: "",
//     color: "",
//     bark: function () {
// 	return `woof, woof`
//     }
// }

// dog.breed = ""
// dog.getDogInfo = function () {
//     return `info`
// }
// console.log(dog.bark())


// const users = {
//   Alex: {
//     email: 'alex@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 30
//   },
//   Asab: {
//     email: 'asab@asab.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 25,
//     isLoggedIn: false,
//     points: 50
//   },
//   Brook: {
//     email: 'daniel@daniel.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//     age: 30,
//     isLoggedIn: true,
//     points: 50
//   },
//   Daniel: {
//     email: 'daniel@alex.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   John: {
//     email: 'john@john.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//     age: 20,
//     isLoggedIn: true,
//     points: 50
//   },
//   Thomas: {
//     email: 'thomas@thomas.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   },
//   Paul: {
//     email: 'paul@paul.com',
//     skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }

// const result = Object.keys(users).map((skills, name, names) => {
//     return `${names[name]}: ${users[skills].skills.length}`
// })



// ((start, end) => {
//     let result = 0;

//     for (let i = start; i <= end; i++) {
// 	result += i;
//     }
//     return console.log(result)

// })(1, 4);


//##### diff two arrays

// ((arr1, arr2) => {
//     // const intersection = arr1.filter(x => arr2.includes(x))
//     //    const difference = arr1.filter(x => !arr2.includes(x))

//     //symmetric difference
//     const difference = arr1.filter(x => !arr2.includes(x)).concat(arr2.filter(x => !arr1.includes(x)))

    
//     console.log(difference)
// //    console.log(intersection)
// })([1, 'calf', 3, 'piglet'], [7, 'filly'])


//##### Async JS - Callbacks, Promises, Async Await #####
//callbacks
// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
// ];

// const getPosts = () => setTimeout(() => {
//     let output = '';
//     posts.forEach(post => output += `<li>${post.title}</li>`)
//     document.querySelector('#root').innerHTML = output;
// }, 1000)

// const createPosts = (post, callback) => setTimeout(() => {
//     posts.push(post)
//     callback()

// }, 2000)

// createPosts({ title: 'Post Three', body: 'This is post three' }, getPosts);
// console.log(posts)

//promises
// const posts = [
//     { title: 'Post One', body: 'This is post one' },
//     { title: 'Post Two', body: 'This is post two' },
// ];

// const getPosts = () => setTimeout(() => {
//     let output = '';
//     posts.forEach(post => output += `

// <li class="list-group-item">
// <div class="d-flex justify-content-between">
// ${post.title}
// <small>3 days ago</small>
// </div>
// </li>`
// 		 )

//     document.querySelector('#root').innerHTML = '<ul class="list-group list-group-flush"></ul>';
//     document.querySelector('ul').innerHTML = output
// }, 1000)

// const createPosts = (post) => {
//     return new Promise((resolve, reject) => {
// 	setTimeout(() => {
// 	    posts.push(post)

// 	    const error = false;

// 	    if (!error) {
// 		resolve();
// 	    } else {
// 		reject('Error: Something went wrong')
// 	    }
// 	}, 2000)
//     })
// }

// // createPosts({ title: 'Post Three', body: 'This is post three' })
// //     .then(getPosts)
// //     .catch(err => console.log(err))

// //Promise.all
// // const promise1 = Promise.resolve('Hello World');
// // const promise2 = 10;
// // const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));

// // Promise.all([promise1, promise2, promise3]).then((values) => console.log(values));

// // ##### IAS: seek and destroy #####
// const destroyer = (arr, ...arg) => {
//     const result = arr.filter(x => !arg.includes(x))
//// const result = arr.filter(item => arg.indexOf(item) === -1)
//     console.log(result)
// }
// destroyer([2, 3, 2, 3], 2, 3)

// // ##### IAS: wherefore art thou
// const whatIsInAName = (collection, source) => {
//     const result = collection.filter(x => Object.values(x).includes(...Object.values(source))).map(x => x.first).join()
    
//     console.log(result)
//     }
// whatIsInAName([{first: 'Romeo', last: 'Montaque'}, {first: 'Mercutio', last: null}, {first: 'Tybalt', last: 'Capulet'}], {last: 'Tybalt'})

// Binary search
// const binarySearch = (list, item) => {
//     let low = 0;
//     let high = list.length - 1;

//     while (low <= high) {
// 	let mid = Math.floor((low + high) / 2)
// 	let guess = list[mid]

// 	if (guess === item) {
// 	    return mid;
// 	} else if (guess > item) {
// 	    high = mid - 1;
// 	} else {
// 	    low = mid + 1;
// 	}

//     }	return null;
// }
// const myList = [1, 3, 5, 7, 9]
// console.log(binarySearch(myList, 3))



// let assert = require('assert')
// const getDividers = (num) => {
//   const dividers = [];
//   for (let i = 1; i <= num; i += 1) {
//     if (num % i === 0) {
//       dividers.push(i);
//     }
//   }
//   return dividers;
// };

// const actual = getDividers(9);
// const expected = [1, 3, 8];
// assert(actual, expected)



// //IAS: spinal tap case
// const spinalCase = (str) => {
//     const result = str
// 	  .replace(/([A-Z])/g, ' $1')
// 	  .trim()
// 	  .split(/[\W_]/)
// 	  .filter(item => item !== '')
// 	  .map(item => item.toLowerCase())
// 	  .join('-')
//     //    console.log(result)
    
// }
// spinalCase('AllThe-small T3hings2') // all-the-small-things


// STRING METHODS

// includes(), length, toUpperCase(), toLowerCase(), substr(),
// substring(), split(), trim(), replace(), charAt(), charCodeAt(),
// indexOf(), concat(), search(), match(), repeat()

//console.log('%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'.replace(/[%$;@&#]/g, ''))

// console.log('He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'.match(/\d+/g).reduce((a, b) => {
//     return parseInt(a) + parseInt(b)
// }))

//console.log(new Date().toLocaleString(navigator.language, {month: 'long'}))

//console.log(Math.trunc(1.6))


// ARRAY METHODS

// Array, length, concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray, fill, push, pop, shift, unshift, reverse, sort

// array constructor
//const arr = Array(6).fill('x')

//const text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
//const result = text.replace(/[,]/g, '').split(' ').length
//console.log(result)

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullstack = frontEnd.concat(backEnd)
// console.log(fullstack.sort().join(', '))


// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// const result = ages.reduce((a,b) => a+b) % 2 === 0 ? 'even' : 'not even'
// console.log(result)

// const countries = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'Andorra',
//   'Angola',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bahamas',
//   'Bahrain',
//   'Bangladesh',
//   'Barbados',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'Brunei',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Colombi',
//   'Comoros',
//   'Congo (Brazzaville)',
//   'Congo',
//   'Costa Rica',
//   "Cote d'Ivoire",
//   'Croatia',
//   'Cuba',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor (Timor Timur)',
//   'Ecuador',
//   'Egypt',
//   'El Salvador',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Fiji',
//   'Finland',
//   'France',
//   'Gabon',
//   'Gambia, The',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Greece',
//   'Grenada',
//   'Guatemala',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Honduras',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iran',
//   'Iraq',
//   'Ireland',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Korea, North',
//   'Korea, South',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Mauritania',
//   'Mauritius',
//   'Mexico',
//   'Micronesia',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Morocco',
//   'Mozambique',
//   'Myanmar',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Poland',
//   'Portugal',
//   'Qatar',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'Sao Tome and Principe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia and Montenegro',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Swaziland',
//   'Sweden',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Venezuela',
//   'Vietnam',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe'
// ]


// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// console.log(sentence.replace(/[#%$@&]/g, ''))


//const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// //console.log(itCompanies.filter(item => item.includes('oo')))
// const result = []
// itCompanies.forEach(item => {
//     if(item.includes('oo')) {
// 	result.push(item) 	
//     }
// })
// console.log(result)

// const middleName = itCompanies[Math.floor(itCompanies.length / 2)]
// console.log(itCompanies, itCompanies.splice(1,2,'aaaa'))
// console.log(middleName)


// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = text.replace(/[.,]/g, '').split(' ')
// console.log(words)
// console.log(words.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// const addToCart = (item1, item2) => {
//     shoppingCart.includes(item1) ? shoppingCart[shoppingCart.indexOf(item1)] = item2 : console.log(`${item1} does not exist`)
//     console.log(shoppingCart) 
// }
// addToCart('Tea', 'Green Tea')

// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// const fullStack = [...backEnd, frontEnd]
// console.log(fullStack)

// const ages = [9, 22, 19, 24, 20, 25, 16, 24, 25, 24]
// const min = () => {
//     const [ min, ...rest ] = ages
//     let result = min
//     for (item of rest) {
// 	if (item < min) {
// 	    result = item
// 	}
//     }
//     console.log(result)
// }
// min()

// const sum = () => {
//     let result = 0
//     ages.forEach(item => {
// 	console.log(typeof item)
// 	result += item
//     })
//     console.log(result / ages.length)
// }
// sum()


// const isEven = num => num % 2 === 0;
// console.log(isEven(32));

// const factorial = (n) => {
//     if (n === 0) {
// 	return 1;
//     }
//     return n * factorial(n - 1);
// }

// const answer = factorial(4);
// console.log(answer);

// const surfaceAreaCalculator = (radius) => {
//   return 4 * 3.14 * square(radius);
// }

// const square = (num) => {
//   return num * num;
// }

//console.log(surfaceAreaCalculator(3))

// const factorial = (n) => {
//   if (n === 0) {
//     return 1;
//   }

//   const iter = (counter, acc) => {
//     if (counter === 1) {
//       return acc;
//     }
//     return iter(counter - 1, counter * acc);
//   };

//   return iter(n, 1);
// };




// const sequenceSum = (begin, end) => {
//     if (begin > end) {
// 	return NaN;
//     } else if (end === begin) {
// 	return end;
//     }
//     const result = begin + sequenceSum(begin + 1, end);
//     return result
// };

// console.log(sequenceSum(1, 5));

// const smallestDivisor = (num) => {
//     const iter = (acc) => {
// 	if (acc > num / 2) {
// 	    return num;
// 	} else if (num % acc === 0) {
// 	    return acc;
// 	}
// 	return iter(acc + 1);
//     };

//     return iter(2);
// };
// console.log(smallestDivisor(15))

// const smallestDivisor = (num) => {
//     if (num < 1) {
// 	return NaN;
//     }
//     if (num === 1) {
// 	return num;
//     }
    
//     let divisor = 2;
    
//     while (num % divisor !== 0) {
// 	divisor = divisor + 1;
//     }
    
//     console.log(divisor);
// };
// smallestDivisor(72)


// const assert = require('assert').strict
// const square = n => n ** n;
// assert.strictEqual(square(3), square(2))

// const length = (str) => str.length;
// const toUpperCase = (str) => str.toUpperCase();

// const bigLettersCount = (str) => {
//     let result = 0;

//     for (let char = 0; char < length(str); char++) {
// 	if (str[char] === toUpperCase(str[char])) {
// 	    result++
// 	}
//     }
//     return result;
// }
    
// const compare = (first, second) => {
//     const firstCount = bigLettersCount(first);
//     const secondCount = bigLettersCount(second);

//     if (firstCount > secondCount) {
// 	return 1;
//     } else if (firstCount < secondCount) {
// 	return -1;
//     } else {
// 	return 0;
//     }
// };

// const greaterThan = (first, second) => (compare(first, second) === 1);
// console.log(greaterThan('az', 'ad'))

// console.log(typeof NaN);

//const sum = n => n.toString().split('').reduce((a,b)=> Number(a) + Number(b));


// const challenge = 'You cannot end a sentence with because because because is a conjunction';
// const phrase = 'because';
// const result = challenge.substr(0, challenge.indexOf(phrase) - 1) + challenge.substr(challenge.lastIndexOf(phrase) + phrase.length, challenge.length)
// console.log(result);


