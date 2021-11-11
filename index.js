const express = require('express')
const create = require('./routers/todo.post.js')
const deleteTodo = require('./routers/todo.delete.js')
const getTodos = require('./routers/todo.get.js')
const update = require('./routers/todo.put.js')
const { Sequelize } = require('sequelize')
const dotenv = require('dotenv')


const PORT = process.env.PORT || 5000
const app = express()

const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname')

try {
    await sequelize.authenticate()
    console.log('Соединение с БД было успешно установлено')
  } catch (e) {
    console.log('Невозможно выполнить подключение к БД: ', e)
}



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

app.get('/', (req, res) => {
    res.send('Hello!!11')
})

app.listen(PORT, () => console.log('Its working ' + PORT))