const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New changed Request Recived!!");
    console.log("its working, it is latest code new edit ");  

   res.end(`Welcome to my project presentation!
This project showcases a fully automated CI/CD pipeline for deploying a Node.js application using GitHub Webhooks, Docker, and PM2.
With every code push to the main branch, the pipeline rebuilds the Docker image, updates the application, and restarts it seamlessly.
Technologies used include:
- Node.js for backend
- Docker for containerization
- PM2 for process management
- GitHub Webhooks for continuous integration

Thank you for your time!`);

    
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No.9000"));


