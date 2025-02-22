const express = require("express")
const app = express();
app.use(express.json())
let student= [{
            name: "sai",
            branch : "IT",
            id : "01"
        },
        {
            name: "dhruva",
            branch: "IT",
            id: "21"
        }
]
app.get("/student",(req,res)=> {
    res.send(student);
})
app.get("/student/:id",(req,res)=> {
    let(id)=req.params;
    let student= student.find((std)=> std.id === id);
    if(student){
        app.student(404).send(student);
    }
    else{
        app.status(404).send("student not found");
    }
})
app.use(express.json())
app.delete("/student/:id",(req,res)=> {
    const id = req.params.id
     student= student.filter(std=> std.id !== id);
    res.status(200).json({
        "message": "Deleted successfully",
        "students":student
    })
        
})
app.use(express.json())
app.post("/student",(req,res)=> {
    let stud=req.body;
    student.push(stud)
    res.send(student);
})

app.put("/student/:id",(req,res)=>{
    let {id}=req.params
    let {name,branch}=req.body;
   let student=student.find(s=>s.id==id)
    if(student){
        student.name=name;
        student.branch=branch;
        res.status(200).json({
            "message": "updated",
            "students":student
        })
    }
    else{
        res.status(404).json({
            "message": "student not found"
        })
    }
})
let port=2000;
app.listen(port,()=>{
    console.log("server starts at port "+port);
})
