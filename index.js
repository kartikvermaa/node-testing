const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New Request Recived!!!!!");
    console.log("hi from ec2");
    console.log("done")
    res.end("NOW WE ARE ON EC2 Done Successfully flask  ");
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No. 9000"));
