import PizzaModel from '../db/models/pizzaMarket/pizzas.js'
import SnackModel from '../db/models/pizzaMarket/snacks.js'
import DessertModel from '../db/models/pizzaMarket/desserts.js'
import DrinkModel from '../db/models/pizzaMarket/drinks.js'

export const getPizzaAll = async (req, res) => {
    try {
        let data = await PizzaModel.find()
        res.json(data)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить пиццы.'
        })
    }
}

export const getSnackAll = async (req, res) => {
    try {
        let data = await SnackModel.find()
        res.json(data)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить закуски.'
        })
    }
}

export const getDessertAll = async (req, res) => {
    try {
        let data = await DessertModel.find()
        res.json(data)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить десерты.'
        })
    }
}

export const getDrinkAll = async (req, res) => {
    try {
        let data = await DrinkModel.find()
        res.json(data)
    } catch (err) {
        res.status(500).json({
            message: 'Не удалось загрузить напитки.'
        })
    }
}
