import { getBudgetFromDb, getBugetByIdFromDb, insertBuget, insertBugetSpend, updateAllocatedAmount } from "../DAL/supabase.dal.js";



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
        console.log(id);

        const body = req.body;
        body['budgetId'] = id
        const result = await insertBugetSpend(body);
        const allocatedAmount = await updateAllocatedAmount(id, body.amount)
        console.log(allocatedAmount);

        result[0][allocatedAmount]
        return res.status(201).json(result)
        console.log(body);


    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
};


export async function getBudget(req, res) {
    try {
        const conditions = req.query;
        // const conditionsKeys = Object.keys(conditions);
        // const conditionsValues = Object.values(conditions);
        const arrayCondition = Object.entries(conditions)
        console.log(arrayCondition[0]);
        
        const budget = await getBudgetFromDb(arrayCondition[0]);
        console.log('budget',budget);
        
        budget.map(async (b) => {
            const amount = await getBugetByIdFromDb(b.id).amount
            console.log('amount',amount);
            
            return b['spentAmount'] = b.allocatedAmount - amount
        });
        return res.status(200).json(budget)

    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
}





