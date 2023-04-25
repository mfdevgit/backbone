import PizzaModel from '../db/models/market/pizzas.js'
import SnackModel from '../db/models/market/snacks.js'
import DessertModel from '../db/models/market/desserts.js'
import DrinkModel from '../db/models/market/drinks.js'
import DiscountSchema from '../db/models/market/discounts.js'

export const getAllProductsFromCategory = async (req, res) => {
    try {
        const category = req.params.category
        let data = []
        switch (category) {
            case 'pizzas':
                data = await PizzaModel.find()
                break
            case 'snacks':
                data = await SnackModel.find()
                break
            case 'desserts':
                data = await DessertModel.find()
                break
            case 'drinks':
                data = await DrinkModel.find()
                break
            default:
                res.status(400).json({
                    message: 'Неверное название категории.'
                })
                return
        }
        const updated = data.map(element => {
            const { _id: id, ...rest } = element._doc
            return { id, ...rest }
        })
        res.json(updated)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить продукты категории.'
        })
    }
}
export const checkDiscount = async (req, res) => {
    try {
        const regex = /^[a-zA-Z0-9]+$/
        if (regex.test(req.params.code)) {
            const code = req.params.code.trim().toUpperCase()
            const data = await DiscountSchema.findOne({ name: code })
            if (data) {
                const { _id, ...rest } = data._doc
                res.status(200).json({ ...rest })
            } else {
                res.status(404).json({
                    message: 'Промокод не существует.'
                })
            }
        } else {
            res.status(400).json({
                message: 'Неверный формат промокода.'
            })
        }
    } catch (err) {
        res.status(500).json({
            message: 'Ошибочка.'
        })
    }
}
export const updateProductPopularity = async (req, res) => {
    const { id, category } = req.body
    try {
        const regex = /^[a-zA-Z0-9]+$/
        if (regex.test(req.body.id)) {
            switch (category) {
                case 'pizzas':
                    await PizzaModel.updateOne({ _id: id }, { $inc: { popularity: 1 } })
                    break
                case 'snacks':
                    await SnackModel.updateOne({ _id: id }, { $inc: { popularity: 1 } })
                    break
                case 'desserts':
                    await DessertModel.updateOne({ _id: id }, { $inc: { popularity: 1 } })
                    break
                case 'drinks':
                    await DrinkModel.updateOne({ _id: id }, { $inc: { popularity: 1 } })
                    break
            }
            res.end()
        }
    } catch (err) {
        res.status(500).json({
            message: 'Ошибочка.'
        })
    }
}
