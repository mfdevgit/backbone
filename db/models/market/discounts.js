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
    tech: {
        type: Object,
        required: true
    }
})

export default mongoose.model('Discount', DiscountSchema, 'market_discounts')
