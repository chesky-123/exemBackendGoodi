import { error } from "node:console";
import { getBugetByIdFromDb } from "../DAL/supabase.dal.js";



export async function isId(req, res, next) {
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: 'id not entered' });
        const data = await getBugetByIdFromDb(id);
        if (data.length === 0) return res.status(404).json({ error: "not found" });
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
    try {
        const { id } = req.params;
        if (!id) return res.status(400).json({ error: 'id not entered' });
        const data = await getBugetByIdFromDb(id);
        if (data.length === 0) return res.status(404).json({ error: "not found" });
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
}

export async function isValidQuery(req, res, next) {
    try {
        const VALID_FILTERS = ['unit', 'month', 'benefitType']
        const filters = req.query;
        const keysFilters = Object.keys(filters);
        const isValidFilters = keysFilters.some(f => VALID_FILTERS.includes(f));
        if (!isValidFilters) return res.status()
        next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
}

export async function isValidPOST_Body(req, res, next) {
    const REQUIRED_FIELDS = ['unit','benefitType','month','allocatedAmount']
    try {
        const body = req.body;
        const bodyKeys = Object.keys(body)
        if (bodyKeys.length < 4) return res.status(401).json({ error: 'One or more fields are missing.' });
        const isAllKeysInBody = bodyKeys.every(k => REQUIRED_FIELDS.includes(k));
        if (!isAllKeysInBody) return res.status(400).json({ error: 'invalid input1' })
        if(body.benefitType !== "giftCard" && body.benefitType !== 'diningHall') return res.status(400).json({ error: 'invalid input' })
            return next()
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })

    }
}








