let express=require('express');
let mine=express.Router()

mine.get('/',(req,res)=>{
    res.send("<marquee direction='right'><h1>HI</h1></marquee>");
})

module.exports=mine;