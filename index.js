const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New changed Request Recived!!");
    console.log("its working, it is latest code new edit ");  

    res.end(" This involves setting up a Flask application on an EC2 instance to handle GitHub webhook
notifications, enabling automatic updates to a Node.js application after code is pushed to the main
branch. The Flask app listens for POST requests on a specified endpoint and triggers a shell script
upon receiving a webhook event. This script updates the Node.js application on the server by
pulling the latest code from the main branch, installing dependencies, and restarting the
application using PM2, a process manager for Node.js. The setup also involves configuring PM2 to
manage both the Flask and Node.js applications, ensuring they start on boot. The task concludes
with testing the webhook to verify that the system responds correctly to code pushes in the GitHub
repository.
.");
    
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No.9000"));


