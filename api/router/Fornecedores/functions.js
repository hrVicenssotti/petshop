const model = require('../../models/Fornecedor')
const Notfound = require('../../error/Notfound')
module.exports = {
    read() {
        return model.findAll( { raw: true } )
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
            throw new Notfound()
        }
        return result
    },
    update(id, dados) {
        return model.update(dados, {
            where: {
                id: id
            }
        })
    },
    deleteID(id) {
        return model.destroy({
            where: {
                id: id
            }
        })
    }
}