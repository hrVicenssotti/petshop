const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const router = require('./router/Fornecedores')
const { contentTypes } = require('./Serializer/Serializer')
const Erro = require('./error/Erro')
const app = express()

app.use(bodyParser.json())
app.use((req, res, next) => {
    let contentType = req.header('Accept')
    console.log(contentType)
    if (contentType === '*/*') {
        contentType = 'application/json'
    }
    if (contentType.indexOf(contentType) === -1) {
        res.status(406)
        res.end()
        return
    }
    res.setHeader('Content-Type', contentType)
    next()
})
app.use('/api/fornecedores', router)
app.use(Erro)

app.listen(config.get('api.port'), () => {
    console.log('Servidor iniciado na porta', config.get('api.port'))
})