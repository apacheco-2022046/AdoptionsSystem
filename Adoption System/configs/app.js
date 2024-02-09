//Confuracion de express

import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import {config} from 'dotenv'
import userRoutes from '../src/user/user.routes.js'

const app = express() 
config()
const port = process.env.PORT || 3200


//Configurar el servidor
app.use(express.urlencoded({extended : false}))
app.use(express.json())
app.use(cors()) //Aceptar solicitudes de diferentes origenes (local, remoto)
app.use(helmet())
app.use(morgan('dev'))//Crear solicitudes al servidor HTTP

//Declaracion de rutas
app.use(userRoutes)

/*app.get('/hola',(req,res)=>{
    res.send('hola mundo')
})*/




//Levantar el servidor
export const initServer = () =>{
    app.listen(port)
    console.log(`Server HHTP running in port ${port}`)
}