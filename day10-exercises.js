// Sets and Maps
//import {countries} from "./day9-exercises.js"

// const mySet = new Set();
// for (let i = 0; i < 11; i++) {
//     mySet.add(i)
// }
// mySet.delete(3);
// mySet.clear();
// console.log(mySet);

const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

const myMap = new Map([["a", 34],["b", 11]]);
// myMap.set("c", 82);
// console.log(myMap)
// console.log(myMap.get("a"))
// console.log(myMap.has("c"))

// for (const [x, y] of myMap) {
//     console.log(x, y)
// }


const langSet = new Set(countries);
const result = [];

for (const l of langSet) {
    result.push({lang: l, count: countries.filter(el => el === l).length})
}
console.log(result)
