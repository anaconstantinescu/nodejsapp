// ----- Imports
const express = require('express')
const path = require('path')

// ----- Declarations 
const app = new express()


// ----- Use
app.use(express.static('public'))

// ----- Get
app.get('/', (request, response) => {
	response.sendFile(path.resolve(__dirname, 'pages/index.html'))
})


app.listen(4000, () => {
	console.log("App is listening at port 4000")
})