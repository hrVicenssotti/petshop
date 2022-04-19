const Invalidformat = require('../error/Invalidformat')
const jsonXML = require('jsontoxml')

const contentTypes = ['application/json', 'application/xml']

class Serializer {
    json(dados) {
        return JSON.stringify(dados)
    }
    xml(dados) {
        console.log('a tag é', this)
        debugger
        return jsonXML({ [this.tag]: dados })
    }
    serialize(dados) {
        const convert = {
            'application/json': this.json,
            'application/xml': this.xml
        }
        const run = convert[this.contentType]
        if (run) {
            debugger
            return run( this.filter(dados) )
        }else {
            throw new Invalidformat(this.contentType)
        }
    }
    filterObject(dados) {
        const newObject = {}
        this.campos.forEach((campo) => {
            if (dados.hasOwnProperty(campo)) {
                newObject[campo] = dados[campo]
            }
        })
        return newObject
    }
    filter(dados) {
        if (Array.isArray(dados)) {
            dados = dados.map(item => this.filterObject(item))
        }else {
            dados = this.filterObject(dados)
        }
        return dados
    }
}

module.exports = {Serializer, contentTypes}