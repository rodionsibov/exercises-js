// Regular Expressions

//let regEx = new RegExp(pattern, flag)
// const regEx = /love/i
// const result = regEx.test("I love JavaScript")
// console.log(result)

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.match(pattern)
// console.log(result)

// const str = 'I love JavaScript'
// const pattern = /love/g
// const result = str.search(pattern)
// console.log(result)


// const txt = '%I a%m te%%a%%che%r% a%n%d %% I l%o%ve te%ach%ing. T%he%re i%s n%o%th%ing as m%ore r%ewarding a%s e%duc%at%i%ng a%n%d e%m%p%ow%er%ing. I fo%und te%a%ching m%ore i%n%t%er%%es%ting t%h%an any other %jobs. D%o%es thi%s m%ot%iv%a%te %y%o%u to b%e a t%e%a%cher.'
// matches = txt.replace(/%/g, '')
// console.log(matches) 

//[],^,$,\d,\D,.,|,(),*,+,?,{},

// const pattern = /\d+/g  // d is a special character which means digits
// const txt = 'This regular expression example was made in January 12,  2020.'
// const matches = txt. match(pattern)
// console.log(matches);

// const txt = 'This regular expression example was made in December 6,  2019.'
// const pattern = /\d{4}/g  // exactly four times
// const matches = txt.match(pattern)
// console.log(matches)  // ['2019']

// const txt = "He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month."
// const matches = txt.match(/\d+/g);
// const result = matches.map(e=>+e).reduce((a,b) => a+b);
// console.log(result)

// const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8']
// //const matches = points.join().match(/-\d+/g);
// const sortedPoints = points.map(e=>+e).sort((a,b) => a-b);
// const [firstPoint,,,,,,,lastPoint] = sortedPoints
// //const distance = Math.abs(sortedPoints[0]) + sortedPoints[sortedPoints.length-1]
// const distance = Math.abs(firstPoint) + lastPoint
// console.log(distance);

// const isValidVariable = (str) => {
//     return /^[^1]+_/.test(str);
// }
// console.log(isValidVariable("first_name"))
// console.log(isValidVariable("first-name"))
// console.log(isValidVariable("1first_name"))
// console.log(isValidVariable("firstname"))

// const words = [
//     {word:'love', count:6},
//     {word:'you', count:5},
//     {word:'can', count:3},
//     {word:'what', count:2},
//     {word:'teaching', count:2},
//     {word:'not', count:2},
//     {word:'else', count:2},
//     {word:'do', count:2},
//     {word:'I', count:2},
//     {word:'which', count:1},
//     {word:'to', count:1},
//     {word:'the', count:1},
//     {word:'something', count:1},
//     {word:'if', count:1},
//     {word:'give', count:1},
//     {word:'develop',count:1},
//     {word:'capabilities',count:1},
//     {word:'application', count:1},
//     {word:'an',count:1},
//     {word:'all',count:1},
//     {word:'Python',count:1},
//     {word:'If',count:1}
// ]
// const tenMostFrequentWords = (words) => {
//     return words.slice(0, 10);
// }
// console.log(tenMostFrequentWords(words));


sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
const result = sentence.replace(/[%$&;#@]/g, "");
console.log(result)
