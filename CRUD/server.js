require('./models/db')

let express=require('express')
let cors=require('cors')

let app=express()
app.use(cors)

// web page controller
let control=require('./controller/TechieController')

// rest web service controller
const rest=require('./controller/RestController')
app.use('/service',rest)

app.use(express.json())

let handle=require('express-handlebars')
let path=require('path')
let bparser=require('body-parser')

app.set('views',path.join(__dirname+'/view/'))
app.engine('hbs',handle({extname:'hbs',defaultLayout:'homeLayout',layoutsDir:__dirname+'/view/layout/',
runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,}
}))
app.set('view engine','hbs')

app.use(bparser.urlencoded({
    extended:true
}));

app.use(bparser.json()) 

app.get('/',(req,res)=>{
    res.send("Just");
})

app.listen(3000,()=>{
    console.log("Server connected")
})

app.use('/techie',control)