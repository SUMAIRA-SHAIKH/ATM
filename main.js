#! /usr/bin/env node
import inquirer from "inquirer";
//let a = "$"
//let bal= 10000
let myBalance = 4000; //ruppes in account 
let myPin = `thursday7pm`;
import chalk from "chalk"; // fonts background color
console.log(`${chalk.bgMagentaBright.bold("\n\t\t.~~~~WELCOME TO ATM MACHINE~~~~.\n")}`);
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Please enter you pin code...",
        type: "string|number",
    }
]);
if (pinAnswer.pin === myPin) {
    // 
    console.log(`${chalk.magentaBright("\t\t\t\tCorrect pin code!\n")}`);
    console.log(`${chalk.greenBright.italic("\t Account no: 11709 \t Account holder name: 'Sumaira Aziz'\n")}`);
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select one option",
            type: "list",
            choices: ["With_Draw", "Check_Balance", "Fast_Cash"],
        }
    ]);
    //********** */ withdraw option
    if (operationAns.operation === "With_Draw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter the amount you want to withdraw",
                type: "number",
            }
        ]);
        if (amountAns.amount < myBalance) {
            myBalance -= amountAns.amount;
            console.log("Now your balance is = " + myBalance, "$");
        }
        else {
            console.log("Your account has Insuficent Balance");
        }
    }
    // **********check balance button
    else if (operationAns.operation === "Check_Balance") {
        // console.log("Your current balance is = " + myBalance)
        console.log(`Your current balance is: ${myBalance}$ `);
    }
    //***********fast cash
    else if (operationAns.operation === "Fast_Cash") {
        let fast = await inquirer.prompt([{
                name: "fast_opt",
                message: "How much money you want to withdraw select one option?",
                type: "list",
                choices: ["500", "1000", "5000",],
            }]);
        if (fast.fast_opt < myBalance) {
            myBalance -= fast.fast_opt;
            console.log(`Now your remaning balance is = ${myBalance}$`);
        }
        else {
            console.log("insuficient Balance");
        }
    }
    else {
        console.log("Incorrect pin number");
    }
}
