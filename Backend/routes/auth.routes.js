import express from 'express';

const router = express.Router();


router.get('/login',(req,res)=>{
    res.status(200).send("Login Page");
})

router.get('/google',(req,res)=>{
    res.status(200).send("Google Auth Page");
})

router.get('/logout',(req,res)=>{
    res.status(200).send("Logout Page");
})



export default router;