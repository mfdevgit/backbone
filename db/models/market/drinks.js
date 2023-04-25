import mongoose from 'mongoose'

const DrinkSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    popularity: {
        type: Number,
        default: 0
    },
    image: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    macronutrients: {
        type: Object,
        required: true
    }
})

export default mongoose.model('Drink', DrinkSchema, 'market_drinks')
