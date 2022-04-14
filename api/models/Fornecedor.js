const Sequelize = require('sequelize')
const intancia = require('../data-base')

const colunas = {
    empresa: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
    categoria: {
        type: Sequelize.ENUM('ração', 'brinquedos'),
        allowNull: false
    }
}
const opcoes = {
    freezeTableName: true,
    tableName: 'fornecedores',
    timestamps: true,
    createdAt: 'dataCriacao',
    updateAt: 'dataAtualizacao',
    version: 'versao'
}
module.exports = intancia.define('Fornecedor', colunas, opcoes)