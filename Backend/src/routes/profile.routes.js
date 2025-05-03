import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    if (!req.user) {
        return res.status(401).send('Unauthorized');
    }
    res.status(200).json(req.user);
});



export default router;