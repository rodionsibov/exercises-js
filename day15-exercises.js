// Classes

// class Person {
//     constructor(firstName, lastName, age = 250, country, city) {
// 	this.firstName = firstName
// 	this.lastName = lastName
// 	this.age = age
// 	this.country = country
// 	this.city = city
// 	this.score = 0;
// 	this.skills = [];
//     }

//     getFullName() {
// 	const fullName = `${this.firstName} ${this.lastName}`;
// 	return fullName;
//     }

//     get getScore() {
// 	return this.score;
//     }

//     get getSkills() {
// 	return this.skills;
//     }

//     set setScore(score) {
// 	this.score += score;
//     }

//     set setSkills(skill) {
// 	this.skills.push(skill);
//     }

//     getPersonInfo() {
// 	let fullName = this.getFullName();
// 	let skills = this.skills.length > 0 && this.skills
// 	    .slice(0, this.skills.length - 1).join(", ") + ` and ${this.skills[this.skills.length - 1]}`
// 	let formattedSkills = skills ? `He knows ${skills}` : ""
// 	let info = `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${formattedSkills}`;
// 	return info;
//     }

//     static favoriteSkill() {
// 	const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
// 	const index = Math.floor(Math.random() * skills.length)
// 	return skills[index]
//     }
    
// }

// const person = new Person('John', 'Doe', 50, 'Mars', 'Mars city')

// person.setSkills = "HTML"
// person.setSkills = "CSS"
// person.setSkills = "JavaScript"
// person.setScore = 1;
// //console.log(Person.favoriteSkill());

// // inheritance
// class ChildClassName extends Person {
//     saySomething() {
// 	console.log("I am a child of the person class");
//     }
// }
// const child = new ChildClassName();
// child.saySomething()


const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

class Statistics {
    constructor(arr) {
	this.arr = arr
    }

    count() {
	return this.arr.length
    }

    sum() {
	return this.arr.reduce((a,b) => a+b, 0)
    }

    min() {
	return this.arr.reduce((a,b) => a < b ? a : b)
    }

    max() {
	return this.arr.reduce((a,b) => a > b ? a : b)
    }

    range() {
	this.arr.sort();
	return this.arr[this.arr.length - 1] - this.arr[0];
    }
    
    mean() {
	return Math.round(this.sum() / this.count());
    }

    median() {
	this.arr.sort();
	return this.arr[Math.floor(this.arr.length / 2)]
    }
    
    mode() {
	const arrSet = new Set(this.arr);
	const result = [];
	arrSet.forEach(els => result.push({mode: els, count: this.arr.filter(el => el === els).length}))
	result.sort((a, b) => b.count - a.count)
	return result[0];
    }

    variance() {
	return Math.round(this.arr.map(el => el ** 2).reduce((a,b)=> a+b) / this.mean());
    }

    std() {
	return Math.round(Math.sqrt(this.variance()));
    }
    
}
const statistics = new Statistics(ages)
console.log(statistics.variance())

