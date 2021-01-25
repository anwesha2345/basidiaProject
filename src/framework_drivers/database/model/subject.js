module.exports = (sequelize, type)=>{
    return sequelize.define('subjects',{
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