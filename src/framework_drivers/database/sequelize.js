const Sequelize = require('sequelize')
const config = require('../../../config.json')


const userModel = require('./model/user');
const subjectModel = require('./model/subject');
const curriculamModel = require('./model/curriculam');
//const userSubModel = require('./model/userSubject')

// Sequelize Connection
const sequelize = new Sequelize(config.DATABASE_NAME, config.DATABASE_USERNAME, config.DATABASE_PASSWORD, {
    host: config.DATABASE_HOST,
    dialect: 'postgres',
    pool: {
        max: 10,
        min: 1,
        acquire: 30000,
        idle: 10000
    }
})
curriculamModel(sequelize, Sequelize)
subjectModel(sequelize, Sequelize)
userModel(sequelize, Sequelize)


//userSubModel(sequelize, Sequelize)

module.exports = sequelize