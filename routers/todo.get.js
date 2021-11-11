const { read } = require("../helper.js")
const express = require('express')

const getTodos = express.Router()

getTodos.get('/todos', async (req, res) => {
    try {
        let todos = []
        todos = await read()
        if (req.query.filterBy === "done") {
            todos = todos.filter((todo) => todo.done === true)
        }
        if (req.query.filterBy === "undone") {
            todos = todos.filter((todo) => todo.done === false)
        }
        if (req.query.order === "asc") {
            todos = todos.sort((a, b) => Date.parse(a.created_at) - Date.parse(b.created_at))
        }
        if (req.query.order === "desc") {
            todos = todos.sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at))
        }
        res.send(todos)  
    } catch (e) {
        res.status(500).send(e.message)
    }
})

export default getTodos