import { getBudgetFromDb, getBudgetSpend,  getBugetByIdFromDb, insertBuget, insertBugetSpend, updateAllocatedAmount } from "../DAL/supabase.dal.js";
import { remainingAmount } from "../middlwares/supabase.js";



export async function createBudget(req, res) {
    try {
        const body = req.body;
        const result = await insertBuget(body);
        return res.status(201).json(result)
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
};

export async function getBugetById(req, res) {
    try {
        const { id } = req.params;

        const result = await getBugetByIdFromDb(id);
        return res.status(200).json(result);
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    };
};


export async function createBudgetSpend(req, res) {
    try {
        const { id } = req.params;

        const body = req.body;
        body['budgetId'] = id
        const result = await insertBugetSpend(body);
        const allocatedAmount = await updateAllocatedAmount(id, body.amount)

        result[0][allocatedAmount]
        return res.status(201).json([result,{'remainingAmount':remainingAmount}])


    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
};


export async function getBudget(req, res) {
    try {
        const conditions = req.query;
        
        const budgets = await getBudgetFromDb(conditions);
        
        const budgetSpend = await getBudgetSpend()

        budgets.map((b) => {
            b['spentAmount'] =  budgets.reduce((acc,curr) => {
            const budget = budgetSpend.filter(b => b.budgetId === curr.id)
            
            return acc += budget[0].amount
        },0) 
            b['remainingAmount'] = b.spentAmount - b.allocatedAmount
        })
        return res.status(200).json(budgets)

    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
}





