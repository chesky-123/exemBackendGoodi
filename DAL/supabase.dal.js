import { sbClient } from "../db/supabaseDb.js";



export async function insertBuget(newData) {
    console.log(newData);

    const { data, error } = await sbClient.from('budgets').insert(newData).select()
    if (error) return console.error(e.message);

    console.log(data);
    
    return data;
};