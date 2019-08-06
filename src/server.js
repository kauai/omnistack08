const express = require('express')
const server = express()
const port = process.env.PORT || 3000

server.use(express.json())

server.use(require('./routes'))

server.listen(port,e => {
    if(e) console.log(e)
    console.log(`Servidor rodando na porta ${port}`)
})  