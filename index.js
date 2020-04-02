const interviewer = require("./interviewer.js");
const retriever = require("./retriever.js");
const generator = require("./generator.js");

console.log("Start here");
interviewer.test();
retriever.test();
generator.test();

// prompt user for input
// github user name
// call github API
// retrieve email -- how to report issues
// retrieve profile image

interviewer.getUserInputAsync()
    .then(function (response) {
        // response provides github, title, description, installation, usage, license, contributing, tests
        console.log(`within index, response: ${JSON.stringify(response)}`);
        // console.log(JSON.stringify(response));
    })
    .catch(function (err) {
        console.log(`within index, error received: ${err}`);
    });


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