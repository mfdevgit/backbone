import mongoose from 'mongoose'

const DessertSchema = new mongoose.Schema({
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

export default mongoose.model('Dessert', DessertSchema, 'market_desserts')
