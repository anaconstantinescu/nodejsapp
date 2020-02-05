// ----- Imports
const express = require('express')
const path = require('path')
const expressEdge = require('express-edge')
const mongoose = require('mongoose')

// ----- Declarations 
const app = new express()

// ----- Connect do DB
mongoose.connect('mongodb://localhost/node-js-blog', {useNewUrlParser: true })



// ----- Use
app.use(express.static('public'))
app.use(expressEdge.engine)

// ----- Set
app.set('views', `${__dirname}/views`)

// ----- Get
app.get('/', (request, response) => {
//	response.sendFile(path.resolve(__dirname, 'pages/index.html'))
	response.render('index')
})
app.get('/about', (request, response) => {
	response.render('about')
})
app.get('/contact', (request, response) => {
	response.render('contact')
})
app.get('/post', (request, response) => {
	response.render('post')
})

app.listen(4000, () => {
	console.log("App is listening at port 4000")
})