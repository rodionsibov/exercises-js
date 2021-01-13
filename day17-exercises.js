// Web Storages

const myObject = {
    name: "My Name",
    age: 33,
    country: "My Country",
    city: "My City",
}
localStorage.setItem("myObject", JSON.stringify(myObject));
const result = JSON.parse(localStorage.getItem("myObject"))
localStorage.clear();
//const result = localStorage.key(0)

console.log(result)
