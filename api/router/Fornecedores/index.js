const router = require("express").Router()
const modelFunctions = require('./functions')
const Fornecedor = require("./Fornecedor")
const Serializer = require('../../Serializer/Fornecedor')

router.get('/', async (req, res, next) => {
    try {
        const result = await modelFunctions.read()
        const serialize = new Serializer(res.getHeader('Content-Type'))
        res.status(200)
        res.send(
            serialize.serialize(result)
        )
    }catch (erro) {
        next(erro)
    }
})
router.get('/:idFornecedor', async (req, res, next) => {
    try {
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.loadID()
        const serialize = new Serializer(res.getHeader('Content-Type'), ['email', 'dataCriacao', 'dataAtualizacao', 'versao'])
        res.status(200)
        res.send(
            serialize.serialize(fornecedor)
        )
    }catch (erro) {
        next(erro)
    }
})
router.post('/', async (req, res, next) => {
    try {
        const dadosRecebidos = req.body
        const fornecedor = new Fornecedor(dadosRecebidos)
        await fornecedor.create()
        const type = res.getHeader('Content-Type')
        const serialize = new Serializer(type)
        res.status(201)
        res.send(
            serialize.serialize(fornecedor)
        )
    }catch (erro)  {
        next(erro)
    }
})
router.put('/:idFornecedor', async (req, res, next) => {
    try {
        const id = req.params.idFornecedor
        const dadosRecebidos = req.body
        const dados = Object.assign({}, dadosRecebidos, {id: id})
        const fornecedor = new Fornecedor(dados)
        await fornecedor.updateID()
        res.status(204)
        res.end()
    }
    catch (erro) {
        next(erro)
    }
})
router.delete('/:idFornecedor', async (req, res, next) => {
    try {
        const id = req.params.idFornecedor
        const fornecedor = new Fornecedor({ id: id })
        await fornecedor.loadID()
        fornecedor.deleteID()
        res.status(204)
        res.end()
    }catch (erro) {
        next(erro)
    }
})
module.exports = router