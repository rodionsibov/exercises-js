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
window.addEventListener('hashchange', () => {
    hashUpdate.textContent = window.location.hash.substring(1);
})

const p = document.createElement('p')
p.setAttribute('id', 'hash-update');
document.querySelector('#root').appendChild(p)

const hashUpdate = document.querySelector('#hash-update')
console.log(hashUpdate)
