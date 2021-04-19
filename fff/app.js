const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/CRUDBex'
const cors = require("cors");
const app = express()

var corsOptions = {
    origin: "http://localhost:3000"
  };
  
  app.use(cors(corsOptions));

mongoose.connect(url, {useNewUrlParser:true})
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})

app.use(express.json())

const alienRouter = require('./routes/users.js')
 app.use('/',alienRouter)

app.listen(9000, () => {
    console.log('Server started')
})