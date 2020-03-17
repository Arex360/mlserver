
const express = require('express')
const app = express()
app.set('view-engine','ejs')
app.use(express.static('views'))
app.get('/',(req,res)=>{
    res.render('index.ejs')
})
app.get('/another',(req,res)=>{
    res.send('ss')
})
app.listen(3000,()=>{
    console.log('server started')
})