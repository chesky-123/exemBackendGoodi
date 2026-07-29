import express from 'express';
import { createRecord, getRecordBySOldierId } from '../ctrls/mongodbCtrl.js';

export const router = express.Router()


router.post("/soldiers/:soldierId/benefits", createRecord);

router.get("/soldiers/:soldierId/benefits", getRecordBySOldierId);

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





