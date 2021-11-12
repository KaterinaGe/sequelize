const fs = require("fs")

const file = "todos.json"

async function write(todos) {
    todos = JSON.stringify(todos)
    return new Promise (function (resolve, reject) {
        fs.writeFile(file, todos, (e) => {
            if (e) reject({message:"The task is not recorded in the DB"})
            resolve()
        })
    })
}

function read () {
    return new Promise (function (resolve, reject) {
        let todos = []
        fs.readFile(file,'utf-8', (e, data) => { 
            if (data !== "") {
                todos = JSON.parse(data)
            }
            if (e) reject("Error")
            resolve(todos)    
        })
    })
}

module.exports = { write, read }