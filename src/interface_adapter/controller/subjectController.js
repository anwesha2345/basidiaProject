//entity
const entity = require('../../enterprise_business_logic/subject');
// use cases
const userUseCases = require('../../application_business_logic/use_cases/subjectUseCases')
const useCases = new userUseCases();
//repository
const userRepository = require('../../application_business_logic/repository/subjectRepository')
const userRepositoryPSSQL = require('../storage/subjectRepoPSSQL')
const repository = new userRepository(new userRepositoryPSSQL())
const router = require('express').Router();


router.post('/create-subject', async(req,res)=>{
    const { name } = req.body;
    const userEntity = new entity(name);
    try{
        const result = await useCases.register(userEntity, repository)
        res.status(201).json({
            status: true,
            subject: result
        })
    }
    catch(err){
        console.log(err)
    }
})

//view user subject

// router.get('/view-user-subject', async(req,res)=>{

// })

module.exports = router;