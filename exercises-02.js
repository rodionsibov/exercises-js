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