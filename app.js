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

var myDog = {
    'name': 'Camper',
    'legs': 4,
    'tails': 1,
    'friends': ['everything']
};
console.log(myDog)
myDog.bark = 'bow-wow';

console.log(myDog)
myDog.name = 'Happy Camper'
console.log(myDog)

delete myDog['bark']
console.log(myDog)
