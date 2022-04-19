const model = require('../models/Fornecedor')

model   
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso')
    })
    .catch(console.log)