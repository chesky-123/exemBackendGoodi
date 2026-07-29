import express from 'express';
import 'dotenv/config';
import { router } from './routes/router.js';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

app.use("/",router);

app.listen(PORT,(e)=>{
    if (e) return console.error(e.message);
    console.log(`server running in port ${PORT}`);
    
})




