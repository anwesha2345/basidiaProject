//entity
const entity = require('../../enterprise_business_logic/user');
// use cases
const userUseCases = require('../../application_business_logic/use_cases/userUserCases')
const useCases = new userUseCases();
//repository
const userRepository = require('../../application_business_logic/repository/userRepository')
const userRepositoryPSSQL = require('../storage/userRepositoryPSSQL')
const repository = new userRepository(new userRepositoryPSSQL())
const router = require('express').Router();
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password, phoneNo } = req.body
    const userEntity = new entity(firstName, lastName, email, password, phoneNo)
    try {
        const result = await useCases.register(userEntity, repository)
        res.status(201).json({
            status: true,
            user: result
        })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "error in creating the user"
        })
    }
})

router.get('/update-user/:id', async(req,res)=>{
    const { id } = req.params
    let { mobileNo, email, firstName, lastName } = req.body
    let updates = { mobileNo, email, firstName, lastName }
    const result = await useCases.updateProfile(id, updates, repository);
    if (result){
        res.json({
            status: true,
            message: 'data updatedsuccessfully!'
        })
    }    
})


router.get('/delete-user/:id', async(req,res)=>{
    const { id } = req.params
    const result = await useCases.deleteProfile(id, repository);
    if (result){
        res.json({
            status: true,
            message: 'data deletedSuccessfully!'
        })
    }    
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body
    try {
        const result = await useCases.login(email, password, repository)
        if (result)
            res.status(200).json({
                status: true,
                message: "user logged in successfully"
            })
        else
            res.status(200).json({
                status: true,
                message: "user credential incorrect"
            })
    } catch (error) {
        res.status(400).json({
            status: false,
            message: "error in login"
        })
    }
})


router.get('/get-user-subject', async(req,res)=>{
    var result = await useCases.viewData(repository) 
    res.status(200).json({
        success: true,
        msg:'Data Viewed Successfully!',
        result: result
    })
})



module.exports = router;