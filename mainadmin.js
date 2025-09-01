const User=require('./models/User');
const bcrypt=require('bcrypt');

async function makeAdmin() {
    try{
        let user=await User.findOne({Email:'pari@gmail.com'});
        if(user){
          //  console.log('user updated....');
        }
        else{
            let user=new user();
            user.FirstName='Pari';
            user.LastName='Sharma';
            user.Email='pari@gmail.com';
            let encryptedPassword=bcrypt.hashSync('123456',10);   //10 salty pass

        }
    }catch(err){
        console.log(err);
    }
    
}