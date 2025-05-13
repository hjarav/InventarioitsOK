const express = require('express')
const morgan = require('morgan')
const path = require('path')
const {mongoose} = require('./config/db')
const cors = require('cors')

const app = express()

// configuración 
app.set('port',process.env.PORT || 4000)

//midleware
app.use(cors({
    origin: 'http://localhost:3000', // Permite solo frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], //mÉTODOS PERMITIDOS
    allowedHeaders: ['Content-Type', 'Authorization'] //Headers permitidos
}))

app.use(morgan('dev'))
app.use(express.json())

// rutas
app.use('/api/inventario',require('./routes/rutasInventario'))

//archivos estaticos
console.log(path.join(__dirname,'public'))

//iniciar el servidor
app.listen(app.get('port'), () => { 
    console.log(`servidor en el puerto ${app.get('port')}`)
} )