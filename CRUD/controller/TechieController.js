require('./models/db')

let express=require('express')

let tec=express.Router()

tec.get('',(req,res)=>{
    res.json("Connected to router")
})

module.exports=tec;