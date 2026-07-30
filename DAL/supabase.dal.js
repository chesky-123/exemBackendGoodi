import { sbClient } from "../db/supabaseDb.js";



export async function insertBuget(newData) {

    const { data, error } = await sbClient.from('budgets').insert(newData).select()
    if (error) return console.error(error.message);

    
    return data;
};


export async function getBugetByIdFromDb(budgetId) {
    
    const { data,error} = await sbClient.from('spend_transaction').select().eq('budgetId',budgetId);
    // console.log('data'
    // ,data);
    
    if (error) { return console.error(error.message);}
    return data;
};

export async function updateAllocatedAmount(id,amount) {
    const newdata = await getBugetByIdFromDb(id);
    console.log(typeof newdata[0].allocatedAmount , typeof amount);
    
    newdata[0]['allocatedAmount'] = newdata[0].allocatedAmount - +amount;
    // console.log(newdata);
    
    const {data ,error} = await sbClient.from('budgets').update(newdata).eq("id",id).select();
    if(error) return console.error(error.message);
    
    return data[0]
}


export async function insertBugetSpend(newData) {
    const {data,error} = await sbClient.from("spend_transaction").insert(newData).select();
    if(error) return console.error(error.message);
    return data
    
};


export async function getBudgetFromDb(conditions) {
    
    const {data,error} = await sbClient.from('budgets').select().eq("unit",conditions.unit);
    
    if(error) return console.error(error.message);
    return data;
}