let Express=require('express');

let app=Express()

app.set('view engine','pug')
app.set('view','./pages')

app.get('/page',(req,res)=>{
    res.render('hi');
});

app.listen(3000)