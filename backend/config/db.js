const mongoose = require('mongoose')

const URI = 'mongodb://localhost:27017/Inventario'
mongoose.connect(URI)
    .then(db => console.log('BD está conectada'))
    .catch(err => console.error(err))

module.exports = mongoose