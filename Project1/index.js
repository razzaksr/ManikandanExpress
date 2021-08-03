let Express=require('express');

let app=Express()

app.set('view engine','pug')
app.set('views','./pages')

app.get('/page',(req,res)=>{
    res.render('hi');
});

app.get('/page/list',(req,res)=>{
    res.render('list');
});

app.get('/page/data',(req,res)=>{
    res.render('data',{
        "org":"Zealous",
        "location":"Salem"
    });
});

app.listen(3000)



/*let Express=require('express');

let app=Express()

app.get('/',(req,res)=>{
    res.send("<h1>Welcome to Express JS</h1>")
});

app.get('/hai',(req,res)=>{
    res.send("<ol><li>react</li><li>express</li><li>node</li><li>mongodb</li></ol>");
});

app.post('/',(req,res)=>{
    res.send("<h1>Express POST Mapping</h1>");
});

let own=require('./mani');

app.use('/mani',own);

app.listen(3000);*/