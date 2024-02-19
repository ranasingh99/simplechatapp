const express = require("express");
const path = require("path");



const app = express();


app.use('/login',(req,res,next)=>{
    res.send( 
               `<form onsubmit ="localStorage.setItem('username',document.getElementById('username').value)" action="/home" method="POST">
                    <input type = "text" id="username" name = "username" placeholder="username">
                    <button type="submit">Login</button>
                </form>`

            )


   // res.sendFile(path.join(__dirname+'/index.html'));
})
app.use('/home',(req,res,next)=>{
   // console.log(req.body.username);
    res.redirect('/');
})
app.use('/',(req,res,next)=>{
    res.send(`
        <form action ="/" method ="POST" onsubmit="document.getElementById(username).value"="localStorage.getItem(username)">
        <input type = "text" name = "msg">
        <input type="hidden" name="username" id="username">
        <button type ="submit">SEND</button>
       </form>
    `)
    
})

app.listen(3000);