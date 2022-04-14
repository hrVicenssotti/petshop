const router = require("express").Router()
const modelFunctions = require('./functions')
const Fornecedor = require("./Fornecedor")

router.get('/', async (req, res) => {
    const result = await modelFunctions.read()
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