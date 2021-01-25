module.exports = class{
    constructor(storageRepository){
        this.repository = storageRepository;
    }
    register(entity) {
        return this.repository.register(entity)
    }
}