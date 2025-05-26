const Sequelize = require('sequelize')

const sequelize = new Sequelize('Expense-project','root', 'Veera@512', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize;