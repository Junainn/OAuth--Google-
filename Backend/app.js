import express from "express";
import authRouter from "./src/routes/auth.routes.js";
import connectDB from "./src/config/db.js";
import {PORT} from "./src/config/env.js";

const app = express();
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("Hello World");

})


app.use('/auth',authRouter);

app.listen(PORT,async()=>{
    await connectDB();
    console.log("Database connected");
    console.log("Server is running on port 8080");
})