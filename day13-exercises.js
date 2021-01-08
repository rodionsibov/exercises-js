// Console Object Methods

// const myFunction = (x) => {
//     if (x === "") {
// 	return "";
//     }
//     return `-${x}`
// };
// if (myFunction("") !== "") {
//     throw new Error();
// }
// write a test, test fails
// if (repeat("A", 3) !== "AAA") {
//     throw new Error("boom")
// }
// write code to make test pass, code passes test
// refactor, workable code - how to improve? Clean code 
// function repeat(x) {
//     return x.repeat(3)
// }

// document.write(`<div class="container"><blockquote>${Date()}</blockquote></div>`)
// console.log('%d %s of JavaScript', 30, 'Days')
// console.log('%c30 Days Of JavaScript', 'color:green') // log output is green
// console.log(
//     '%c30 Days%c %cOf%c %cJavaScript',
//     'color:green',
//     '',
//     'color:red',
//     '',
//     'color:blue'
// ) 

// console.warn('Warning is different from error')
// console.error('This is an error message')

// const names = ['Asabeneh', 'Brook', 'David', 'John']
// console.table(names)


// const user = {
//     name: 'Asabeneh',
//     title: 'Programmer',
//     country: 'Finland',
//     city: 'Helsinki',
//     age: 250
// }
// console.table(user)

// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]
// console.table(countries)

// const users = [
//     {
// 	name: 'Asabeneh',
// 	title: 'Programmer',
// 	country: 'Finland',
// 	city: 'Helsinki',
// 	age: 250
//     },
//     {
// 	name: 'Eyob',
// 	title: 'Teacher',
// 	country: 'Sweden',
// 	city: 'London',
// 	age: 25
//     },
//     {
// 	name: 'Asab',
// 	title: 'Instructor',
// 	country: 'Norway',
// 	city: 'Oslo',
// 	age: 22
//     },
//     {
// 	name: 'Matias',
// 	title: 'Developer',
// 	country: 'Denmark',
// 	city: 'Copenhagen',
// 	age: 28
//     }
// ]
// console.table(users)


// const countries = [
//     ['Finland', 'Helsinki'],
//     ['Sweden', 'Stockholm'],
//     ['Norway', 'Oslo']
// ]

// console.time('Regular for loop')
// for (let i = 0; i < countries.length; i++) {
//     console.log(countries[i][0], countries[i][1])
// }
// console.timeEnd('Regular for loop')

// console.time('for of loop')
// for (const [name, city] of countries) {
//     console.log(name, city)
// }
// console.timeEnd('for of loop')

// console.time('forEach loop')
// countries.forEach(([name, city]) => {
//     console.log(name, city)
// })
// console.timeEnd('forEach loop')

// for (let i = 0; i <= 10; i += 1) {
//     let errorMessage = `${i} is not even`
//     console.log('the # is ' + i)
//     console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage })
// }


//console.group()

// const func = () => {
//     console.count('Function has been called')
// }
// func()
// func()
// func()

// function animate() {
//     requestAnimationFrame(animate);
//     console.count()
// }
// animate();

