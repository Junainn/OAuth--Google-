import express from "express";
import session from "express-session";
import passport from "passport";


import authRouter from "./src/routes/auth.routes.js";
import profileRouter from "./src/routes/profile.routes.js";


import "./src/config/passport.js"; 
import connectDB from "./src/config/db.js";
import {PORT,COOKIE_KEY} from "./src/config/env.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use(
    session({
      secret: COOKIE_KEY,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 24 * 60 * 60 * 1000,
      },
    })
  );

app.use(passport.initialize());
app.use(passport.session());


app.get("/",(req,res)=>{
    res.send("Welcome to the home page. Go to /auth/google to login with Google.");

})


app.use('/auth',authRouter);
app.use('/profile',profileRouter);

app.listen(PORT,async()=>{
    await connectDB();
    console.log("Database connected");
    console.log("Server is running on port 8080");
})