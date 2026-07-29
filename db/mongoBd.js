import { MongoClient} from 'mongodb'

const MONGO_DB_URI = process.env.MONGO_DB_URI;


const client = new MongoClient(MONGO_DB_URI);

try {
    await client.connect()
    console.log(`db connected`);
    
} catch (e) {
    console.error(`filed connect to db`,e.message);
    process.exit()
};



const db = client.db('welfareRecordDB');

export const WRcollection = await db.createCollection('welfareRecord')



