'use strict '

import Animal from '../animal/animal.model.js'

export const test = (req, res) => {
    return res.send('Hello World')
  }


  export const agregar = async (req, res) => { 
    try {
      //Capturar la informacion del animal
      let data = req.body
      //Cear una instancia del modelo (schema)
      let animal = new Animal(data)
      //Guardar la información <-
      await animal.save()
      //Respondo al usuario
      return res.send({ message: 'agregado successfully'})
    } catch (err) {
      console.error(err)
      return res.status(500).send({ message: 'Error registering animal', err })
    }
  }