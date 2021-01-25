const db = require('../../framework_drivers/database/sequelize')
module.exports = class {
    constructor() {
        this.db = db
        this.model = this.db.model('users')
        this.subjectModel = this.db.model('subjects');
        this.userSubjectModel = this.db.model('userSubject');
    }
    async register(entity) {
        return await this.model.create(entity)
    }
    async login(email, password) {
        return await this.model.findOne({ where: { email, password } })
    }
    async update(id, updates, fields) {
        console.log('updating user ', id, updates, fields)
        return await this.model.update(updates, { where: { id }, fields })
    }
    async delete(id){
        return await this.model.destroy({where: {id}})
    }
    async viewData(){
        return await this.model.findAll({
            include:[{
                model:this.subjectModel, 
                as: 'subjectses'
            }]
        })
    }
}