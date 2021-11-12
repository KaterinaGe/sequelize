const { write, read } = require("../helper.js")
const { uuid } = require("uuid")
const express = require('express')
const db = require('../models/index.js')

const create = express.Router()

create.post('/todo', async (req, res) => {
    try {
        const todo = await db.ToDo.create({ name: req.body.name, owner: req.body.owner })

        res.send({todo});              
    } catch (e) {
        console.log(e)
        res.status(500).send(e.message)
    }
})


module.exports = create;