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


// rl.question('Enter a number: ', (answer) => {

//     if (answer % 2 === 0) {
// 	console.log(`${answer} is an even number`);
//     } else {
// 	console.log(`${answer} is an odd number`);
//     }

//     rl.close();
// });

// rl.question('Enter your scores: ', (answer) => {

//     switch (true) {
//     case answer >= 80 && answer <= 100:
// 	console.log('A');
// 	break;
//     case answer >= 70 && answer <= 89:
// 	console.log('B');
// 	break;
//     case answer >= 60 && answer <= 69:
// 	console.log('C');
// 	break;
//     case answer >= 50 && answer <= 59:
// 	console.log('D');
// 	break;
//     case answer >= 0 && answer <= 49:
// 	console.log('E');
// 	break;
//     default:
// 	console.log('Entered value was not a number');
//     }
    
//     rl.close();
// });

// rl.question('Enter a Month: ', (answer) => {

//     switch (answer {
//     case 'September':
//     case 'October':
//     case 'November':
// 	console.log('The season is Autumn.');
// 	break;
//     case 'December':
//     case'January':
//     case 'February':
// 	console.log('The season is Winter.');
// 	break;
//     case 'March':
//     case 'April':
//     case 'May':
// 	console.log('The season is Spring.');
// 	break;
//     case 'June':
//     case 'July':
//     case 'August':
// 	console.log('The season is Summer.');
// 	break;
//     default:
// 	console.log('Entered value was not a Month');
//     }    

//     rl.close();
// })

// rl.question('What is a day today? ', (answer) => {
//     if (answer === 'Saturday' || answer === 'Sunday') {
// 	console.log(`${answer} is a weekend.`)
//     } else if (answer === 'Monday' ||
// 	       answer === 'Tuesday' ||
// 	       answer === 'Wednesday' ||
// 	       answer === 'Thursday' ||
// 	       answer === 'Friday') {
// 	console.log(`${answer} is a working day.`)
//     } else {
//  	console.log('Entered value was not a day of the week');
//     }

//     rl.close();
// })

rl.question('Enter a Month: ', (answer) => {
    let month = null;
    
    switch (answer) {
    case 'January':
	month = 1;
	break;
    case 'February':
	month = 2;
	break;
    case 'March':
	month = 3;
	break;
    case 'April':
	month = 4;
	break;
    case 'May':
	month = 5;
	break;
    case 'June':
	month = 6;
	break;
    case 'July':
	month = 7;
	break;
    case 'August':
	month = 8;
	break;
    case 'September':
	month = 9;
	break;
    case 'November':
	month = 10;
	break;
    case 'October':
	month = 11;
	break;
    case 'December':
	month = 12;
	break;
    default:
	console.log('Entered value was not a Month');
	
    }

    const numberOfDays = new Date(2020, month, 0).getDate();
    console.log(`${answer} has ${numberOfDays}`)
    
    rl.close();
})

