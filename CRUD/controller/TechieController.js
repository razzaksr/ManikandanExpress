let mongoose=require('mongoose')
let model=mongoose.model('techie')
let express=require('express')
const { request } = require('express')

let tec=express.Router()

tec.get('/delete/:id',(req,res)=>{
    model.findByIdAndDelete(id=req.params.id,(e,data)=>{
        if(!e)
            res.render('techie/traverse')
    })
})

tec.get('/edit/:id',(req,res)=>{
    model.findById(req.params.id,(e,data)=>{
        if(!e)
        {
            console.log(data)
            res.render('techie/freshOrOld',{
                pageTitle:"Update Expert",
                obj:data
            })
        }
        else{
            console.log("error")
        }
    })
})

tec.get('/',(req,res)=>{
    res.render('techie/freshOrOld',{
        pageTitle:"New Expert"
    })
})

tec.post('/',(req,res)=>{
    if(req.body._id=="")
        insertion(req,res)
    else
        updation(req,res)
})

tec.get('/show',(req,res)=>{
    model.find({},(e,data)=>{
        if(!e){
            console.log(data)
            res.render('techie/traverse',{
                all:data
            })
        }
        else
            alert("Fetching error");
    })
})

function updation(req,res)
{
    model.findOneAndUpdate(id=req.body._id,req.body,{new:true},(e,data)=>{
        if(!e)
            res.redirect('techie/show')
        else
            res.render('techie/',{
                pageTitle:"Update Expert",
                obj,data
            })
    })
}

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
            res.redirect('techie/show')
        else
            console.log(e)
    })
}

module.exports=tec;