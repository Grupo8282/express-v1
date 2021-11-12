const express = require('express')
const app     = express() //contiene nuestra app - hece el instanciamiento de express
const port    = 5001 //puerto por donde corre mi app


app.get('/', (req,res) =>{ //cuando mi app sea llamada por get y ruta raiz "/" ejecuta lo siguiente:
    res.send({"data": 'hola mundo'})
})

app.listen(port, ()=>{ //le estoy indicando que corra por el purto 5001 y que cuando eso pase me muestre el siguiente mensaje:
    console.log('app esta ok 2')
})

