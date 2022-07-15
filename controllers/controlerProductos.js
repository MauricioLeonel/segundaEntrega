const modelsProductos = require('../dao/productosDao/fs')
const modelsProductosmysql = require('../dao/productosDao/mysql')
const modelsProductoslite = require('../dao/productosDao/sqlite')
const modelsProductosMongo = require('../dao/productosDao/mongo')
const modelsProductosFirebase = require('../dao/productosDao/firebase')


const nuevoProducto = async (req,res)=>{
	const timestamp = Date.now()
	const {body:{nombre, descripcion, codigo, foto, precio, stock}} = req
	const data = await modelsProductos.saveProducto({timestamp, nombre, descripcion, codigo, foto, precio, stock})
	const data2 = await modelsProductosmysql.saveProducto({nombre, descripcion, codigo, foto, precio, stock})
	const data3 = await modelsProductoslite.saveProducto({nombre, descripcion, codigo, foto, precio, stock})
	const data4 = await modelsProductosMongo.saveProducto({nombre, descripcion, codigo, foto, precio, stock})
	const data5 = await modelsProductosFirebase.saveProducto({nombre, descripcion, codigo, foto, precio, stock})
	// console.log(data5)
	res.json(data)
}
const consultaProducto = async (req,res)=>{
	const {id} = req.params
	const data = await modelsProductos.getByProductoId(parseInt(id))
	const data2 = await modelsProductosmysql.getByProductoId(parseInt(id))
	const data3 = await modelsProductoslite.getByProductoId(parseInt(id))
	const data4 = await modelsProductosMongo.getByProductoId(parseInt(id))
	const data5 = await modelsProductosFirebase.getByProductoId(parseInt(id))
	console.log(data3)
	console.log(data2)
	console.log(data4)
	console.log(data5)
	data.message ? res.status(404).json({Error:data.message}) : res.json(data)
}
const actualizaProducto = async (req,res)=>{
	req.body = {...req.body,id:parseInt(req.params.id)}
	const data = await modelsProductos.updateByProductoId(req.body)
	const data2 = await modelsProductosmysql.updateByProductoId(req.body)
	const data3 = await modelsProductoslite.updateByProductoId(req.body)
	const data4 = await modelsProductosMongo.updateByProductoId(req.body)
	const data5 = await modelsProductosFirebase.updateByProductoId(req.body)
	data.message ? res.status(404).json({Error:data.message}) : res.json(data)
}
const borrarProducto = async (req,res)=>{
	const data = await modelsProductos.borrarByProductoId(parseInt(req.params.id))
	const data2 = await modelsProductosmysql.borrarByProductoId(parseInt(req.params.id))
	const data3 = await modelsProductoslite.borrarByProductoId(parseInt(req.params.id))
	const data4 = await modelsProductosMongo.borrarByProductoId(parseInt(req.params.id))
	const data5 = await modelsProductosFirebase.borrarByProductoId(parseInt(req.params.id))
	console.log(data4)
	data.message ? res.status(404).json({Error:data.message}) : res.json(data)
}


module.exports = {nuevoProducto,consultaProducto,actualizaProducto,borrarProducto}