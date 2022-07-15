const db = require('../../db/firebase')

class ContainerProductos extends db {
	constructor(){
		super()
	}

	getAll = async()=>{
		const result = await this.collection('productos').get()
		const cities = []
		result.forEach((doc) => {
	        cities.push({...doc.data(),id2:doc.id})
	    });
		return cities
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
		const result = await this.collection('productos').add(data)
		return result 
	}	

	getById = async(element)=>{
		const result = await this.getAll()
		// const result2 = await this.collection('productos','Fkz99pqa9wx6YN4OxhGY')
		return result.filter(e=>e._id === element)
	}
	updateById = async(element)=>{
	    try{
	   	 	const dataProdActualizar = await this.getById(element.id)
		    let doc = await this.collection('productos').doc(dataProdActualizar[0].id2)
		    let item = await doc.update(element)
		    return 'se pudo actualizar todo'
		}catch(e){
			return e
		}
	}

	deleteById = async(id)=>{
		try{
	   	 	const dataProdBorrar = await this.getById(id)
		    let doc = await this.collection('productos').doc(dataProdBorrar[0].id2)
		    let item = await doc.delete()
		    return 'se pudo borrar el producto'
		}catch(e){
			return e
		}
	}

}

module.exports = ContainerProductos