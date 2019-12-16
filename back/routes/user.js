const express = require('express')
const users = express.Router()
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const User = require('../models/User')

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {

    const today = new Date()
    const userData = {
        first_name : req.body.first_name,
        last_name : req.body.last_name,
        email : req.body.email,
        password: req.body.password,
        createdAt : today
    }

    User.findOne({
        where : {
            email : req.body.email
        }
    })

    .then(user => {
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) => {
                userData.password = hash
                User.create(userData)
                .then(user => {
                    res.json({status : user.email + 'Regitered'})
                })
                .catch(err => res.send(err))
            })
        }
        else{
            res.json('User already exists')
        }
    })

    .catch(err => console.log(err))
})

users.post('/login', (req, res) => {
    
    User.findOne({
        where : {
            email : req.body.email
        }
    })

    .then(user => {
        if(user){
            if(bcrypt.compareSync(req.body.password, user.password)){
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY)
                res.send(token)
            }
        }
        else{
            res.send('User does not exists')
        }
    })
    .catch(err => res.send(err))
})

module.exports = users