// function* idGenerator(){
//     let id = 54
//     while(true) {
//         yield id++
//     }
// }

// const myIdGenerator = idGenerator()
// console.log(myIdGenerator.next().value);
// console.log(myIdGenerator.next().value);

// const arg = {
//     name: 'Alex',
//     age: 32,
//     data: ['hey', 'hello']
// }
// console.log(JSON.stringify(arg));
// console.log(JSON.stringify(arg, null, 2));

// const subway = {
//     red: ['a', 'b'],
//     green: ['c', 'd']
// }
// console.log(subway.red.join(' '));
// console.log(subway.blue?.join(' '));

// const num = new Intl.NumberFormat('en',{style: 'percent'}).format(0.344)
// console.log(num);

// function removeDuplicates(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === nums[i - 1]) {
//             nums.splice(i, 1)
//             i--
//         }
//     }
//     console.log(nums);
//     return nums.length
//     // console.log([...new Set(nums)]);
//     // return new Set(nums).size
// }
// console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4]));

// function myFunction(x,y) {
//     if(x/y === 1) return x
//     let n = x
//     while (n%y !== 0) {
//         console.log(n);
//         n++
//     }
//     return n
// }
// // console.log(myFunction(1,23));
// // console.log(myFunction(23,23));
// // console.log(myFunction(7,3));
// console.log(myFunction(-5,7));

// function myFunction(str) {
//     return str
//     .split('')
//     .map(i => String.fromCharCode(i.charCodeAt() + 1))
//     .join('')
// }
// console.log(myFunction('bnchmf'));

// function myFunction(str1, str2) {
//     return str2.match(new RegExp(str1, 'gi'))?.length || 0
// }
// console.log(myFunction('z', 'How many times does the character occur in this sentence?'));
// console.log(myFunction('h', 'How many times does the character occur in this sentence?'));

// function myFunction(n) {
//     const isPrime = num => {
//         for (let i = 2; i < num; i++)
//             if (num % i === 0) return false;
//         return num > 1;
//     }
//     let result = n
//     while(!isPrime(result)) result++
//     return result
// }
// console.log(myFunction(115));
// console.log(myFunction(38));
// console.log(myFunction(2000));

// function myFunction(arr) {
//     return new Set(arr).size === 1
// }
// console.log(myFunction(['10', 10, 10, 10]));
// console.log(myFunction([true, true, true, true]));
// console.log(myFunction([1,1,1,2]));

// function myFunction(arr) {
//     let max = arr[0]
//     for (i of arr)
//         if (i.length > max.length) max = i
//         return max
// }
// console.log(myFunction(['help', 'me']));
// console.log(myFunction(['I', 'need', 'candy']));

// function myFunction(...b) {
//     return b.flat()
// }
// console.log(myFunction([1, 2, 3], [4, 5, 6]));
// console.log(myFunction(['a', 'b', 'c'], [4, 5, 6]));
// console.log(myFunction([true, true], [1, 2], ['a', 'b']));

// function myFunction(a, b) {

//     return [...new Set([...a, ...b])]
//     .sort((a, b) => a-b)
// }
// console.log(myFunction([1, 2, 3], [3, 4, 5]));
// console.log(myFunction([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));

// function fibonacci(n) {
//     if (n <= 0) return 0
//     if (n <= 2) return 1
//     return fibonacci(n - 1) + fibonacci(n - 2)
// }
// console.log(fibonacci(7));

// function fibonacciIteration(n) {
//     if (n <= 0) return 0
//     if (n <= 2) return 1
//     let prev = 1
//     let result = 1
//     for (let i = 0; i < n - 2; i++) {
//         let temp = result
//         result += prev
//         prev = temp
//     }
//     return result
// }
// console.log(fibonacciIteration(7));

// function palindrom(word) {
//     word = word.toLowerCase()
//     for (let i = 0; i < word.length / 2; i++) {
//         if(word[i] !== word[word.length - i - 1]) {
//             return false
//         }
//     }
//     return true
//     // return word === word.split('').reverse().join('')
// }
// console.log(palindrom('aaaZzaaa'));

// function four(callback) {
//     return callback ? callback(4) : 4
// }
// function divide(a) {
//     return function (b) {
//         return b / a
//     }
// }
// console.log(four(divide(8)));

// function withoutRepeat(arr) { // O(N*N)
//     const result = []
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 count++
//             }
//         }
//         if (count === 1) {
//             result.push(arr[i])
//         }
//     }
//     return result
// }
// console.log(withoutRepeat([1, 1, 2, 2, 3, 4, 5, 5])); // ['3','4']

