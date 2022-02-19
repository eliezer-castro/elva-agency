const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res)=>{
    res.render('index');
})

app.listen(5000, ()=>{
    console.log('Server is running 🚀');
})