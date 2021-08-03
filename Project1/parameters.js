let Express=require('express');

let app=Express()

app.get('/:username',(req,res)=>{
    res.send("<h1>REquested User is"+ req.params.username +" </h1>");
});

app.get('/:alpha/:beta',(req,res)=>{
    res.send("<h1>RESULT for "+ (parseInt(req.params.alpha)+parseInt(req.params.beta)) +" </h1>");
});

app.listen(3000)