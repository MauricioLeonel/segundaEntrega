const mongoose = require('mongoose')

const db = async()=>{
	try{
		return await mongoose.connect('mongodb://localhost/coderhouse')
	}catch(e){
		// throw new Error('no hay conexion de la base de datos')
		return e
	}	
}


module.exports = db