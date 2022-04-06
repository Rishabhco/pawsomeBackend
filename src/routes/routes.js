const express=require('express')
const auth=require('../middleware/auth.js')
const userController=require('../controller/userController.js')
const petController=require('../controller/petController.js')
const router=new express.Router()

router.get('/',userController.home);
router.post('/signup',userController.createUser);
router.get('/readUser',auth,userController.readUser);
router.post('/login',userController.login);
router.post('/logout',auth,userController.logout);

router.get('/petHome',petController.home);
router.post('/adoptPet',auth,petController.adoptPet);
router.get('/findAllPet',petController.findAllPet);
router.get('/findSpecificPet',petController.findSpecificPet);
router.get('/findSpecificPetCat',petController.findAllPetCat);

module.exports=router