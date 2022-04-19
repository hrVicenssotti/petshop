const modelFunction = require("./functions")
const Invalidfield = require('../../error/Invalidfield')
const Nodata = require('../../error/Nodata')

class Fornecedor{
    constructor({id, empresa, email, categoria, dataCriacao, dataAtualizacao, versao}) {
        this.id = id
        this.empresa = empresa
        this.email = email
        this.categoria = categoria
        this.dataCriacao = dataCriacao
        this.dataAtualizacao = dataAtualizacao
        this.versao = versao
    }
    async create() {
        this.authenticate()
        const result = await modelFunction.insert({
            empresa: this.empresa,
            email: this.email,
            categoria: this.categoria
        })
        this.id = result.id
        this.dataCriacao = result.dataCriacao
        this.dataAtualizacao = result.dataAtualizacao
        this.versao = result.versao
    }
    async loadID() {
        const result = await modelFunction.readID(this.id)
        this.empresa = result.empresa
        this.email = result.email
        this.categoria = result.categoria
        this.dataCriacao = result.dataCriacao
        this.dataAtualizacao = result.dataAtualizacao
        this.versao = result.versao
    }
    async updateID() {
        await modelFunction.readID(this.id)
        const campos = ['empresa', 'email', 'categoria']
        const dados = {}
        campos.forEach((campo) => {
            const valor = this[campo]
            if (typeof valor === 'string' && valor.length > 0) {
                dados[campo] = valor
            }
        })
        if (Object.keys(dados).length === 0) {
            throw new Nodata()
        }
        await modelFunction.update(this.id, dados)
    }
    deleteID() {
        return modelFunction.deleteID(this.id)
    }
    authenticate() {
        const campos = ['empresa', 'email', 'categoria']
        campos.forEach(campo => {
            const valor = this[campo]
            if (typeof valor !== 'string' || valor.length === 0) {
                throw new Invalidfield(campo)
            }
        })
    }
}

module.exports = Fornecedor