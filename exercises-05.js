const fs = require('fs')
const path = require('path')

console.log('start');

fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
    if (err) {
        throw(err)
    }
    console.log('go');
})

fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
    if(err) {
        throw(err)
    }
})