const express = require('express')
//const Inventario = require('../models/inventario')
const rutas = express.Router();

const {
    getProductoId,
    getProductosInventario,
    guardarProducto,
    actualizarProducto,
    delProducto
} = require('../controllers/inventarioController');

rutas.route('/')
    .get(getProductosInventario)
    .post(guardarProducto);

rutas.route('/:id')
    .get(getProductoId)
    .put(actualizarProducto)
    .delete(delProducto);

module.exports = rutas


//rutas.get('/',async (req,res) => {
//    const productos = await Inventario.find()
//    console.log(productos)
//    res.json(productos)
//})



//rutas.get('/:id',async (req,res)=>{
//   const producto = await Inventario.findById(req.params.id)
//    res.json(producto)
//})

//rutas.post('/',async (req,res)=>{
//    const {codigo,nombre_producto,descripcion,marca,valor,cantidad} = req.body
//    const producto= new Inventario({codigo,nombre_producto,descripcion,marca,valor,cantidad})
//    console.log(producto)
//    await producto.save()
//    res.json({status:'Producto Guardado'})
//})

//rutas.put('/:id',async (req,res)=>{
//    const {codigo,nombre_producto,descripcion,marca,valor,cantidad} = req.body
//    const newProducto = {codigo,nombre_producto,descripcion,marca,valor,cantidad}
//    await Inventario.findByIdAndUpdate(req.params.id,newProducto)
//    res.json({status:'Producto Actualizado'})
//})

//rutas.delete('/:id',async (req,res)=>{
//    await Inventario.findByIdAndDelete(req.params.id)
//    res.json({status:'Producto Eliminado'})
//})

