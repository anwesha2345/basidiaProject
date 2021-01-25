module.exports = class{
    register(entity, repository){
        return repository.register(entity)
    }
}