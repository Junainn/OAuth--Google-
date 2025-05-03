import express from 'express';
import passport from 'passport';
import  './../config/passport.js';
const router = express.Router();


router.get('/login',(req,res)=>{
    res.status(200).send("This is manual login page. Go to /auth/google to login with Google.");
})

router.get('/google',passport.authenticate('google',{
    scope :['profile']
}))

router.get("/google/redirect",passport.authenticate('google'),(req,res)=>{
    res.redirect("/profile"); 
})

router.get('/logout',(req,res)=>{
    req.logout(()=>{
        res.redirect('/auth/login')
    })
})



export default router;