'use strict'

import express from 'express'
import {test,agregar} from '../animal/animal.controller.js'


const api = express.Router()
api.get('/test', test)
api.post('/agregar', agregar)

export default api