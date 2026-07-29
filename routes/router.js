import express from 'express';
import { createRecord, getRecordBySOldierId } from '../ctrls/mongodbCtrl.js';
import { createBudget, createBudgetSpend, getBudget, getBugetById } from '../ctrls/supabaseCtrl.js';
import { isId } from '../middlwares/supabase.js';
// import { updateTheAllocatedAmount } from '../middlwares/supabase.js';

export const router = express.Router()


router.post("/soldiers/:soldierId/benefits", createRecord);

router.get("/soldiers/:soldierId/benefits", getRecordBySOldierId);

router.patch("/soldiers/:soldierId/benefits", (req, res) => {
    res.json({})
});

router.post("/budget", createBudget);

router.get("/budget", getBudget);

router.get("/budget/:id/transactions",isId, getBugetById);

router.post("/budget/:id/spend", createBudgetSpend);





