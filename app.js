const express = require('express');
const app = express();
app.get("/",(req,resp)=>{
    resp.send("Hello Node hello Dhiraj");
});
const port = process.env.port || 8080 ;
app.listen(port,()=>{
    console.log("server is running");
});