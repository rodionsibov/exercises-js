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

const data = {
    title: 'Design Patterns', id: Date.now()
}

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.writeFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}
const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
        if (err) {
            return reject(err.message)
        }
        resolve(data)
    }))
}
const removeFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.rm(path, (err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test.txt'), JSON.stringify(data))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), '\n133'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' 3454'))
//     .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'), ' 1sfsd3'))
//     .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
//     .then(data => console.log(data))
//     .catch(err => console.log(err))

removeFileAsync(path.resolve(__dirname, 'test.txt'))
    .then(() => console.log('file was removed'))
    .catch(err => console.log(err))
