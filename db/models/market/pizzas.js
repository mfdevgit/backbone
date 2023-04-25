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
    popularity: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    }
})

export default mongoose.model('Pizza', PizzaSchema, 'market_pizzas')
