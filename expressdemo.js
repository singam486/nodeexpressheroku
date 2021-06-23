const express = require('express')

const app = express()

var port = process.env.PORT || 9090

// http://localhost:9090/ibm
app.get('/',function(req,res){
    res.send('<h2>Welocome To Express Server </h2>')
})
app.listen(port,function(){
    console.log('express server started')
})