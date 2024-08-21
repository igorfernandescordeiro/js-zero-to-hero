// const prompt = require('prompt-sync')()
// Compound interest calculator that prompts a user for some inputs, and finally calculates the compounded interest value

let init_amount = 20000
let monthly_contribution = 400
let number_of_years = 30
let interest_rate = 10



// step 1 - define a function that we can use to calculate the final value of the compounded interest
function compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate){
    let total = init_amount;

    let annual_contribution = monthly_contribution * 12;

    for(let i = 0 ; i < number_of_years; i++) {
        total += annual_contribution;
        total *= ((100 + interest_rate) / 100);
    }
    return total.toFixed(2);
}


// step 2 - define a function that would calculate the difference (ie the effect that compounding has had)
function calculateRegular(init_amount, monthly_contribution, number_of_years) {
    return (init_amount + monthly_contribution * 12 * number_of_years).toFixed(2);
};

function printOutPut(init_amount, monthly_contribution, number_of_years, interest_rate){
    let final_value = compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate);
    let value_without_compounding = calculateRegular(init_amount, monthly_contribution, number_of_years);
    let sumary = `INIT_AMOUT: ${init_amount} \nMONTHLY_CONTRIBUTION: ${monthly_contribution}\nNUMBER_OF_YEARS: ${number_of_years}\nINTEREST_RATE: ${interest_rate}\n\nFINAL_COMPOUNDED_VALUE: $${final_value}\nREGULAR_AMOUNT: $${value_without_compounding}\nDIFFERENCE: $${final_value - value_without_compounding}`;

    console.log(sumary);
}
// printOutPut(init_amount, monthly_contribution, number_of_years, interest_rate);



// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts



// step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

