const http = require("http");

const myServer = http.createServer((req,res) =>{
    console.log("New changed Request Recived!!");
    console.log("its working, it is latest code new ");  

      res.send(`
        <html>
            <head>
                <title>Kartik's Introduction</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        text-align: center;
                        padding: 50px;
                    }
                    h1 {
                        color: #333;
                    }
                </style>
            </head>
            <body>
                <h1>Hello, I'm Kartik!</h1>
                <p>I am a DevOps intern, passionate about automation and continuous integration.</p>
                <p>Welcome to my introduction page. Stay tuned for more updates!   x  OKK </p>
            </body>
        </html>
    `);
    
    res.end(" Hey Kartik  WE ARE ON EC2 Successfully");
    
});

myServer.listen(9000, ()=> console.log("Server Started on port No.9000"));


