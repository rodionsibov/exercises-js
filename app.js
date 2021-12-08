const mongoose = require('mongoose')
const express = require('express')

const app = express()
const port = 3000
app.use('/static', express.static('public'))

app.get('/', (req,res)=> {
    res.send('hello world!')
})

app.listen(port, ()=> {
    console.log(`Example app listening at http://localhost:${port}`)
})

