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

