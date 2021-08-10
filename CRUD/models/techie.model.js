let mongoose=require('mongoose')

let techieSchema=mongoose.Schema({
    fullname:{
        type:String
    },
    experience:{
        type:Number
    },
    commercials:{
        type:Number
    },
    expert:{
        type:String
    },
    contact:{
        type:Number
    }
});

mongoose.model('techie',techieSchema)