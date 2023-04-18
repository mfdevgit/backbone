import mongoose from 'mongoose'

const SnackSchema = new mongoose.Schema({
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

export default mongoose.model('Snack', SnackSchema, 'pizza_market_snacks')
