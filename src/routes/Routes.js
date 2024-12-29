const express = require('express')
const Router = express.Router()
const {getAllTasks, addTask, deleteTask,updateTask} = require('../controllers/taskController')
const upload = require('../middleware/multer')

Router.get('/', (req, res) => {
    res.send('Hello World')
})

Router.get('/tasks', getAllTasks)
Router.post('/tasks', upload.none(), addTask)
Router.delete('/tasks/:id', deleteTask)
Router.put('/tasks/:id', upload.none(), updateTask)
module.exports = Router