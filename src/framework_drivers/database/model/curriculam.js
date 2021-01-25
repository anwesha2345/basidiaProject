module.exports = (sequelize, type)=>{
    return sequelize.define('curriculam',{
        name:{
            type: type.STRING
        }
    },
    {
        underscored: true,
        freezeTableName: true,
        initialAutoIncrement: 10000
    })
}