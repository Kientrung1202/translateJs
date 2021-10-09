const express = require('express'); 
const app = express(); 
const port = 8080; 
const translateInput = require('./translateInput');

app.get('/', async function(req, res){
    const data = await translateInput.tran("i can speak english");
    res.send(data);
})

app.listen(port, function(){
    console.log("Your app running on port " + port);
})