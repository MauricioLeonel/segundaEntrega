const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const db = require('./db/db.js')






// db2.collection("cities").add({
//     name: "Los Angeles2",
//   	state: "CA",
//   	country: "USA"
// })
// .then((docRef) => {
//     console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//     console.error("Error adding document: ", error);
// });





const routerProductos = require('./routes/routerProductos.js')
const routerCarritos = require('./routes/routerCarritos.js')


let port = process.env.PORT ? process.env.PORT : '8080'

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/productos',routerProductos)
app.use('/api/carritos',routerCarritos)



app.listen(port,()=>{
	console.log('escuchando todo oki')
	db()
})