import express from 'express'
import cors from 'cors'
import connectDatabase from './db/connection.js'
import { getAllProductsFromCategory, checkDiscount, updateProductPopularity } from './controllers/market.js'

const app = express()
app.use(cors())
app.use(express.json())
connectDatabase()

app.get('/', (req, res) => {
    res.status(200).send("I'm working, honey. Ask me later.")
})

app.get('/market/products/:category', getAllProductsFromCategory)
app.get('/market/discounts/:code', checkDiscount)
app.patch('/market/products/popularity', updateProductPopularity)

app.listen(5000, err => {
    if (err) {
        return console.log(err)
    } else {
        console.log('Server STARTED')
    }
})
