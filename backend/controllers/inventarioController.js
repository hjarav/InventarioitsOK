const Inventario = require('../models/inventario');

exports.getProductosInventario = async (req,res)=>{
    try{
        const productos = await Inventario.find();

        res.status(200).json({
            success: true,
            data: productos
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error al obtener producto'
        });
    }
    
};

exports.getProductoId = async (req,res)=>{
    try{
        const producto = await Inventario.findById(req.params.id)

        if (!producto) {
            return res.status(404).json({
                success: false,
                error: 'Producto no encontrado'
            });
        }
        res.status(200).json({
            success: true,
            data: producto
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Error al obtener producto'
        });
    }
    
};

exports.guardarProducto = async (req,res)=>{
    try{
        const {codigo,nombre_producto,descripcion,marca,valor,cantidad} = req.body
        const producto= new Inventario({codigo,nombre_producto,descripcion,marca,valor,cantidad})
        //console.log(producto)
        await producto.save()
        //res.json({status:'Producto Guardado'})

        res.status(200).json({
            success: true,
            data: producto
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: 'Error al guardar producto'
        });
    }
};

exports.actualizarProducto = async (req,res)=>{
    try{
        const {codigo,nombre_producto,descripcion,marca,valor,cantidad} = req.body
        const updProducto = {codigo,nombre_producto,descripcion,marca,valor,cantidad}
        await Inventario.findByIdAndUpdate(req.params.id,updProducto)
        //res.json({status:'Producto Actualizado'})

        if (!updProducto) {
            return res.status(404).json({
                success: false,
                error: 'Producto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: updProducto
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: 'Error al guardar producto'
        });
    }
};

exports.delProducto = async (req,res)=>{
    try{
        const prod = await Inventario.findByIdAndDelete(req.params.id)
        //res.json({status:'Producto Eliminado'})

        if (!prod) {
            return res.status(404).json({
                success: false,
                error: 'Producto no encontrado'
            });
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            error: 'Error al eliminar producto'
        });
    }
};