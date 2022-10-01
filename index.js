const express = require('express');  //3rd party package


const app = express();
const PORT = 9000;

app.get("/", (request,response)=>{
    response.send("hello everyone")
});


//create server

app.listen(PORT, ()=> console.log("server started on port", PORT));