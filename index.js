const express = require('express')
const create = require('./routers/todo.post.js')
const deleteTodo = require('./routers/todo.delete.js')
const getTodos = require('./routers/todo.get.js')
const update = require('./routers/todo.put.js')
const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')


const PORT = process.env.DB_HOST || 3001
const app = express()





app.use('/', function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', `*`);
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(express.json())
app.use('/', create, deleteTodo, getTodos, update)


app.listen(PORT, () => console.log('Its working ' + PORT))