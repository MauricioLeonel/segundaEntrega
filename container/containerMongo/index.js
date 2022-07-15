// const mongoose = require('mongoose');
// const modelsMongoProductos = require('../../models/modelsMongoProductos');

class ContainerProductos {
	constructor(models){
		this.models = models
	}

	getAll = async()=>{
		const result = await this.models.find()
		return result
	}

	insertData = async(data)=>{
		const id = await this.getAll()
		let id2
		if(id.length > 0){
			id2 = id[id.length-1]._id + 1
		}else{
			id2 = 1
		}
		data = {...data, _id:id2}
		const result = new this.models(data)

		return await result.save()
	}	

	getById = async(element)=>{
		const result = await this.models.find({_id:element})
		// console.log(result)
		return result
	}
	updateById = async(element)=>{
		try{
			const {nombre,descripcion,codigo,foto,precio,stock,id}=element
			await this.models.findOneAndUpdate({_id:id},
				{
					$set:{
						nombre:nombre,
						descripcion:descripcion,
						codigo:codigo,
						foto:foto,
						precio:precio,
						stock:stock
					}
				},
				{
					new:true
				}
			)
			return 'data actualizada'
		}catch(e){
			return 'hubo un error'
		}
	}
	deleteById = async(id)=>{
		try{
			await this.models.deleteOne({_id:id})
			return 'los datos fueron borrados'
		}catch(e){
			return 'no se pudo borrar'
		}
	}
}

module.exports = ContainerProductos