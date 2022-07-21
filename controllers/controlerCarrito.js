// const modelsCarritos = require('../models/carritos.js')
const consultTypeBaseDaoCarrito = require('../dao/carritoDao')
const consultTypeBaseDaoProducto = require('../dao/productosDao')

const nuevoCarrito = async (req,res)=>{
	const timestamp = Date.now()
	const database = await consultTypeBaseDaoCarrito('fs')
	const data = await database.saveCarrito({timestamp:new Date(timestamp)})
	res.json(data)
}

const borraCarrito = async (req,res)=>{
	const database = await consultTypeBaseDaoCarrito('fs')

	const data = await database.borrarByCarritoId(parseInt(req.params.id))
	data.message ? res.json({error:data.message}) : res.json({message:'se borro el carrito'})
}

const nuevoProdCarrito = async (req,res)=>{
	const {params:{id}} = req
	const database = await consultTypeBaseDaoCarrito('fs')
	const databaseProd = await consultTypeBaseDaoProducto('fs')

	const producto = await databaseProd.getByProductoId(parseInt(id))
	const idCarrito = 1 // fuerzo al primer carrito
	if(producto.message){
		res.json({error:producto.message})
	}
	const data = await database.updateByCarritoId(...producto,idCarrito)
	res.json(data)
}
const obtenerProdCarrito = async (req,res)=>{
	const {params:{id}} = req
	const database = await consultTypeBaseDaoCarrito('fs')
	const carrito = await database.getByCarritoId(parseInt(id))
	carrito.message ? res.status(401).json({msj:carrito.message}) : res.json(carrito)
}

const borraProdCarrito = async (req,res)=>{
	const {params:{id,id_prod}} = req
	const database = await consultTypeBaseDaoCarrito('fs')
	const data = await database.borrarByProdCarritoId(parseInt(id),parseInt(id_prod))
	data.message ? res.status(401).json({msj:data.message}) : res.json(data)
}
module.exports = {nuevoCarrito,borraCarrito,nuevoProdCarrito,obtenerProdCarrito,borraProdCarrito}

