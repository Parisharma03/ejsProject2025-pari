const mongoose=require('mongoose');
const timestamps = require('mongoose-timestamps');
const Schema=mongoose.Schema;

const userSchema=new Schema({
    FirstName:{type: String,required: true},
    LastName:{type: String ,required : true},
    Email:{type: String ,required: true} ,  
    Password:{type: String ,required: true},
    userType:{type: String ,default: 'student'},
    createdAt:Date,
    updatedAt:Date,

})
userSchema.plugin(timestamps , {index: true});
module.exports=mongoose.model('User', userSchema);

