const {write, read} = require("../helper.js")
const express = require('express')
const db = require('../models/index.js')

const update = express.Router()

update.put('/todo/:uuid', async (req, res) => {
    try {
        const update = await db.ToDo.update(
            {
                name: req.body.name,
                done: req.body.done
            },
            {
              where: {
                uuid: req.params.uuid,
              },
            }
          )
        res.send(update)            
    } catch (e) {
        res.status(500).send(e.message)
    }
})

module.exports = update