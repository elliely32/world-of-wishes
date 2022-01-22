const Sequelize = require('sequelize')
const db = require('../db')

const Wish = db.define('wish',{
    wishMessage: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    approved:{
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    coordinateX:{
        type: Sequelize.INTEGER
    },
    coordinateY:{
        type: Sequelize.INTEGER
    }
})

module.exports = Wish