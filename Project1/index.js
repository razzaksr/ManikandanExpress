let Express=require('express');

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

app.listen(3000);