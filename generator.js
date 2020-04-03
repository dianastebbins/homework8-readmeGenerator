const fs = require("fs");

// sanity check for project file setup
const test = function () {
    console.log("Generator here");
}

function generateReadme(userInput, profileInfo) {
    // populate readme template with user-specific response
    const readme = populateTemplate(userInput, profileInfo);

    // save the result in a readme file with github repository in the filename
    fs.writeFile(`README_${userInput.repo}.md`, readme, function (err) {
        if (err) {
            return console.log(err);
        }
        return console.log("README written!");
    });
}

function populateTemplate(userInput, profileInfo) {
    const highlighter = "```";

    const github = userInput.github;
    const repo = userInput.repo;
    const description = userInput.description;
    const installation = userInput.installation;
    const usage = userInput.usage;
    const license = userInput.license;
    const contributing = userInput.contributing;
    const tests = userInput.tests;
    const email = userInput.email;

    const profilePic = profileInfo.avatar_url;

    // url gets special configuration
    let url = ""; 
    if(userInput.url.length > 0){
        url += '\nurl to deployed application:\n';
        url += highlighter + '\n';
        url += userInput.url;
    } else {
        url += highlighter;
    }
    
    const template =
    `# ${repo}
    
<img src="https://img.shields.io/badge/Look-I made this!-purple" alt="I Made This badge"></img>
<img src="https://img.shields.io/github/package-json/v/${github}/${repo}" alt="package-json">
<img src="https://img.shields.io/github/last-commit/${github}/${repo}" alt="last commit">
<img src="https://img.shields.io/github/issues-raw/${github}/${repo}" alt="issues">
<img src="https://img.shields.io/github/followers/${github}?label=Follow" alt="followers">

## Project Description
${highlighter}
${description}
${highlighter}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation
${highlighter}
${installation}
${url}

### Usage
${highlighter}
${usage}
${highlighter}

### License
${highlighter}
${license}
${highlighter}

### Contributing
${highlighter}
${contributing}
${highlighter}

### Tests
${highlighter}
${tests}
${highlighter}

### Questions
${highlighter}
For questions or comments, please contact ${github}:
${email}
${highlighter}
<img src="${profilePic}" alt="profile pic" width="200px" height="200px">`;

    return template;
}

// make these methods available
module.exports = {
    test: test,
    generateReadme: generateReadme
};