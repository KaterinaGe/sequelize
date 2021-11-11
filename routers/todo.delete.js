const {write, read} = require("../helper.js")
const express = require('express')

const deleteTodo = express.Router()

deleteTodo.delete('/todo/:uuid', async (req, res) => {
    try {        
        const todos = await read()
        const filteredTodos = todos.filter((todo) => todo.uuid !== req.params.uuid)
        await write(filteredTodos)
        res.sendStatus(204);
    } catch (e) {
        res.status(500).send(e.message)
    }
})

export default deleteTodo