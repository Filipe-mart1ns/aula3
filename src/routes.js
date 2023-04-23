const { Router } = require('express')

const { createCart, getlistOfCart, createUserCart } = require('./controllers')

const routes = Router()

routes.post('/cart', createCart)

routes.get('/cart', getlistOfCart)

routes.post('/cart/user-cart', createUserCart)

module.exports = routes

