const prompt = require('prompt-sync')()
// Compound interest calculator that prompts a user for some inputs, and finally calculates the compounded interest value


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

// printOutPut(init_amount, monthly_contribution, number_of_years, interest_rate);



// step 3 - to create a run function that then prompts the user for all necessary inputs required to calculate the final amounts

function run(){
    let init_amount = parseInt(prompt('What is your initial investiment ($)?'));
    let monthly_amount = parseInt(prompt('What is your monthly contribution ($)?'));
    let number_of_years = parseInt(prompt('For how many years would you like to compound your investment?'));
    let interest_rate = parseInt(prompt('What is your expected interest rate (%) over the years?'));

    printOutPut(init_amount, monthly_amount, number_of_years, interest_rate);
}


// step 4 - inside of said function, make a nice pretty print statement using a template literal string that gives the financial breakdown

function printOutPut(init_amount, monthly_contribution, number_of_years, interest_rate){
    let final_value = compoundInterest(init_amount, monthly_contribution, number_of_years, interest_rate);
    let value_without_compounding = calculateRegular(init_amount, monthly_contribution, number_of_years);
    let sumary = `INIT_AMOUT: $${init_amount} \nMONTHLY_CONTRIBUTION: $${monthly_contribution}\nNUMBER_OF_YEARS: ${number_of_years}\nINTEREST_RATE: %${interest_rate}\n\nFINAL_COMPOUNDED_VALUE: $${final_value}\nREGULAR_AMOUNT: $${value_without_compounding}\nDIFFERENCE: $${final_value - value_without_compounding}`;

    console.log(sumary);
}

run();