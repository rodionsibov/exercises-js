let msg = 'Hello world'
console.log(msg);

const { readdir, stat } = require('fs')

readdir('./', (err, files) => {
    files.forEach(file => {
        // if (statSync(file).isFile()) console.log(statSync(file).birthtime.toLocaleString(), ' - ', file);
        stat(file, (err, stats) => {
            if (stats.isFile() && file.includes('app')) {
                console.log(`${file} -> ${stats.birthtime.toLocaleString()}`)
            }
        })
    })
})

// const isSameDay = (a, b) => {
//     return a.getFullYear() === b.getFullYear() &&
//         a.getMonth() === b.getMonth() &&
//         a.getDate() === b.getDate()
// }
