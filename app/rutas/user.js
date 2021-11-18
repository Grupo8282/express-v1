const express = require('express')
const controlador = require('../complemento/datos')
const ruta = express.Router() //defino express con el metodo ruta

const path = 'user'

ruta.get(
   // `/${path}`, controlador.getData
   '/user', controlador.getData
    
)
ruta.get( 
    '/', (req, res)=>{
        res.send('hola desde user.js')
    }
)

ruta.post(`/${path}`,controlador.insertData)

module.exports = ruta