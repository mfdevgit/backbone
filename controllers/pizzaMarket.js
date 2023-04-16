import PizzaModel from '../db/models/pizzaMarket/pizzas.js'
import SnackModel from '../db/models/pizzaMarket/snacks.js'
import DessertModel from '../db/models/pizzaMarket/desserts.js'
import DrinkModel from '../db/models/pizzaMarket/drinks.js'
import DiscountSchema from '../db/models/pizzaMarket/discounts.js'

export const getPizzaAll = async (req, res) => {
    try {
        const data = await PizzaModel.find()
        const updated = data.map(element => {
            const { _id: id, ...rest } = element._doc
            return { id, ...rest }
        })
        res.json(updated)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить пиццы.'
        })
    }
}

export const getSnackAll = async (req, res) => {
    try {
        let data = await SnackModel.find()
        const updated = data.map(element => {
            const { _id: id, ...rest } = element._doc
            return { id, ...rest }
        })
        res.json(updated)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить закуски.'
        })
    }
}

export const getDessertAll = async (req, res) => {
    try {
        let data = await DessertModel.find()
        const updated = data.map(element => {
            const { _id: id, ...rest } = element._doc
            return { id, ...rest }
        })
        res.json(updated)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить десерты.'
        })
    }
}

export const getDrinkAll = async (req, res) => {
    try {
        let data = await DrinkModel.find()
        const updated = data.map(element => {
            const { _id: id, ...rest } = element._doc
            return { id, ...rest }
        })
        res.json(updated)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить напитки.'
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
                const { description, discount } = data
                res.status(200).json({ description, discount })
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
