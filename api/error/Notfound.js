class Notfound extends Error {
    constructor() {
        super('Fornecedor não encontrado')
        this.id = 0
        this.name = 'Notfound'
    }
}

module.exports = Notfound