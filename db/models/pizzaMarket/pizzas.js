import mongoose from 'mongoose'

const PizzaSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Array,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

export default mongoose.model('Pizza', PizzaSchema, 'pizza_market_pizzas')
