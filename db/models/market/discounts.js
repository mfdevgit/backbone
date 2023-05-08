import mongoose from 'mongoose'

const DiscountSchema = new mongoose.Schema({
    promocode: {
        type: String,
        required: true
    },
    fullname: {
        type: String,
        required: true
    },
    description: {
        type: Object,
        required: true
    },
    tech: {
        type: Object,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

export default mongoose.model('Discount', DiscountSchema, 'market_discounts')
