import express from "express";
import dotenv from "dotenv"

const app = express()

dotenv.config()

const port = process.env.port || 3000;

app.get("/",(req,res) =>{
    res.json({key:"i am Nitesh Swarnakar"})
})

app.listen(port, () => console.log(`server listening on the port ${port}`))