const ModelsProductos = require('../../models/modelsProductos')


class ContainerProductos extends ModelsProductos{
	constructor(data){
		super(data)
	}
	create = async()=>{
		try{
			const result = await this.schema.createTable('producto',(table)=>{
			table.increments();
			table.string('nombre');
			table.string('descripcion');
			table.string('foto');
			table.string('codigo');
			table.float('precio');
			table.integer('stock');
			table.timestamp('timestamp').defaultTo(this.fn.now());
		})
		}catch(e){
			return 'ya existe'
		}
	}

	getAll = async()=>{
		const result = await this.select('*').from('producto')
		return result
	}

	insertData = async(data)=>{
		const result = await this.insert(data).into('producto')
		return result
	}	

	getById = async(element)=>{
		// console.log(element)
		const result = await this.select('*').from('producto').where('id',element)
		return result
	}
	updateById = async(element)=>{
		try{
			const {nombre,descripcion,codigo,foto,precio,stock,id}=element
			await this('producto').update({nombre,descripcion,codigo,foto,precio,stock}).where('id',id)
			return 'data actualizada'
		}catch(e){
			return 'hubo un error'
		}
	}
	deleteById = async(id)=>{
		try{
			await this('producto').where('id',id).del()
			return 'los datos fueron borrados'
		}catch(e){
			return 'no se pudo borrar'
		}
	}
}

module.exports = ContainerProductos