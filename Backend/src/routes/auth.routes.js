import express from 'express';
import passport from 'passport';
import  './../config/passport.js';
const router = express.Router();


router.get('/login',(req,res)=>{
    res.status(200).send("Login Page");
})

router.get('/google',passport.authenticate('google',{
    scope :['profile']
}))

router.get("/google/redirect",passport.authenticate('google'),(req,res)=>{
    // Successful authentication, redirect home.
    res.status(200).send("You reached the callback URI");
})

router.get('/logout',(req,res)=>{
    res.status(200).send("Logout Page");
})



export default router;