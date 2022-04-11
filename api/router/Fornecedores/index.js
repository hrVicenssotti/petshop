const router = require("express").Router()
const tableFornecedor = require('./tableFornecedor')
const Fornecedor = require("./Fornecedor")

router.get('/', async (req, res) => {
    const result = await tableFornecedor.listar()
    res.send(
        JSON.stringify(result)
    )
})

router.post('/', async (req, res) => {
    const dadosRecebidos = req.body
    const fornecedor = new Fornecedor(dadosRecebidos)
    await fornecedor.create()
    res.send(
        JSON.stringify(fornecedor)
    )
})

module.exports = router