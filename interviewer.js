const inquirer = require("inquirer");

// sanity check for project file setup
const test = function () {
    console.log("Interviewer here");
}

// wrapping getUserInput in a Promise layer so the caller (index.js) does not try to move to
// it's next step before inquirer is done
function getUserInput() {
    return new Promise(function (resolve, reject) {
        // prompt user for input needed top complete README
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Hi! Let's build a README.md for your project! First, what is your github username?",
                    name: "github"
                },
                {
                    type: "input",
                    message: "What is your contact email address?",
                    name: "email"
                },
                {
                    type: "input",
                    message: "What is the name of the project we're building the README.md for?",
                    name: "title",
                },
                {
                    type: "input",
                    message: "Describe what the application is used for:",
                    name: "description",
                },
                {
                    type: "input",
                    message: "Provide any necessary installation details:",
                    name: "installation",
                },
                {
                    type: "input",
                    message: "Describe how to use the application:",
                    name: "usage",
                },
                {
                    type: "input",
                    message: "Provide any necessary license details:",
                    name: "license",
                },
                {
                    type: "input",
                    message: "Describe how to contribute to this project:",
                    name: "contributing",
                },
                {
                    type: "input",
                    message: "Finally, provide testing details:",
                    name: "tests",
                }
            ])
            .then(function (response, err) {
                if(err){
                    return reject(`Something bad happened in interview: ${err}`);
                }
    
                console.log(`within interviewer, response: ${JSON.stringify(response)}`);
                resolve(response);
            });
    })
}

// make these methods available
module.exports = {
    test: test,
    getUserInput: getUserInput
};