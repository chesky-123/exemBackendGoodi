import express from 'express';
import { createRecord, getRecordBySOldierId } from '../ctrls/mongodbCtrl.js';
import { createBudget, createBudgetSpend, getBudget, getBugetById } from '../ctrls/supabaseCtrl.js';
import { isANumber, isdeviationAmount, isId, isValidPOST_Body } from '../middlwares/supabase.js';
import { isActiveRecord, isNotSctiveRecord } from '../middlwares/mongodb.js';
// import { updateTheAllocatedAmount } from '../middlwares/supabase.js';

export const router = express.Router()


router.post("/soldiers/:soldierId/benefits", isActiveRecord, createRecord);

router.get("/soldiers/:soldierId/benefits", isNotSctiveRecord, getRecordBySOldierId);

router.patch("/soldiers/:soldierId/benefits", (req, res) => {
    res.json({})
});

router.post("/budget", isValidPOST_Body, createBudget);

router.get("/budget", getBudget);

router.get("/budget/:id/transactions", isId, getBugetById);

router.post("/budget/:id/spend", isANumber, isdeviationAmount, createBudgetSpend);





