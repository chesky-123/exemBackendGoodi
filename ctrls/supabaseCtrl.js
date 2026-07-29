import { insertBuget } from "../DAL/supabase.dal.js";



export async function createBudget(req,res) {
    try {
        const body = req.body;
        const result = await insertBuget(body);
        return res.status(201).json(result)
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
}





