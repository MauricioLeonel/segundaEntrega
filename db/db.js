const mongoose = require('mongoose')

const db = async()=>{
	return await mongoose.connect('mongodb://localhost/productos')
}


module.exports = db