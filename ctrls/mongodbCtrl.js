import { getRecordFromDb, insertRecord, updateBenefitsIntoDB } from "../DAL/mongodb.dal.js";



export async function createRecord(req, res) {
    try {
        const { soldierId } = req.params;
        const body = req.body;
        const newData = {
            soldierId: soldierId, unit: body.unit,
            currentBenefitType: body.benefitType,
            history: [{
                startDate: body.startDate || new Date(),
                endDate: null,
                decisionReason: body.decisionReason,
                budbgetApproved: body.budbgetApproved,
                benefitType: body.benefitType,
                details: body.details
            }]
        }
        const result = await insertRecord(newData);

        return res.status(201).json(result)

    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    };
};


export async function getRecordBySOldierId(req, res) {
    try {
        const { soldierId } = req.params;
        const result = await getRecordFromDb(soldierId);
        res.status(200).json(result);
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
};

export async function updateBenefits(req, res) {
    try {
        const { soldierId } = req.params;
        const body = req.body;
        const result = await updateBenefitsIntoDB(soldierId, body);
        return res.status(200).json(result)
    } catch (e) {
        console.error(e.message);
        return res.status(500).json({ error: `server filed` })
    }
}