import express from "express";
import cookieSession from "cookie-session";
import passport from "passport";


import authRouter from "./src/routes/auth.routes.js";
import connectDB from "./src/config/db.js";
import {PORT,COOKIE_KEY} from "./src/config/env.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(cookieSession({
    maxAge: 24*60*60*1000, 
    keys: [COOKIE_KEY],
}));

app.use(passport.initialize());
app.use(passport.session());


app.get("/",(req,res)=>{
    res.send("Hello World");

})


app.use('/auth',authRouter);

app.listen(PORT,async()=>{
    await connectDB();
    console.log("Database connected");
    console.log("Server is running on port 8080");
})