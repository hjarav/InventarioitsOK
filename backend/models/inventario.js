const { MongoOIDCError } = require('mongodb')
const mongoose = require('mongoose')

const {Schema} = mongoose
const schemaInventario = new Schema({
    codigo: {type:String, required:true},
    nombre_producto: {type:String, required:true},
    descripcion: {type:String, required:true},
    marca: {type:String, required:true},
    valor: {type:Number, required:[true, 'El valor es obligatorio']},
    cantidad: {type:Number, required:true}
     
})

module.exports = mongoose.model('Inventario', schemaInventario)