const express = require('express')
const bodyParser = require('body-parser')
const config = require('config')
const router = require('./router/Fornecedores')
const app = express()

app.use(bodyParser.json())
app.use('/api/fornecedores', router)

app.listen(config.get('api.port'), () => {
    console.log('Servidor iniciado na porta', config.get('api.port'))
})