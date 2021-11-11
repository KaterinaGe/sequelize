const { write, read } = require("../helper.js")
const { uuid } = require("uuid")
const express = require('express')

const create = express.Router()

create.post('/todo', async (req, res) => {
    try {
        let todos = []
        const todo = {
            uuid: uuid(),
            name: req.body.name,
            done: false,
            created_at: String(new Date())
        }
        todos = await read()
        todos.push(todo);
        await write(todos)
        res.send({todo});              
    } catch (e) {
        res.status(500).send(e.message)
    }
})


export default create;