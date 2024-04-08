#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let myPin = "0000";
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        massage: "Enter Your Pin",
        type: "string"
    }
]);
if (pinAnswer.Pin === myPin) {
    console.log("Correct Pin Code !!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please Select Option",
            type: "list",
            choices: ["Withdraw", "deposit", "Check Balance"]
        }
    ]);
    if (operationAns.operation === "Withdraw") {
        let withdrawAmount = await inquirer.prompt([
            {
                name: "withdraw",
                type: "number",
                message: "Enter Your Amount to Withdraw:"
            }
        ]);
        if (withdrawAmount.withdraw > 0) {
            let remainingAmount = myBalance - withdrawAmount.withdraw;
            if (remainingAmount >= 0) {
                console.log(`Your Balance is now ${remainingAmount}`);
            }
            else {
                console.log("Insufficient Balance!");
            }
        }
        else {
            console.log("Invalid Amount!");
        }
    }
    if (operationAns.operation === "deposit") {
        let depositAmount = await inquirer.prompt([
            {
                name: "deposit",
                type: "number",
                message: "Enter Your Amount to Deposit:"
            }
        ]);
        if (depositAmount.deposit > 0) {
            let remainingAmount = myBalance + depositAmount.deposit;
            console.log(`Your Balance is now ${remainingAmount}`);
        }
        else {
            console.log("Invalid Amount!");
        }
    }
    if (operationAns.operation === "Check Balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Incorrect Pin Code");
}
