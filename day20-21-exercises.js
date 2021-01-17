// Writing Clean Codes
// DOM

//let hexa = Math.random().toString(16).slice(2,8).padStart(7, "#");
//console.log(hexa);

document.head.innerHTML = `<meta charset="utf-8">
<style>

.wrapper {
font-family: sans;
}

.wrapper h1, 
.wrapper h2, 
.time {
text-align: center;
}

h1 {
font-size: 3em;
}

h2 {
color: #888;
font-size: 16px;
text-decoration: underline;
}

ul {
padding: 0;
list-style: none;
width: 90%;
max-width: 500px;
margin: 0 auto;
}

ul li {
padding: 20px;
margin: 5px;
border-radius: 2px;
transition: transform 0.3s;
}

ul li:hover {
opacity: 0.8;
cursor: pointer;
transform: scale(1.02);
}

.time {
padding: 5px;
color: white;
border-radius: 20px;
margin: 0 auto;
width: 200px;
font-weight: bold;
margin-bottom: 20px;
}

.green {
background: lightgreen;

}

.yellow {
background: gold;
}

.red {
background: tomato;

}
</style>
`;
document.title = `JavaScript for Everyone:DOM`;
document.body.innerHTML = `
<div class="wrapper">
<h1>Challenges in <span class="year">2020</span></h1>
<h2>30DaysOfJavaScript Challenge</h2>
<div class="time"></div>
<ul>
<li>30DaysOfPython Challenge Done</li>
<li>30DaysOfJavaScript Challenge Ongoing</li>
<li>30DaysOfReact Challenge Coming</li>
<li>30DaysOfFullStack Challenge Coming</li>
<li>30DaysOfDataAnalysis Challenge Coming</li>
<li>30DaysOfReactNative Challenge Coming</li>
<li>30DaysOfMachineLearning Challenge Coming</li>
</ul>
</div>`

document.querySelector(".year").style.fontSize = "2em";
document.querySelectorAll("li").forEach(el => {
    if (el.textContent.includes("Done")) {
	el.classList.add("green")	
    }
    else if (el.textContent.includes("Ongoing")) {
	el.classList.add("yellow")
    } else {
	el.classList.add("red")
    }
})


setInterval(() => {
    document.querySelector(".year").style.color = `hsl(${Math.round(Math.random() * 360)}, 50%, 50%)`
    document.querySelector(".time").style.backgroundColor = `hsl(${Math.round(Math.random() * 360)}, 50%, 50%)`
    document.querySelector(".time").innerHTML = `${new Date().toLocaleString()}`;
}, 1000)





