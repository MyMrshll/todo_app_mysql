const express = require('express')
const app = express()
const Router = require('./src/routes/Routes')
const cors = require('cors')
const db = require('./src/config/db')
const log = require('./src/middleware/log')


app.use(log)

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use(Router)

app.listen(3030,() => {
    console.log(`===>   Server is running on port http://localhost:3030`)
})