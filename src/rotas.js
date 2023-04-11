const { Router } = require ('express')

const {hello1, hello2} = require('./controll')

const routes = routes()

routes.get('/hello', hello1)

routes.get('/hello2', hello2)

modules.exports = routes