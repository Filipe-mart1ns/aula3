const { Router } = require ('express')

const {hello1, hello2} = require('./controll')
const { createcart } = require('./controllers')

const routes = routes()

routes.post('/cart', createcart)

routes.get('/hello2', hello2)

modules.exports = routes