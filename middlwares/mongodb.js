import { getRecordFromDb } from "../DAL/mongodb.dal.js";




export async function isActiveRecord(req,res,next) {
    try {
        const { soldierId } = req.params;
        const result = await getRecordFromDb(soldierId);
        console.log(result);
        if(result && result.history[0].budbgetApproved) return res.status(409).json({error:'somthig wrong'});
        return next()
    } catch (e) {
      console.error(e.message);
        return res.status(500).json({ error: `server filed` })
     
    }
}