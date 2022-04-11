const model = require('./modelData')
module.exports = {
    listar() {
        return model.findAll()
    },
    inserir(fornecedor) {
        return model.create(fornecedor)
    }
} 