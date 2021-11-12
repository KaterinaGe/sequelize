const { read } = require("../helper.js")
const express = require('express')
const db = require('../models/index.js')

const getTodos = express.Router()

getTodos.get('/todos', async (req, res) => {
    try {
        const filterBy = res.body.done
        filterBy.done = req.body.filterBy === 'done' ? true : false
        const todos = await db.ToDo.findAll({
            //filterBy,
            //order: ['createdAt']
        })
        res.send(todos)
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = getTodos