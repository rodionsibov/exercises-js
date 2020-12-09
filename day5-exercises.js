// Arrays

//const array = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Amazon'];
//const companies = array;

// const filterOut = (companies, filter) => {
//     const result = [];
//     for (const company of companies) {
// 	if (company.includes(filter)) {
// 	    result.push(company);
// 	}
//     }

//     console.log(result);
// }

// filterOut(companies, 'oo');

// console.log('default:', array)
// array.sort();
// console.log('sorted:', array)
// array.reverse();
// console.log('reversed:', array)
// array.splice(2, 0, 'Oracle');
// console.log('sliced:', array)
// console.log(Array.isArray(array))

// array.splice('') // remove all items
// console.log(array)

//exercise: level 2


// export
// const date = new Date().toLocaleString();
// export default date

// let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.';

// const words = text
//       .replace('.', '')
//       .replace(',', '')
//       .split(' ')

// console.log(words);
// console.log(words.length);

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
ages.sort();
console.log(JSON.stringify(ages));
// console.log('Min:', ages[0], 'Max:', ages[ages.length - 1]);

//const medianAge = (ages[0] + ages[ages.length - 1]) / 2;
//console.log(medianAge);
let sum = 0;
for (const item of ages) {
    sum += item;
}
const result = sum / ages.length;
console.log(result);
