// const modelsCarritos = require('../models/carritos.js')
const modelsCarritos = require('../dao/carritoDao/fs')
const modelsProductos = require('../dao/productosDao/fs')

const nuevoCarrito = async (req,res)=>{
	const timestamp = Date.now()
	const productos = []
	const data = await modelsCarritos.saveCarrito({timestamp, productos})
	res.json(data)
}

const borraCarrito = async (req,res)=>{
	const data = await modelsCarritos.borrarByCarritoId(parseInt(req.params.id))
	data.message ? res.json({error:data.message}) : res.json(data)
}

const nuevoProdCarrito = async (req,res)=>{
	const {params:{id}} = req
	const producto = await modelsProductos.getByProductoId(parseInt(id))
	const carrito = await modelsCarritos.getByCarritoId(1)//fuerzo al primer carrito
	if(producto.message){
		res.json({error:producto.message})
	}else{
		carrito[0].productos.push(...producto)
		const data = await modelsCarritos.updateByCarritoId(...carrito)
		res.json(data)

	}
}
const obtenerProdCarrito = async (req,res)=>{
	const {params:{id}} = req
	const carrito = await modelsCarritos.getByCarritoId(parseInt(id))
	carrito.message ? res.status(401).json({msj:carrito.message}) : res.json(carrito[0].productos)
}
const borraProdCarrito = async (req,res)=>{
	const {params:{id,id_prod}} = req
	const carrito = await modelsCarritos.getByCarritoId(parseInt(id))
	if(carrito.message){
		res.status(401).json({msj:carrito.message})
	}else{
		//filtro 
		const result = carrito[0].productos.filter(e=> e.id !== parseInt(id_prod) )
		//asigno completo
		carrito[0].productos = result
		//actualizo
		const data = await modelsCarritos.updateByCarritoId(...carrito)
		res.send(data)
	}
	
}
module.exports = {nuevoCarrito,borraCarrito,nuevoProdCarrito,obtenerProdCarrito,borraProdCarrito}

