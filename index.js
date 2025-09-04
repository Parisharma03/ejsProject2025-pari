const express=require('express');
const path=require('path');
const connect=require('./connection');
const user=require('./routes/user');
const student=require('./routes/student');
const mainAdmin=require('./mainadmin');
const app=express();
app.use(express.json());

app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(user);
app.use(student);
connect();
mainAdmin();

app.set('view engine','ejs');
app.set('views',path.resolve('./views'));

app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }else{
       console.log("server is running at 3000");
    }
})