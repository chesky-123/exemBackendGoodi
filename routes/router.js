import express from 'express';

export const router = express.Router()


router.post("/soldiers/:soldierId/benefits", (req, res) => {
    try {
        
        res.json({})
    } catch (error) {
        console.error(e.message);
        
        res.json({})
    }
});

router.get("/soldiers/:soldierId/benefits", (req, res) => {
    res.json({})
});

router.patch("/soldiers/:soldierId/benefits", (req, res) => {
    res.json({})
});

router.post("/budget", (req, res) => {
    res.json({})
});

router.get("/budget", (req, res) => {
    res.json({})
});

router.get("/budget:id/transactions", (req, res) => {
    res.json({})
});

router.post("/budget:id/spend", (req, res) => {
    res.json({})
});





