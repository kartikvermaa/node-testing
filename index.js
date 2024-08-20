const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New  ..  changed Request Recived!!!!");
    console.log("its working, it is latest code");
    console.log("new push done ")
    res.end(" NOW WE ARE ON EC2 Done Successfully !!");
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No.9000"));


