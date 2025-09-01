const User=require('../models/User');
const Student=require('../models/Students')
const bcrypt=require('bcrypt');
 async function addUser(req,res) {
    try{

      //  console.log(req.body,'req.body');
        let user=new User(req.body);
       // user.userType='student';
        let encryptredPassword=bcrypt.hashSync(req.body.Password, 10);
        user.Password=encryptredPassword;
     //   console.log(encryptredPassword,'encryptedPassword');
        await user.save();
    //    console.log('data save sucessfully');
        res.redirect('/');
    }catch(err){
        console.log(err);
    }
}
async function dologin(req,res){
    try{
     //   console.log(req.body,"req.body");
        let user=await User.findOne({Email:req.body.Email});
     //   console.log(user,'user');
        if(user){
            let validPassword= await bcrypt.compare(req.body.Password,user.Password);
            if(validPassword){
                if(user.userType==='Admin'){
                 let students=await Student.find({});
                 res.render('welcomeadmin',{
                      students:students
                 });
            }
            else{
                res.render('welcomestudent');
            }
        }
        else{
                res.end("<h1>Invalid email/Password......</h1>")
            }
        }else{
            res.end('<h1>user does not exist');
        }
    }catch(err){
        console.log(err);
    }
}
module.exports={
    addUser,
    dologin,
}