const model = require('../router/Fornecedores/modelData')

model   
    .sync()
    .then(() => {
        console.log('Tabela criada com sucesso')
    })
    .catch(console.log)