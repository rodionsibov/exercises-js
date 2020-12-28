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

const callBack = () => console.log(Math.random());
setInterval(callBack, 2000);
