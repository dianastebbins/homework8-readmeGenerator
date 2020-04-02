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
    .then(function(interviewerResponse){
        // response provides github, title, description, installation, usage, license, contributing, tests
        console.log(`within index, INTERVIEWER response: ${JSON.stringify(interviewerResponse)}`);
    
        retriever.retrieveGithubProject(interviewerResponse.github)
        .then(function(retrieverResponse){
            console.log(`within index, RETRIEVER response: ${JSON.stringify(retrieverResponse)}`);        
        })
        .catch(function(retErr){
            console.log(`within index, error received: ${retErr}`);
            
        });
    })
    .catch(function(intErr){
        console.log(`within index, error received: ${intErr}`);
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