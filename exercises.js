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



const lessonMembers = {
  syntax: 3,
  using: 2,
  foreach: 10,
  operations: 10,
  destructuring: 2,
  array: 2,
};

const findKeys = (obj, expectedValue) => {
  const result = [];

  const entries = Object.entries(obj);
  for (const [key, value] of entries) {
    if (value === expectedValue) {
      result.push(key);
    }
  }

  return result;
};

console.log(findKeys(lessonMembers, 2))
