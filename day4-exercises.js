// Conditionals

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('Enter your age: ', (answer) => {

//     if (answer >= 18) {
// 	console.log(`You are old enough to drive. Your answer: ${answer}`);
//     } else {
// 	console.log(`You are left with ${18 - answer} years to drive. Your answer: ${answer}`);
//     }

//     rl.close();
// });


rl.question('Enter a number: ', (answer) => {

    if (answer % 2 === 0) {
	console.log(`${answer} is an even number`);
    } else {
	console.log(`${answer} is an odd number`);
    }

    rl.close();
});
