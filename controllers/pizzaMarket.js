import PizzaModel from '../db/models/pizzaMarket/pizzas.js'
import SnackModel from '../db/models/pizzaMarket/snacks.js'
import DessertModel from '../db/models/pizzaMarket/desserts.js'
import DrinkModel from '../db/models/pizzaMarket/drinks.js'

export const getPizzaAll = async (req, res) => {
    try {
        const data = await PizzaModel.find()
        const updated = data.map(element => {
            const { _id: id, title, description, image, price } = element
            return { id, title, description, image, price }
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
            const { _id: id, title, description, image, price } = element
            return { id, title, description, image, price }
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
            const { _id: id, title, description, image, price } = element
            return { id, title, description, image, price }
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
            const { _id: id, title, description, image, price } = element
            return { id, title, description, image, price }
        })
        res.json(updated)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить напитки.'
        })
    }
}
