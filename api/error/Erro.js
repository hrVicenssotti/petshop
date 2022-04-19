const Notfound = require('../error/Notfound')
const Invalidfield = require('../error/Invalidfield')
const Nodata = require('../error/Nodata')
const Invalidformat = require('../error/Invalidformat')
const Serializer = require('../Serializer/Error')

function Erro(erro, req, res, next) {
    let status = 500
    if (erro instanceof Notfound) {
        status = 404 
    }
    if (erro instanceof Invalidfield || erro instanceof Nodata) {
        status = 400 
    }
    if (erro instanceof Invalidformat) {
        status = 406
    }
    const serializer = new Serializer(req.headers["content-type"])
    res.status(status)
    res.send(serializer.serialize({
        id: erro.id,
        message: erro.message
    }))
}

module.exports = Erro