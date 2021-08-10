require('./models/db')

let express=require('express')

let app=express()

app.get('/',(req,res)=>{
    res.send("Just");
})

app.listen(3000,()=>{
    console.log("Server connected")
})