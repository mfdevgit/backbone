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
    image: {
        type: String,
        required: true
    }
})

export default mongoose.model('Snack', SnackSchema, 'pizza_market_snacks')