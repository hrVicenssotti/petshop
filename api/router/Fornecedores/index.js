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
router.get('/:idFornecedor', async (req, res) => {
    try {
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.loadID()
        res.send(JSON.stringify(fornecedor))
    }catch (erro) {
        res.send(JSON.stringify({
            message: erro.message
        }))
    }
})
router.put('/:idFornecedor', async (req, res) => {
    try {
        const id = req.params.idFornecedor
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})
        const fornecedor = new Fornecedor(dados)
        await fornecedor.updateID()
        res.end()
    }
    catch (erro) {
        res.send(JSON.stringify({
            message: erro.message
        }))
    }
})
module.exports = router