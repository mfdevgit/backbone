import GradientModel from "../db/models/gradient.js"

export const getGradientAll = async (req, res) => {
    try {
        let gradients = await GradientModel.find()
        gradients = gradients.map(gradient => {
            const { _id: id, __v, ...rest } = gradient.toObject()
            return { ...rest, id }
        })
        res.json(gradients)
    } catch (err) {
        res.status(500).json({
            message: "Не удалось загрузить градиенты."
        })
    }
}

export const createGradientOne = async (req, res) => {
    try {
        const doc = new GradientModel({
            colors: req.body.colors
        })
        const gradient = await doc.save()
        const { _id: id, __v, ...rest } = gradient.toObject()
        res.status(200).json({ ...rest, id })
    } catch (err) {
        res.status(500).json({
            message: "Не удалось добавить градиент."
        })
    }
}

export const removeGradientOne = async (req, res) => {
    try {
        const id = req.params.id
        await GradientModel.findByIdAndDelete({
            _id: id
        })
        res.status(200).json({
            message: "Градиент удалён."
        })
    } catch (err) {
        res.status(500).json({
            message: "Не удалось удалить градиент."
        })
    }
}

export const updateGradientCopies = async (req, res) => {
    try {
        await GradientModel.findByIdAndUpdate(req.params.id, {
            $inc: {
                copies: 1
            }
        })
        res.status(200).json({
            message: "Счётчик обновлён."
        })
    } catch (err) {
        res.status(500).json({
            message: "Не удалось обновить счётчик."
        })
    }
}
