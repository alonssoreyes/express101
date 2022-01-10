const path = require('path');
const express = require('express');

const app = express();


app.use(express.static('./public'))

app.all('*', (req,res) => { 
    res.sendFile(__dirname + '/homepage.html');
})

app.listen(3000, ()=> {
    console.info('Server is listening on port', 3000)
})