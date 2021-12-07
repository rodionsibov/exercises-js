const fs = require('fs')
const path = require('path')

// fs.mkdir(path.resolve(__dirname, 'dir'), (err) => {
//     if (err) {
//         throw(err)
//     }
// })

// fs.rmdir(path.resolve(__dirname, 'dir'), (err) => {
//     if(err) {
//         throw(err)
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'), '5 sdfsdfsd 7 78s9 9', (err) => {
//     if (err) {
//         throw (err)
//     }
//     console.log('the file has written');
// })

// fs.appendFile(path.resolve(__dirname, 'test.txt'), '5 sdfsdfsd 7 78s9 9', (err) => {
//     if (err) {
//         throw (err)
//     }
//     console.log('the file has appended');
// })

const writeFileAsync = async () => {
    return new Promise((resolve, reject) => fs.writeFile(path.resolve(__dirname, 'test.txt'), (err) => {
        if (err) {
           return reject(err.message)
        }
        resolve()
    }))
}