const _ = require('lodash')
module.exports = class {
    checkUpdateFields(updates) {
        const { firstName, lastName, mobileNo, email} = updates
        const fields = []
        if (!_.isUndefined(firstName) && !_.isNull(firstName)) fields.push('firstName')
        else delete updates.firstName
        if (!_.isUndefined(lastName) && !_.isNull(lastName)) fields.push('lastName')
        else delete updates.lastName
        if (!_.isUndefined(mobileNo) && !_.isNull(mobileNo)) fields.push('mobileNo')
        else delete updates.mobileNo
        if (!_.isUndefined(email) && !_.isNull(email)) fields.push('email')
        else delete updates.email
        return fields
    }
    register(entity, repository) {
        return repository.register(entity)
    }
    updateProfile(id, updates, repository) {
        const fields = this.checkUpdateFields(updates)
        return repository.updateProfile(id, updates, fields)
    }
    deleteProfile(id, repository){
        return repository.deleteProfile(id)
    }
    login(email, password, repository) {
        return repository.login(email, password)
    }
    viewData(repository){
        return repository.viewData()
    }
}