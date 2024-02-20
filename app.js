const express = require("express");
const fs = require("fs");

const bodyParser = require("body-parser");




const app = express();

app.use(bodyParser.urlencoded({extended:false}));


app.get('/',(req,res,next)=>{

    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log(err);
            data = 'No chat exists';
        }
        res.send(`
        ${data} <form action ="/" method ="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
         <input type = "text" name = "message">
         <input type="hidden" name="username" id="username">
         <button type ="submit">SEND</button>
        </form>
     `)
    })
   
    
})
app.post('/',(req,res,next)=>{

   // console.log(req.body.message);
   // console.log(req.body.username);
    const username = req.body.username;
    const message = req.body.message;
    const data = username+":"+message;
    fs.writeFile("username.txt",`${username} : ${message}`,{flag:'a'},(err)=>
        err ? console.log(err):res.redirect('/')
    )
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