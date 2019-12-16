const Sequelize = require('sequelize')
const db = require('../database/db')

module.exports = db.sequelize.define('user', {
    first_name : {
        type : Sequelize.STRING
    },
    last_name : {
        type : Sequelize.STRING
    },
    email : {
        type : Sequelize.STRING
    },
    password : {
        type : Sequelize.STRING
    },
    createdAt : {
        type : Sequelize.DATE,
        defaultValue : Sequelize.NOW
    }
}, {
    timestamps : false,
    underscored : true
})