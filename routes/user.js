const express=require('express');
const controller=require('../controllers/UserController')
const router=express.Router();

//http://localhost:3000


router.get('/',(req,res)=>{
    res.render('home');
})
router.get('/user/signup',(req,res)=>{
    res.render('signup');
})
router.post('/add/user',(req,res)=>{
    controller.addUser(req,res);
})

router.post('/login',(req,res)=>{
    controller.dologin(req,res);
})

router.get('/student/add/page',(req,res)=>{
    res.render('addstudent');
})

module.exports=router;