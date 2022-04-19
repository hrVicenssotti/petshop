class Invalidfield extends Error {
    constructor(campo) {
        super(`O campo ${campo} está inválido`)
        this.id = 1
        this.name = 'Invalidfield'
    }
}

module.exports = Invalidfield