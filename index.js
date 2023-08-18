const express = require ('express')
const userRoute = require('./src/routes/user-routes')
const {errorHandlerMiddleware} = require('./src/middleware/error-handler')
const {initializeAuthentication} = require ('./src/auth/initialauth')

const app = express()
const port = 5001

initializeAuthentication()

app.use(express.json())
app.use('/users', userRoute)
app.use(errorHandlerMiddleware)

app.listen (port,(req,res)=>{
    console.log('Estoy escuchando en el puerto :'+ port)
})