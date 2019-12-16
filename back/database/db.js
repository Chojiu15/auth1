const Sequelize = require('sequelize')
const db = {}

const sequelize = new Sequelize('sunday', 'root', 'subwoofer', {
    hostname : 'localhost',
    dialect : 'mysql',
    operatorAliases : false,

    pool : {
        min : 0,
        max  : 5,
        acquire : 30000,
        idle : 10000
    }
})


db.sequelize = sequelize
db.Sequelize = sequelize

module.exports = db