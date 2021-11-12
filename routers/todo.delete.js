const {write, read} = require("../helper.js")
const express = require('express')
const db = require('../models/index.js')

const deleteTodo = express.Router()

deleteTodo.delete('/todo/:uuid', async (req, res) => {
    try {        
        await db.ToDo.destroy({
            where: {
                uuid: req.params.uuid
            }
        })
        res.send('Todo deleted')
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = deleteTodo