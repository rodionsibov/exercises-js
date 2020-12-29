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

const numbers = [1, 2, 3, 4, 5]
const result = numbers.map((num) => console.log(num * num))
console.log(result)

