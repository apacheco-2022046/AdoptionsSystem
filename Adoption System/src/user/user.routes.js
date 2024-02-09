'use strict'

import express from 'express'
import {test, register, login, update} from './user.controller.js'

const api = express.Router()

api.get('/test', test)
api.post('/register', register)
api.post('/login', login)
api.put('/update/:id',update)

//export const api  >- tengo que si o si el nombre que esta en este archivo Ej: api
export default api //Importar con otro nombre ej: userRoters