// const {config} = require('../db/config.js')
const knex = require('knex')

class Productos extends knex{
	constructor(data){
		super(data)
	}
	
}


module.exports =  Productos