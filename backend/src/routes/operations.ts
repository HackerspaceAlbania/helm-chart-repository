import express from "express";

const router = express.Router();

// Implement routes here
router.get('/test', (req, res) => {
    res.send("TEST");
});

export default router