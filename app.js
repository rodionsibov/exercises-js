let msg = 'Hello world'
console.log(msg);

const { readdir, stat } = require('fs')

readdir('./', (err, files) => {
    files.forEach(file => {
        // if (statSync(file).isFile()) console.log(statSync(file).birthtime.toLocaleString(), ' - ', file);
        stat(file, (err, stats) => {
            if (stats.isFile() && file.includes('04')) {
                console.log(`${file} -> ${stats.birthtime.toLocaleString()}`)
            }
        })
    })
})