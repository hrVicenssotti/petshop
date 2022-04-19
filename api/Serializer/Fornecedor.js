const { Serializer } = require('./Serializer')

class Fornecedor extends Serializer {
    constructor(contentType, camposExtras) {
        super()
        this.campos = ['id', 'empresa', 'categoria'].concat(camposExtras || [])
        this.contentType = contentType
        this.tag = 'fornecedor'
    }
}

module.exports = Fornecedor