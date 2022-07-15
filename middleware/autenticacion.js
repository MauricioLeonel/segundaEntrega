const autenticacionUser = (req,res,next)=>{
	const administrador = true
	if(!administrador){
		return res.status(401).json({msj:'usuario no permitido'})
	}
	next()
}

module.exports = autenticacionUser