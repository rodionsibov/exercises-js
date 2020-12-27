// Objects


// const users = [
//     { name: 'Tirion', birthday: 'Nov 19, 1988' },
//     { name: 'Sam', birthday: 'Nov 22, 1999' },
//     { name: 'Rob', birthday: 'Jan 11, 1975' },
//     { name: 'Sansa', birthday: 'Mar 20, 2001' },
//     { name: 'Tisha', birthday: 'Feb 27, 1992' },
//     { name: 'Chris', birthday: 'Dec 25, 1995' },
// ];

// const takeOldest = (users, count = 1) => {
//     return users
// 	.sort((a, b) => Date.parse(a.birthday) - Date.parse(b.birthday))
// 	.slice(0, count)
// }
// console.log(users);
// console.log(takeOldest(users,  3));

// const person = {
//     firstName: 'Asabeneh',
//     age: 250,
//     country: 'Finland',
//     city:'Helsinki',
//     skills: ['HTML', 'CSS', 'JS'],
//     title: 'teacher',
//     address: {
// 	street: 'Heitamienkatu 16',
// 	pobox: 2002,
// 	city: 'Helsinki'
//     },
//     getPersonInfo: function() {
// 	return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
//     }
// }
// const copyPerson1 = Object.assign({}, person);
// const copyPerson2 = {...person}

// // Object.keys, Object.values, Object.entries, Object.hasOwnProperty()

// const keys = Object.keys(person)
// const values = Object.values(person)
// const entries = Object.entries(person)
// console.log(person.hasOwnProperty("city"))


// const dog = {
//     name: "Piff",
//     legs: 4,
//     color: "black",
//     age: 12,
//     bark: function() {
// 	return "woof woof";
//     },
// }
// dog.breed = "poodle";
// dog.getDogInfo = function() {
//     return `Hello, I am ${this.name}. I have ${this.legs} legs. My color is ${this.color}. I am ${this.age} years old and my breed is ${this.breed}.`
// }
// console.log(dog.getDogInfo())


// const users = {
//     Alex: {
// 	email: 'alex@alex.com',
// 	skills: ['HTML', 'CSS', 'JavaScript'],
// 	age: 20,
// 	isLoggedIn: false,
// 	points: 30
//     },
//     Asab: {
// 	email: 'asab@asab.com',
// 	skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
// 	age: 25,
// 	isLoggedIn: false,
// 	points: 50
//     },
//     Brook: {
// 	email: 'daniel@daniel.com',
// 	skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
// 	age: 30,
// 	isLoggedIn: true,
// 	points: 50
//     },
//     Daniel: {
// 	email: 'daniel@alex.com',
// 	skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
// 	age: 20,
// 	isLoggedIn: false,
// 	points: 40
//     },
//     John: {
// 	email: 'john@john.com',
// 	skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
// 	age: 20,
// 	isLoggedIn: true,
// 	points: 50
//     },
//     Thomas: {
// 	email: 'thomas@thomas.com',
// 	skills: ['HTML', 'CSS', 'JavaScript', 'React'],
// 	age: 20,
// 	isLoggedIn: false,
// 	points: 40
//     },
//     Paul: {
// 	email: 'paul@paul.com',
// 	skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
// 	age: 20,
// 	isLoggedIn: false,
// 	points: 40
//     }
// }

// const result = Object.entries(users).sort((a, b) => a[1].skills.length - b[1].skills.length).pop();
// console.log(result)

// const result = Object.entries(users).filter(el => el[1].isLoggedIn === true).length
// console.log(`Logged in ${result} users (${Object.keys(users).length})`)

// const result = Object.entries(users).filter(el => el[1].points >= 50).map(el => [el[0], el[1].points])
// console.log(result)


// const result = Object.entries(users).filter(el => {
//     const regEx = /mongo/i;
//     return regEx.test(el[1].skills);
// }).map(el => [el[0], el[1].skills]).map(el => el[0])
// console.log(result)

const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

    const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
]

const signUp = (user) => {
    return Object.values(users)
}
console.log(signUp("Thomas"))
