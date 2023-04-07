import express from 'express'
import cors from 'cors'
import connectDatabase from './db/connection.js'
import { getGradientAll, createGradientOne, updateGradientCopies, removeGradientOne } from './controllers/gradients.js'
import { getPizzaAll, getSnackAll, getDessertAll, getDrinkAll } from './controllers/pizzaMarket.js'
import { checkAuth } from './middlewares/checkAuth.js'

const app = express()
app.use(cors())
app.use(express.json())
connectDatabase()

app.get('/pizza_market/pizzas', getPizzaAll)
app.get('/pizza_market/snacks', getSnackAll)
app.get('/pizza_market/desserts', getDessertAll)
app.get('/pizza_market/drinks', getDrinkAll)

app.get('/', (req, res) => {
    res.status(200).send("I'm working, honey. Ask me later.")
})
app.get('/gradients', getGradientAll)
app.patch('/gradients/:id', updateGradientCopies)
app.post('/gradients', checkAuth, createGradientOne)
app.delete('/gradients/:id', checkAuth, removeGradientOne)

app.listen(5000, err => {
    if (err) {
        return console.log(err)
    } else {
        console.log('Server STARTED')
    }
})
