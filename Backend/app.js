import express from "express";
import authRouter from "./routes/auth.routes.js";
const app=express();


app.get("/",(req,res)=>{
    res.send("Hello World");

})


app.use('/auth',authRouter);

app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})