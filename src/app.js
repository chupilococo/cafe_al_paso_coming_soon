//C:\Users\dcarena\Documents\proyectos\cursos\node\mongodb\bin\mongod.exe --dbpath=C:\Users\dcarena\Documents\proyectos\cursos\node\mogodb-data

const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()
const port = process.env.PORT || 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title:"Caf&eacute; al Paso & Bebidas"
    })
})

app.get('*', (req, res) => {
    res.render('index', {
        title: 'No encontramos la pagina que buscabas.'
    })
})

app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})