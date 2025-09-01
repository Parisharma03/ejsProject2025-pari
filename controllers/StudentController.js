const Student = require("../models/Students");
const cloudinary=require('cloudinary').v2;

 async function addstudent(req,res){
    try{
      //  console.log(req.body,'req.body');
      //  console.log(req.file,'req.file');
        let student=new Student(req.body);
        await student.save();
        let students=await Student.find({})
        res.render('studentlist',{
            students:students
        });

    }catch(err){
        console.log(err);
    }
}

async function deleteStudent(req,res) {
    try{
        let studentId=req.params._id;
      //  console.log(studentId,"deleteStudent")
        await Student.deleteOne({_id:studentId});
        let students=await Student.find({});
        res.render('welcomeadmin',{
            students:students
        })

    }catch(err){
        console.log(err);
    }
}

async function openEditPage(req,res) {
    try{
        let studentId=req.params._id;
        let student=await Student.findOne({_id:studentId});
        if(student){
            res.render('studenteditpage',{
                student:student
            })
        }
        else{
            req.render('/');
        }
    }catch(err){
        console.log(err);
    }
    
}

async function editStudent(req,res){
    try {
        const studentId=req.params._id;
     //   console.log(studentId,"studentId");
        let student=await Student.findOne({_id:studentId});
        if(student){
          //  console.log(req.body,"req.body");
            student.RollNo=req.body.RollNo;
            student.Name=req.body.Name;
            student.FatherName=req.body.FatherName;
            student.Course=req.body.Course;
            student.Branch=req.body.Branch;
            student.YearOfAdmission=req.body.YearOfAdmission;
            await student.save();
            let students=await Student.find({});
            res.render('welcomeadmin',{
                students:students
            })
        }else{
            res.end("student not found....")
        }
    } catch (error) {
        console.log(error);
    }
}

module.exports={
    addstudent,
    deleteStudent,
    openEditPage,
    editStudent,
}