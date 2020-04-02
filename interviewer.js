const inquirer = require("inquirer");

// sanity check for project file setup
const test = function () {
    console.log("Interviewer here");
}

// github user name
// call github API
// retrieve email -- how to report issues
// retrieve profile image
// other prompts:
// project title
// project description -- what is the app for
// installation -- how to install it
// usage --how to use the app
// license
// contributing -- how to make contributions
// tests


// prompt user for input
// github, title, description, installation, usage, license, contributing, tests
function getUserInputAsync() {
    return new Promise(function (resolve, reject) {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Hi! Let's build a README.md for your project! First, what is your github username?",
                    name: "github"
                },
                // {
                //     type: "input",
                //     message: "What is the name of the project we're building the README.md for?",
                //     name: "title",
                // },
                // {
                //     type: "input",
                //     message: "Describe what the application is used for:",
                //     name: "description",
                // },
                // {
                //     type: "input",
                //     message: "Provide any necessary installation details:",
                //     name: "installation",
                // },
                // {
                //     type: "input",
                //     message: "Describe how to use the application:",
                //     name: "usage",
                // },
                // {
                //     type: "input",
                //     message: "Provide any necessary license details:",
                //     name: "license",
                // },
                // {
                //     type: "input",
                //     message: "Describe how to contribute to this project:",
                //     name: "contributing",
                // },
                {
                    type: "input",
                    message: "Finally, provide testing details:",
                    name: "tests",
                }
            ])
            .then(function (response) {
                if(false){
                    return reject(`Something bad happened in interview`);
                }
    
                console.log(`within interviewer, response: ${JSON.stringify(response)}`);
                resolve(response);
            });
    })
}

module.exports = {
    test: test,
    getUserInputAsync: getUserInputAsync
};