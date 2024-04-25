import inquirer from "inquirer";

let myBalance = 10000; // Dollar

let myPin = 1234;

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "userPin",
            type: "number",
            message: "enter your pin"
        }
    ]
);

if (pinAnswer.userPin == myPin) {
    console.log("Correct Pin Code");
 

   let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                type: "list",
                message: "please select option",
                choices: ["withdraw", "check balance"]
            }
        ]
    );

    if (operationAns.operation === "withdraw"){  
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    type: "number",
                    message: "enter your amount"
                }
            ]
        );
        //  =, -=, +=
        myBalance -= amountAns.amount;
        console.log("your remaining balance is:", + myBalance);
 
    } else if (operationAns.operation === "check balance") {
        console.log("your remaining balance is:", + myBalance);

}
else {
    console.log("Wrong Pin Code");
}
}