module.exports = class {
    constructor(storageRepository){
        this.repository = storageRepository
    }
    register(entity) {
        return this.repository.register(entity)
    }
    login(email, password) {
        return this.repository.login(email, password)
    }
    updateProfile(id,updates,fields){
        return this.repository.update(id,updates,fields)
    }
    deleteProfile(id){
        return this.repository.delete(id)
    }
    viewData(){
        return this.repository.viewData()
    }
}