/**
 * 
 * start the server
 */
const express= require('express')

const app= express()
//stichinh the routes here
require("./routes/idea.routes")(app)
app.listen(8000,()=>{

    console.log('app started on the port num',8000)
})