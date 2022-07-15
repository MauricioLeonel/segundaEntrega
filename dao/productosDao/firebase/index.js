// const modelsMongoProductos = require('../../../models/modelsMongoProductos');
const ContainerFirebase = require('../../../container/containerFirebase');

class Productos extends ContainerFirebase{
	constructor(){
		super()
	}
	// init = async()=>{
	// 	try{
	// 		await this.create()
	// 	}catch(e){
	// 		await this.getPoductos()
	// 	}
	// }

	getProductos = async ()=>{
		return await this.getAll()
	}


	saveProducto = async(data)=>{
		return await this.insertData(data)
	}
	getByProductoId = async (element)=>{
		
		try{
			return await this.getById(element)
		}catch(e){
			return 'no hay data'
		}
	}
	updateByProductoId = async (element)=>{
		try{
			await this.updateById(element)
		}catch(e){
			return 'no se pudieron actulizar los datos'
		}
	}
	borrarByProductoId = async(id)=>{
		try{
			this.deleteById(id)
		}catch(e){
			return 'no hubo productos'
		}
	}
}


module.exports =  new Productos()

