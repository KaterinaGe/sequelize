const {write, read} = require("../helper.js")
const express = require('express')

const update = express.Router()

update.put('/todo/:uuid', async (req, res) => {
    try {
        let todos = []
        todos = await read()
        todos = todos.map((todo) => {
            if (todo.uuid === req.params.uuid) {
                todo.name = req.body.name
                todo.done = req.body.done
            }
            return todo
        })
        await write(todos)
        res.send('You change this todo')            
    } catch (e) {
        res.status(500).send(e.message)
    }
})

export default update