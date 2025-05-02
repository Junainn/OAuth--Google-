import express from "express";
import authRouter from "./src/routes/auth.routes.js";
const app=express();

import {PORT} from "./src/config/env.js";
app.get("/",(req,res)=>{
    res.send("Hello World");

})


app.use('/auth',authRouter);

app.listen(PORT,()=>{
    console.log("Server is running on port 8080");
})