const express = require('express')
const server = express()
const cors = require('cors')
const mongoose = require('mongoose')
const port = process.env.PORT || 3000

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/omnistack08',{
     useCreateIndex: true,//sem essa config da erro
     useNewUrlParser:true
})

mongoose.Promise = global.Promise

// mongoose.connect('mongodb+srv://omnistack:omnistack2012@meudinheiro-jmzoi.mongodb.net/omnistack8?retryWrites=true&w=majority',{
//      useNewUrlParser:true
// })


server.use(cors())
server.use(express.json())
server.use(require('./routes'))

server.listen(port,e => {
    if(e) console.log(e)
    console.log(`Servidor rodando na porta ${port}`)
})  