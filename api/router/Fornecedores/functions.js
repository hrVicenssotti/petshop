const model = require('../../models/Fornecedor')

module.exports = {
    read() {
        return model.findAll()
    },
    insert(objeto) {
        return model.create(objeto)
    },
    async readID(id) {
        const result = await model.findOne({
            where: {
                id: id
            }
        })
        if (!result) {
            throw new Error('Fornecedor não encontrado')
        }
        return result
    },
    update(id, dados) {
        return model.update(dados, {
            where: {
                id: id
            }
        })
    }
}