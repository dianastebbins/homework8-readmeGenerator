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
    let userInput = [];

    interviewer.getUserInput()
        .then(function (interviewerResponse) {
            // console.log(`within index, INTERVIEWER response: ${JSON.stringify(interviewerResponse)}`);
            
            // response provides github, email, title, description, installation, usage, license, contributing, tests
            userInput = interviewerResponse;
            return retriever.retrieveGithubProject(userInput.github);
        })
        .then(function (retrieverResponse) {
            // console.log(`within index, RETRIEVER response: ${JSON.stringify(retrieverResponse)}`);

            generator.generateReadme(userInput);
        })
        .catch(function (err) {
            console.log(`within index, error received: ${err}`);
        });
}


// const writeFileAsync = util.promisify(fs.writeFile);
// promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });

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