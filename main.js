#! /user/bin/env node
import inquirer from "inquirer";
//1) computer will genrate a rendum number = done
//2) user input for guessing number= done
//3) compair user input with computer gentaited number and show result
const rendomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
if (answers.userGuessedNumber === rendomNumber) {
    console.log("congtratulation! you guessed right number.");
}
else {
    console.log("you guessed worng number");
}
