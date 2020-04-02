const interviewer = require("./interviewer.js");
const retriever = require("./retriever.js");
const generator = require("./generator.js");
const util = require("util");
const fs = require("fs")

interviewer.test();
retriever.test();
generator.test();

// prompt user for input
// github user name
// call github API
// retrieve profile image

function startProcess() {
    interviewer.getUserInput()
        .then(function (interviewerResponse) {
            console.log(`within index, INTERVIEWER response: ${JSON.stringify(interviewerResponse)}`);
            
            // response provides github, email, title, description, installation, usage, license, contributing, tests
            return retriever.retrieveGithubProject(interviewerResponse.github);
        })
        .then(function (retrieverResponse) {
            console.log(`within index, RETRIEVER response: ${JSON.stringify(retrieverResponse)}`);

            generator.generateReadme("crazy title");
        })
        .catch(function (err) {
            console.log(`within index, error received: ${err}`);
        });
}

// build readme
// at least one badge
// user input -> project title
// user input -> project description
// table of contents
// user input -> installation
// user input -> usage
// user input -> license
// user input -> contributing
// user input -> tests
// questions
// retrieved -> github profile picture
// retrieved -> github email

// create GIF demonstrating app functionality
// submit
// generate README.md for a project repo
// submit
// submit the URL of git repo

startProcess();