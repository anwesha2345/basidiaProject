const db = require('../../framework_drivers/database/sequelize');
module.exports = class{
    constructor() {
        this.db = db
        this.model = this.db.model('subjects')
    }
    async register(entity){
        return this.model.create(entity)
    }

}