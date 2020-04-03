const interviewer = require("./interviewer.js");
const retriever = require("./retriever.js");
const generator = require("./generator.js");

// interviewer.test();
// retriever.test();
// generator.test();

function startProcess() {
    let userInput = [];
    let profileInfo = [];
    
    // prompt user for input
    interviewer.getUserInput()
    .then(function (interviewerResponse) {
        // save the responses:
        // github, repo, url, description, installation, usage, license, contributing, tests, email
        userInput = interviewerResponse;
        
        // call github API with github username
        return retriever.retrieveGithubProfile(userInput.github);
        })
        .then(function (retrieverResponse) {
            // save the profile information
            profileInfo = retrieverResponse;

            // request a README with userInput and profileInfo details
            generator.generateReadme(userInput, profileInfo);
        })
        .catch(function (err) {
            console.log(`within index, error received: ${err}`);
        });
}

// TODO: mayby this was how to do this?
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

// create GIF demonstrating app functionality
// submit
// generate README.md for a project repo
// submit
// submit the URL of git repo

// let's do this!!
startProcess();