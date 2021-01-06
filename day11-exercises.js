// Destructuring and Spreading

// const str = "abc";
// const [a, ...b] = str;
// const c = (a.toUpperCase() + b.join("")).split("").reverse().join("");
// console.log(c);

// const todoList = [
//     {
// 	task:'Prepare JS Test',
// 	time:'4/1/2020 8:30',
// 	completed:true
//     },
//     {
// 	task:'Give JS Test',
// 	time:'4/1/2020 10:00',
// 	completed:false
//     },
//     {
// 	task:'Assess Test Result',
// 	time:'4/1/2020 1:00',
// 	completed:false
//     }
// ]

// for (const {task, time, completed} of todoList){
//     console.log(task, time, completed)
// }


// const sumAllnums = (...args) => {
//     let sum = 0;
//     for (const num of args) {
// 	sum += num;
//     }
//     return sum;
// }
// console.log(sumAllnums(1,3,5,6,33));


// const constants = [2.72, 3.14, 9.81, 37, 100]
// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
// const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
// const [fin, est, sw, den, nor] = countries;
// console.log(humanBodyTemp, sw);


// const rectangle = {
//     width: 20,
//     height: 10,
//     area: 200,
//     perimeter: 60
// }
// const { width, height, area, perimeter: p} = rectangle;
// console.log(area, p);


const users = [
    {
	name:'Brook',
	scores:75,
	skills:['HTM', 'CSS', 'JS'],
	age:16
    },
    {
	name:'Alex',
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
    },
    {
	name:'David',
	scores:75,
	skills:['HTM', 'CSS'],
	age:22
    },
    {
	name:'John',
	scores:85,
	skills:['HTML'],
	age:25
    },
    {
	name:'Sara',
	scores:95,
	skills:['HTM', 'CSS', 'JS'],
	age: 26
    },
    {
	name:'Martha',
	scores:80,
	skills:['HTM', 'CSS', 'JS'],
	age:18
    },
    {
	name:'Thomas',
	scores:90,
	skills:['HTM', 'CSS', 'JS'],
	age:20
    }
]

//users.forEach(e => console.log(e.name))
// for (const { name, scores, skills, age } of users) {
//     if (skills.length < 2) {
// 	console.log({name, skills}) 
//     }
// }
// const result = users.filter(({skills}) => skills.length < 2).map(({name, skills}) => ({name, skillsa}));
// console.log(result);
//users.forEach(({name, scores, skills, age}) => console.log(name, scores, skills, age));


// const getDividers = num => {
//     const dividers = [];
//     for (let i = 1; i <= num; i++) {
// 	if (num % i === 0) {
// 	    dividers.push(i);
// 	}
//     }
//     return dividers;
// };
// console.log(getDividers(33));

// const myObject = {
//     online: true,
//     age: 33,
// };
// delete myObject.age;
// console.log(myObject);
// console.log(myObject.hasOwnProperty("age" && "online"));
// for (const el in myObject) {
//     console.log(el)
// }
