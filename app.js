const express = require('express')
const app = express();
const { spawn } = require('child_process');
app.use(express.json());
app.use('/' , (req , res) => {
    code = {
        subject: "data is useful",
    }
    const python = spawn('python', ['./sc.py' , code.subject]);
    python.stdout.on('data' , data => {
        console.log(data.toString()) 
    })
});
app.listen(3000 , () => {
    console.log("running");
});