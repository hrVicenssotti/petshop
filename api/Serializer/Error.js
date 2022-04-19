const { Serializer } = require("./Serializer")

class Error extends Serializer {
    constructor(contentType, camposExtras) {
        super()
        this.contentType = contentType
        this.campos = ['id', 'message'].concat(camposExtras || [])
        this.tag = 'erro'
    }
}

module.exports = Error