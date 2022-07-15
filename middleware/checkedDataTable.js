const modelsProductos = require('../models/modelsProductos')
const {config} = require('../db/config')

const productos = new modelsProductos(config)

const checkedDataTable = async (req,res,next)=>{
	// try{
	// 	let data = await chatsModels.consultarTabla()
	// }catch(e){
	// 	await chatsModels.crearTabla()
	// }
	//si no tengo data entra al chat a crear la tabla productp
	try{
		let data2 = await productos.consultarTablaProductos()
	}catch(e){
		await productos.crearTablaProductos()
	}

	next()
}


module.exports = checkedDataTable