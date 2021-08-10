let mongoose=require('mongoose')

let techieSchema=mongoose.Schema({
    fullname:{
        type:String
    },
    experience:{
        type:Number
    },
    comercials:{
        type:Number
    },
    expert:{
        type:String
    }
});

mongoose.model('techie',techieSchema)