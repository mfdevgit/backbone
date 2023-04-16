import mongoose from 'mongoose'

const DiscountSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    discount: {
        type: Number,
        required: true
    }
})

export default mongoose.model('Discount', DiscountSchema, 'pizza_market_discounts')
