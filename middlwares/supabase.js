import { error } from "node:console";
import { getBugetByIdFromDb } from "../DAL/supabase.dal.js";



export async function isId(req, res, next) {
    try {
        const {id} = req.params;
        if(!id) return res.status(400).json({error:'id not entered'});
        const data = await getBugetByIdFromDb(id);
        if(data.length === 0) return res.status(404).json({error:"not found"});
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
}
