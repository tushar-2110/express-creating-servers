const express=require("express");
const app= express()

// app.use((req,res)=>{

//   console.log("we are getting the requests");
//   //req.send("hey we are listening");
  

// })


app.get('/search',(req,res)=>{

const {q}=req.query
res.send("<h1>this is the response: ${q} </h1>");



})


app.get('/cats',(req,res)=>{

// console.log("cats calling!");
res.send("meow");

})

app.get("/dogs",(req,res)=>{

res.send("woof");


})



app.listen(5000,()=>{

 console.log("listening on port 8080");


})