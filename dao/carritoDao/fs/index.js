const ContainerFs = require('../../../container/containerFs')

class Carritos extends ContainerFs{
	constructor(file){
		super(file)
	}

	saveCarrito = async (data)=>{
		try{
			return await this.save(data)
		}catch(e){
			return 'no se pudo guardar'
		}
	}

	getAllCarrito = async()=>{
		return await this.getAll()
	}

	getByCarritoId = async(eleme)=>{
		return await this.getById(eleme)
	}

	updateByCarritoId = async(id)=>{
		return await this.updateById(id)
	}

	borrarByCarritoId = async(id)=>{
		return await this.borrarById(id)
	}
	// borrarAllCarrito = async()=>{
	// 	this.borrarTodo()
	// }

}


module.exports = new Carritos('carritos')