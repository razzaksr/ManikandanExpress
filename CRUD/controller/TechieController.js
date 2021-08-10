let mongoose=require('mongoose')
let model=mongoose.model('techie')
let express=require('express')

let tec=express.Router()

tec.get('/',(req,res)=>{
    res.render('techie/freshOrOld',{
        pageTitle:"New Expert"
    })
})

tec.post('/',(req,res)=>{
    insertion(req,res)
})

function insertion(req,res)
{
    let object=new model()
    object.fullname=req.body.fullname;
    object.contact=req.body.contact;
    object.expert=req.body.expert;
    object.experience=req.body.experience;
    object.commercials=req.body.commercials;
    object.save((e)=>{
        if(!e)
            res.send("Object inserted")
        else
            console.log(e)
    })
}

module.exports=tec;