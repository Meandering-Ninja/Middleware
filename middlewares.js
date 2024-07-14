
const express = require('express');
const server = express();
server.use(express.json());
server.use(express.static('public'));
//for authentication(6-14)
const auth =(req,res,next)=>{
    
    if (req.body.password=='123'){
    next();}
    else{
        res.sendStatus(401);
    }
}

// server.use(auth);

//API or Endpoints or Route
server.get('/',(req,res)=>{
    res.send("Hello Pandya APni textile industry me partner banale")
    // res.json({type:'GET'})
})
server.post('/',auth,(req,res)=>{
    res.json({type:'POST'})
})
server.delete('/',(req,res)=>{
    res.json({type:'DELETE'})
})
server.patch('/',(req,res)=>{
    res.json({type:'PATCH'})
})
// server.get('/',(req,res)=>{
//     res.send('Pandya Apni Textile industry me partner bana de')
  
// })
server.listen(8080,()=>{
    console.log("Server Started");
})
