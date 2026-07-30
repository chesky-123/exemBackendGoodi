// import { array } from "node:stream/iter";
import { sbClient } from "../db/supabaseDb.js";



export async function insertBuget(newData) {

    const { data, error } = await sbClient.from('budgets').insert(newData).select()
    if (error) return console.error(error.message);


    return data;
};


export async function getBugetByIdFromDb(budgetId) {

    const { data, error } = await sbClient.from('budgets').select().eq('id', budgetId);
    // console.log('data'
    // ,data);

    if (error) { return console.error(error.message); }
    return data;
};

export async function updateAllocatedAmount(id, amount) {
    const newdata = await getBugetByIdFromDb(id);

    newdata[0]['allocatedAmount'] = newdata[0].allocatedAmount - +amount;
    // console.log(newdata);

    const { data, error } = await sbClient.from('budgets').update(newdata).eq("id", id).select();
    if (error) return console.error(error.message);

    return data[0]
}


export async function insertBugetSpend(newData) {
    const { data, error } = await sbClient.from("spend_transaction").insert(newData).select();
    if (error) return console.error(error.message);
    return data

};


export async function getBudgetFromDb(conditions) {

    const result = []
    if (conditions.unit) {
        const { data, error } = await sbClient.from('budgets').select().eq("unit", conditions.unit);
        if (error) return console.error(error.message);
        for (let i = 0; i < data.length; i++) {
            if (!result.includes(data[i])) { result.push(data[i]) };
    
        }
    }
    
    if (conditions.month) {
        const {data,error} = await sbClient.from('budgets').select().eq("month", conditions.month);
        if (error) return console.error(error.message);
        for (let i = 0; i < data.length; i++) {
            if (!result.includes(data[i])) { result.push(data[i]) };
    
        }
    }
    
    if (conditions.benefitType) {
        const {data,error} = await sbClient.from('budgets').select().eq("benefitType", conditions.benefitType);
        if (error) return console.error(error.message);
        for (let i = 0; i < data.length; i++) {
            if (!result.includes(data[i])) { result.push(data[i]) };
    
        }
    }

    return result;
}