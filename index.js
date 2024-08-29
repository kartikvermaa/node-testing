const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New changed Request Recived!!");
    console.log("its working, it is latest code new edit ");  

    res.end(" hey Task completed.");
    
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No.9000"));


