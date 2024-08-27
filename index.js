const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New   changed Request Recived!!!!");
    console.log("its working, it is latest code  new ");
    console.log("new push done  ")
    res.end(" Hey Kartik ! NOW WE ARE ON EC2 Successfully !!");
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No.9000"));


