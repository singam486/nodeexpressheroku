const express = require('express')

const app = express()

app.get('/',function(req,res){
    res.send('<h2>Welocome To Express Server </h2>')
})
app.listen(9090,function(){
    console.log('express server started')
})