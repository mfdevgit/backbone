import mongoose from "mongoose"

const GradientSchema = new mongoose.Schema({
    colors: {
        type: Array,
        required: true
    },
    copies: {
        type: Number,
        default: 0
    }
})

export default mongoose.model("Gradient", GradientSchema, "gradients")
