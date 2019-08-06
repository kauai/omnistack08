const express = require('express')
const server = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

server.use(express.json())

server.use(require('./routes'))
mongoose.connect('mongodb+srv://omnistack:omnistack2012@meudinheiro-jmzoi.mongodb.net/omnistack8?retryWrites=true&w=majority',{
     useNewUrlParser:true
})

server.listen(port,e => {
    if(e) console.log(e)
    console.log(`Servidor rodando na porta ${port}`)
})  