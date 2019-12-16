const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
    extended : true
}))

app.use(cors())
app.use(bodyParser.json())

const Users = require('./routes/user')
app.use('/users', Users)


app.listen(3000, console.log('Server is running well'))