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
function bottle() {
    return ['bottle', 'water'];
}

let [red, blue] = bottle();

console.log(red);
console.log(blue);
