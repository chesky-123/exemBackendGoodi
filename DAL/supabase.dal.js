import { sbClient } from "../db/supabaseDb.js";



export async function insertBuget(newData) {

    const { data, error } = await sbClient.from('budgets').insert(newData).select()
    if (error) return console.error(error.message);

    
    return data;
};


export async function getBugetByIdFromDb(budgetId) {
    
    const { data,error} = await sbClient.from('budgets').select().eq('id',budgetId);
    if (error) { return console.error(error.message);}
    return data;
};


export async function insertBugetSpend(newData) {
    const {data,error} = await sbClient.from("spend_transaction").insert(newData).select();
    if(error) return console.error(error.message);
    return data
    
}