
module.exports = (sequelize, type) => {
    const users = sequelize.define('users', {
        firstName: {
            type: type.STRING
        },
        lastName: {
            type: type.STRING
        },
        email: {
            type: type.STRING
        },
        password: {
            type: type.STRING
        },
        phoneNo: {
            type: type.STRING
        }
    },
    {
        underscored: true,
        freezeTableName: true,
        })
    let userSubject= sequelize.define('userSubject',{
        name:{
            type:type.STRING
        }},
        {
            underscored: true,
            freezeTableName: true,
            initialAutoIncrement: 10000
        }
    )
    users.belongsToMany(sequelize.model('subjects'), { through: userSubject, as: 'subjectses' , allowNull: false})
    sequelize.model('subjects').belongsToMany(users,{ through: userSubject, as: 'subjectses', allowNull: false })
    
    let userCurriculam = sequelize.define('userCurriculam',{
        name:{
            type:type.STRING 
        }},{
            underscored: true,
            freezeTableName: true,
            initialAutoIncrement: 10000
        })

        users.belongsToMany(sequelize.model('curriculam'),{through: userCurriculam, as: 'curriculam' })
        sequelize.model('curriculam').belongsToMany(users,{ through:userCurriculam, as: 'curriculam' })
        return users;
    }


