const express = require("express");

const bodyParser = require("body-parser");




const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res,next)=>{
    res.send(`
        <form action ="/" method ="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type = "text" name = "message">
        <input type="hidden" name="username" id="username">
        <button type ="submit">SEND</button>
       </form>
    `)
    
})
app.post('/',(req,res,next)=>{
    console.log(req.body.message);
    console.log(req.body.username);
})

app.get('/login',(req,res,next)=>{
    res.send( 
               `<form onsubmit ="localStorage.setItem('username',document.getElementById('username').value)" action="/login" method="POST">
                    <input type = "text" id="username" name = "username" placeholder="username">
                    <button type="submit">Login</button>
                </form>`

            )
           


   // res.sendFile(path.join(__dirname+'/index.html'));
})
app.post('/login',(req,res,next)=>{
    res.redirect('/');
})
app.listen(3000);