// Higher Order Functions

// const users = [
//   { name: 'Petr', age: 4 },
//   { name: 'Igor', age: 19 },
//   { name: 'Vovan', age: 4 },
//   { name: 'Matvey', age: 16 },
// ];
// const oldest = users.reduce((acc, user) => user.age > acc.age ? user : acc)
// console.log(oldest)


// const numbers = [1,2,4,5];
// const sumArray = arr => {
//     let sum = 0;
//     numbers.forEach(element => {
// 	sum += element;
//     })
//     return sum;
// }
// console.log(sumArray(numbers));

// console.log("Start")
// const interval = setInterval(() => {
//     console.log(Math.random().toString(2).slice(2));
// }, 1000);
// setTimeout(() => {
//     clearInterval(interval)
//     console.log("Stop")
// }, 5000);

// const numbers = [10, 20, 52, 105, 56, 89, 96];
// const max = numbers.reduce(
//   (acc, number) => number > acc ? number : acc,
//   numbers[0],
// );
// console.log(max);

// const isEven = (number) => (number % 2 === 0);
// const check = (number) => {
//     const result = isEven(number) ? "yes" : "no";;
//     return result;
// };
// console.log(check(32));

// const users = [
//     { name: 'Asabeneh', age: 150 },
//     { name: 'Brook', age: 50 },
//     { name: 'Eyo', age: 100 },
//     { name: 'Elias', age: 22 },
// ]
// // users.sort((a, b) => {
// //     if (a.age < b.age) return -1
// //     if (a.age > b.age) return 1
// //     return 0
// // })
// users.sort((a, b)=> a.age - b.age)
// console.log(users)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
//countries.forEach(country => console.log(country));
//names.forEach(name => console.log(name));
//countries.map(country => console.log(country.toUpperCase()));
//countries.map(country => console.log(country.length));
//numbers.map(number => console.log(number ** 2));
//products.map(({product, price}) => console.log([product, price]));
//console.log(countries.filter(country => country.includes("land")));
//console.log(countries.filter(country => country.length >= 6));
//console.log(countries.filter(country => country.match(/^i/i)))
//console.log(products.filter(({price}) => typeof price === "number"))
//console.log(products.filter(({price}) => price > 0))
// const getStringLists = (arr) => {
//     return arr.filter(el => typeof el === "string")
// }
// const arr = [...names, ...numbers]
// console.log(JSON.stringify(arr))
// console.log(getStringLists(arr))
// console.log(numbers)
// console.log(numbers.reduce((acc, cur) => acc + cur, 0))
//console.log(countries.reduce((acc, cur) => `${acc}, ${cur}`), "are north European countries")
// console.log(names.every(name => name.length > 7))
// console.log(names.some(name => name.length > 7))
// console.log(names)
//console.log(countries.find(country => country.length === 6))
//console.log(countries.findIndex(country => country.length === 6))
//console.log(countries.findIndex(country => country === "Norway"))
// console.log(countries.findIndex(country => country === "Russia"))
// console.log(countries.includes("Russia"))
// console.log(countries)

// const capitalize = (str) => {
//     return `${str[1].toUpperCase()}${str.slice(1)}`
// }

// const capitalize = (text) => {
//     if (text === "") {
// 	return "";
//     }
//     const [firstSymbol, ...restSymbols] = text;
//     return `${firstSymbol.toUpperCase()}${restSymbols.join("")}`
// }

// if (capitalize("hello") !== "Hello") {
//     throw new Error("The function works incorrectly")
// }
// if (capitalize("") !== "") {
//     throw new Error("The function works incorrectly")
// }

