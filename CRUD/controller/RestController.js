const mongoose=require('mongoose')
const model=mongoose.model('techie')
const express=require('express')

// get,delete,put,post

const route=express.Router()

// List
route.get('/',async(req,res)=>{
    const received=await model.find()
    res.json(received)
})

// Read via Id
route.get('/:id',async(req,res)=>{
    res.json(await model.findById(id=req.params.id))
})

route.get('/exp/:exp',async(req,res)=>{
    res.json(await model.find({"experience":{'$gt':req.params.exp}}))
})

route.delete('/:id',async (req,res)=>{
    const one=await model.findById(id=req.params.id)
    await model.findByIdAndDelete(id=req.params.id)
    res.json(one.fullname+" has deleted")
})

route.post('/',async(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

route.put('/',async (req,res)=>{
    const one=await model.findOneAndUpdate(id=req.body._id,req.body,{new:true})
    res.json(one.fullname+" has updated")
})
module.exports=route;
