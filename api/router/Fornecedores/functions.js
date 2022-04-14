const model = require('../../models/Fornecedor')

module.exports = {
    read() {
        return model.findAll()
    },
    insert(objeto) {
        return model.create(objeto)
    }
}