// //random user
// fetch('https://randomuser.me/api/?results=33')
//     .then(res => res.json())
//     .then(data => {

// 	const results = data.results.map(item => {
// 	    return `

// <div class="col-md-3 mb-3">

// <div class="card text-center h-100">
// <img src="${item.picture.medium}" class="" alt="${item.login.username}" style="width: 100px; border-radius: 50%; margin: 20px auto 0; ">

// <div class="card-body">
// <h5 class="card-title">${item.name.title} ${item.name.first} ${item.name.last}</h5>
// <p class="card-text">${item.email}</p>
// </div>

// <div class="card-footer">
// <p class="card-text"><small class="text-muted">Last updated ${item.registered.date}</small></p>
// </div>

// </div>

// </div>

// `;
// 	}).join('')
// document.querySelector('h1').innerHTML = `Random User`
// document.querySelector('#root').innerHTML = `<div class="row" id="cards"></div>`;
// document.querySelector('#cards').innerHTML = results;
// console.log(data.results)
// })



// const fruits = ['apples', 'oranges', 'pears'];
// fruits[3]
// fruits.push('mangos')
// fruits.unshift('strawberries')
// fruits.pop()
// console.log(fruits)
// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('oranges'))


// const todos = [
//     {
// 	id: 1,
// 	text: 'take out trash',
// 	isCompleted: true
//     },
//     {
// 	id: 2,
// 	text: 'meeting with boss',
// 	isCompleted: false
//     }
// ];

//const todoJSON = JSON.stringify(todos)

// for (const todo of todos) {
//     console.log(todo)
// }

//todos.forEach(todo => console.log(todo.text))
//const todoText = todos.map(todo => todo.text)
//const todoCompleted = todos.filter(todo => todo.isCompleted === true).map(todo => todo.text)

//console.log(todoCompleted)

//OOP
//Class
// class Person {
//     constructor(firstName, lastName, dob) {
// 	this.firstName = firstName;
// 	this.lastName = lastName;
// 	this.dob = new Date(dob);
//     }

//     getBirthYear() {
// 	return this.dob.getFullYear();
//     }

//     getFullName() {
// 	return `${this.firstName} ${this.lastName}`;
//     }
// }

//Instantiate object
//const person1 = new Person('John', 'Doe', '4-14-1980');
//console.log(person1.getBirthYear());
//console.log(person1, '\n', person1.getFullName())


//###################################################
//JavaScript DOM

//document.querySelector('h1').classList.add('text-black-50')
// document.querySelector('h1').style.opacity = '0.3'
// document.querySelector('#root').innerHTML = `
// <section class="col-md-6 container">
// <form class="" id="my-form">
// <p class="h2 text-center text-primary mt-5">Add User</p>
// <div class="msg"></div>
// <div class="form-group">
// <label for="name">Name:</label>
// <input type="text" id="name" class="form-control">
// </div>
// <div class="form-group">
// <label for="email">Email:</label>
// <input type="text" id="email" class="form-control">
// </div>
// <input class="btn btn-block btn-primary" type="submit" value="Submit">
// </form>
// <ul class="list-group mt-3" id="users"></ul>
// `;


//ul.remove();
//ul.lastElementChild.remove();
//ul.firstElementChild.textContent = 'Hello';
//ul.children[1].style.color = 'red';
//ul.lastElementChild.innerHTML = '<h1>Hello</h1>'
// document.querySelector('.btn').addEventListener('click', (e) => {
//     e.preventDefault()
//     e.target.classList.toggle('btn-danger')
//     console.log(e.target.className)
// })

// const myForm = document.querySelector('#my-form')
// const nameInput = document.querySelector('#name')
// const emailInput = document.querySelector('#email')
// const msg = document.querySelector('.msg')
// const userList = document.querySelector('#users')

// myForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     if (nameInput.value === '' || emailInput.value === '') {
// 	//	alert('Please enter fields')
// 	msg.className = 'p-3 mb-2 bg-danger text-white'
// 	msg.innerHTML = 'Please enter all fields'
// 	setTimeout(() => msg.remove(), 3000)
//     } else {
// 	console.log('succes')
// 	const li = document.createElement('li')
// 	li.className = 'list-group-item'
// 	li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`))
// 	userList.appendChild(li)
// 	//clear fields
// 	nameInput.value = '';
// 	emailInput.value = '';

//     }
// })

//###################################################

// btn.id = 'btn'
// btn.setAttribute('title', 'I am a button')
//root.insertBefore(btn, document.querySelector('ul'))

//document.querySelector('select').addEventListener('change', (e) => {
//console.log(e.target.textContent)
//document.querySelector('h1').textContent += e.key
//document.querySelector('input[type="text"]').value
//document.querySelector('h1').style.color = `rgb(${e.offsetY},${e.offsetX}, 44)`



// const root = document.querySelector('#root')

// let liTag = '';

// for (let i = 0; i < 3; i++) {
//     liTag += `<li class="list-group-item">Item ${i + 1}<button class="btn btn-danger delete float-right btn-sm">X</button></li>`
// }
// root.innerHTML = `<form class="form-inline"><input type="text" class="form-control mb-3"><input type="text" class="form-control mb-3 ml-3" placeholder="filter ..." id="filter"></form><ul class="list-group"></ul>`

// //add item
// const addItem = (e) => {
//     e.preventDefault()

//     //get input value
//     const input = document.querySelector('input')

//     //create new li element
//     const li = document.createElement('li')
//     //add class
//     li.className ="list-group-item"
//     //add text node with input value
//     li.appendChild(document.createTextNode(input.value))
//     document.querySelector('ul').appendChild(li)

//     //create delete button element
//     const deleteBtn = document.createElement('button')
//     //add class to del button
//     deleteBtn.className = 'btn btn-danger delete btn-sm float-right'
//     //append text node
//     deleteBtn.appendChild(document.createTextNode('X'))
//     li.appendChild(deleteBtn)
// }

// const removeItem = (e) => {
//     if (e.target.classList.contains('delete')) {
// 	document.querySelector('ul').removeChild(e.target.parentElement)

//     }
// }

//form submit event
//document.querySelector('form').addEventListener('submit', addItem);

//delete item
//document.querySelector('ul').addEventListener('click', removeItem)

