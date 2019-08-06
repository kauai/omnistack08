const express = require('express')
const router = express.Router()

router.get('/',(req,res) => {
        res.send(`Passando parametro ${req.query.name}`)
})

router.post('/devs',({ body },res) => {
    console.log(body)
    res.status(200).send({ ok:true, body })
})

module.exports = router