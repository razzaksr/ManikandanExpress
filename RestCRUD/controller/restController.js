const express=require('express')
const router=express.Router()
const mongoose=require('mongoose')
const model=mongoose.model('techie')

mongoose.set('useFindAndModify', false);

// List
router.get('/',async (req,res)=>{
    //res.send('hi connected')
    const all=await model.find()
    res.json(all)
})

// Create
router.post('/',async (req,res)=>{
    const tec=new model({
        fullname:req.body.fullname,
        contact:req.body.contact,
        expert:req.body.expert,
        experience:req.body.experience,
        commercials:req.body.commercials
    })
    const data=await tec.save()
    res.json(data)
})

//Update
router.put('/',async (req,res)=>{
    
    const data=await model.findOneAndUpdate(id=req.body._id,req.body,{new:true})
    res.json(data)
})

//Read
router.get('/:id',async(req,res)=>{
    const data=await model.findById(id=req.params.id)
    res.json(data)
})

// Delete
router.delete('/:id',async(req,res)=>{
    const data=await model.findById(id=req.params.id)
    await model.findByIdAndDelete(id=req.params.id)
    res.json(data.fullname+" has deleted");
})

module.exports=router;