// function linearWithoutRepeat(arr) { // O(N)
//     const result = []
//     const dictionary = {}
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         dictionary[item] = dictionary[item] ? dictionary[item] + 1 : 1
//     }
//     for (let i = 0; i < arr.length; i++) {
//         const item = arr[i];
//         if (dictionary[item] === 1) {
//             result.push(item)
//         }
//     }
//     return result
// }
// console.log(linearWithoutRepeat([1, 1, 2, 2, 3, 4, 5, 5])); // ['3','4']

// function anagram(str1, str2) {
//     const dictionary1 = {}
//     const dictionary2 = {}

//     for (char of str1.toLowerCase()) dictionary1[char] = dictionary1[char] + 1 || 1
//     for (char of str2.toLowerCase()) dictionary2[char] = dictionary2[char] + 1 || 1

//     if (Object.keys(dictionary1).length !== Object.keys(dictionary2).length) return false
//     for (char in dictionary1) {
//         if (dictionary1[char] !== dictionary2[char]) return false
//     }
//     return true

//     // oneliner
//     // return [...str1.toLowerCase()].sort().toString() === [...str2.toLowerCase()].sort().toString()
// }
// console.log((anagram('friend', 'Finder')));
// console.log((anagram('hello', 'bye')));

// function singleNumber(array) {
//     let uniq = new Set()
//     let uniqSum = 0
//     let numSum = 0

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//         if (!uniq.has(element)) {
//             uniq.add(element)
//             uniqSum += element
//         }
//         numSum += element
//     }
//     return uniqSum * 2 - numSum
// }
// console.log(singleNumber([4, 1, 2, 1, 2]));

// function singleNumber(array) {
//     let uniq = Array.from(new Set(array))
//     let uniqSum = uniq.reduce((a, b) => a + b)
//     let numSum = array.reduce((a, b) => a + b)

//     return uniqSum * 2 - numSum
// }
// console.log(singleNumber([4, 1, 2, 1, 2, 33]));

// function myFunction(a, b) {
//     return Math.abs(a - b) / (1000 * 60) <= 60
// }
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:00')));
// console.log(myFunction(new Date('2000/01/01 09:00:00'), new Date('2000/01/01 08:45:00')));

// function myFunction({ date, daysToAdd }) {
//     return date.getTime() + (daysToAdd * 1000 * 60 * 60 * 24)
// }
// console.log(myFunction({ date: new Date(Date.UTC(2000, 01, 01)), daysToAdd: 31 }));
// console.log(myFunction({ date: new Date(Date.UTC(2000, 02, 28,)), daysToAdd: 2 }));

// function myFunction(a, b) {
//     return {
//         hrs: Math.abs(a.getHours() - b.getHours()),
//         min: Math.abs(a.getMinutes() - b.getMinutes()),
//         sec: Math.abs(a.getSeconds() - b.getSeconds())
//     }
// }
// console.log(myFunction(new Date('2000/01/01 08:00:00'), new Date('2000/01/01 08:45:10')));
// console.log(myFunction(new Date('2000/01/01 11:04:12'), new Date('2000/01/01 08:00:00')));

// function myFunction(array) {
//     return array.sort((a, b) => Math.random() - 0.5)
// }
// for (let i = 0; i < 5; i++) console.log(myFunction([1, 2, 3, 4, 5, 6, 7, 8, 9]).join());

// function myFunction(myObj) {
//     // return Object.fromEntries(Object.entries(myObj).filter(([key, value]) => key !== 'country'))
//     const { country, ...rest } = myObj
//     return rest

// }
// console.log(myFunction({ continent: 'Asia', country: 'Japan', region: 'Kansai' }));

// function myFunction(myObj) {
//     return Object.fromEntries(Object.entries(myObj).map(([a, b]) => [b, a]))
// }
// console.log(myFunction({ bear: 'animal', sow: 'female', boar: 'male', cub: 'young' }));

// function myFunction(myObj, str) {
//     return myObj.map(i => ({...i, continent: str}))
// }
// console.log(myFunction([{ city: 'Tokyo', country: 'Japan' }, { city: 'Bangkok', country: 'Thailand' }], 'Asia'));

// function myFunction(a, b) {
//     b.city = b.country
//     delete b.country
//     return {...a,...b}
// }
// console.log(myFunction({ continent: 'Europe', country: 'Germany' }, { planet: 'Earth', country: 'Munich', state: 'Bavaria' }));

