import { ObjectId } from "bson";
import { WRcollection } from "../db/mongoBd.js";



export async function insertRecord(data) {
    try {
        const res = await WRcollection.insertOne(data);
        const respons = await WRcollection.findOne({ _id: new ObjectId(res.insertedId) })

        return respons
    } catch (e) {
        console.error(e.message);
    };
};


export async function getRecordFromDb(id) {
    try {
        const res = await WRcollection.findOne({ soldierId: id });
        return res
    } catch (e) {
        console.error(e);

    }
}







