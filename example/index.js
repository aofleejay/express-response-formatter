const express = require('express')
const responseEnhancer = require('../src')

const app = express()
app.use(responseEnhancer())

app.get('/', (req, res) => res.badGateway())

app.listen(3000, () => console.log('Start at http://localhost:3000'))
