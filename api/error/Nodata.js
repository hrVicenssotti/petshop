class Nodata extends Error {
    constructor() {
        super('Nenhum dado para atualizar')
        this.id = 2
        this.name = 'Nodata'
    }
}

module.exports = Nodata