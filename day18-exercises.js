// Promises

// syntax
// const promise = new Promise((resolve, reject) => {
//   resolve('success')
//   reject('failure')
// })

//promise
// const url = 'https://restcountries.eu/rest/v2/all'
// fetch(url)
//     .then(response => response.json())
//     .then(data => {
// 	console.log(data)
//     })
//     .catch(error => console.log(error))

//async and await
// const fetchData = async () => {
//     try {
// 	const response = await fetch(url)
// 	const countries = await response.json()
// 	console.log(countries)
//     } catch (err) {
// 	console.log(err)
//     }
// }
// console.log('===== async and await')
// fetchData()

const countriesAPI = 'https://restcountries.eu/rest/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// fetch(countriesAPI)
//     .then(res => res.json())
//     .then(data => {
// 	console.log(data)
	
// 	data.forEach((el) => {
// 	    let formattedText = `
// <div>
// <h1>${el.name}</h1> 
// <p>${el.capital}</p> 
// <p>${el.languages[0].name}</p> 
// <p>${el.population}</p> 
// <p>${el.area}</p><br>
// </div>`
// 	    document.write(formattedText)
// 	})
// 	const styleEl = document.createElement("style")
// 	styleEl.innerHTML = `
// * {
// margin: 0;
// }

// body {
// margin: 20px;
// }

// h1 {
// margin: 10px 0 5px 0;
// color: green;
// }
// `
// 	document.head.appendChild(styleEl)

//     })
//     .catch(err => console.log(err))


// addEventListener("DOMContentLoaded", async () => {
//     try {
// 	let data = await (await fetch(catsAPI)).json();
// 	// let catNames = [];
// 	// data.forEach(el => catNames.push(el.name))
// 	let averageWeight = 0;
// 	data.forEach(el => {
// 	    averageWeight += (Number(el.weight.metric.split(" ")[0]) + Number(el.weight.metric.split(" ")[2])) / 2

// 	})
// 	let result = averageWeight / data.length;
// 	console.log(averageWeight, data.length, result)
//     } catch (err) {
// 	console.log(err)
//     }
// })

addEventListener("DOMContentLoaded", async () => {
    try {
	const response = await fetch(countriesAPI);
	const data = await response.json();
	// const largestCountries = [];
	
	// data.forEach(el => {
	//     largestCountries.push({name: el.name, area: el.area})
	// })
	
	// largestCountries.sort((a,b) => b.area - a.area)
	// const result = largestCountries.slice(0, 10)
	// console.log(result)

	const totalNumberOfLanguages = []
	data.forEach(el => {
	    totalNumberOfLanguages.push(el.languages[0].name)

	})
	const result = new Set(totalNumberOfLanguages).size
	console.log(result)	

    } catch (err) {
	console.log(err)
    }
})
