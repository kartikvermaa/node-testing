const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New changed Request Recived!!");
    console.log("its working, it is latest code new edit ");  

    res.end(" Kartik is a DevOps intern with a background in software development and a strong focus on deployment and CI/CD processes. He has hands-on experience with various technologies including Node.js, MongoDB, Docker, and Flask. Kartik has worked on projects like a College Management System, a BOOKSWAP platform, and an Expense Tracker application. He is currently honing his skills in deploying applications on EC2 instances, configuring webhooks, and managing process automation with tools like PM2. Kartik is eager to learn and apply his knowledge in real-world DevOps scenarios.");
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No.9000"));


