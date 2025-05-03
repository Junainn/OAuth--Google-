import express from 'express';

const router = express.Router();

router.get('/', async(req, res) => {
    if (!req.isAuthenticated()) {
        return res.status(401).send('Unauthorized');
    }
    
    res.status(200).json(req.user);
});



export default router;