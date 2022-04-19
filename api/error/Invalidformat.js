class Invalidformat extends Error {
    constructor(contentType) {
        super(`O tipo ${contentType} não é suportado`)
        this.id = 3
        this.name = 'Invalidformat'
    }
}

module.exports = Invalidformat