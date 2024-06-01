// src/index.js
import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const cors =require("cors")
const mysql=require("mysql")
const app: Express = express();
const port = process.env.PORT || 8000;
app.use(cors())
app.use(express.json())

const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Khadar",
    database:"khadar"
})

// app.get("/", (req: Request, res: Response) => {
//     res.send("Express + TypeScript Server");
// });


app.get("/",(req,res)=>{
    const sql ="SELECT * FROM users";
    db.query(sql,(err:any,data:any)=>{
        if(err)return res.json(err)
        return res.json(data)
    })
})


app.get("/Login",(res,req)=>{
 
})

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});