const fs = require("fs");

// sanity check for project file setup
const test = function () {
    console.log("Generator here");
}

function generateReadme(userInput) {
    // populate readme template with user-specific response
    const readme = populateTemplate(userInput);

    // save the result in a readme file with users github name in the title
    fs.writeFile(`README_${userInput.github}.md`, readme, function (err) {
        if (err) {
            return console.log(err);
        }
        return console.log("README written!");
    });
}

function populateTemplate(userInput) {
    const github = userInput.github;
    const email = userInput.email;
    const title = userInput.title;
    const description = userInput.description;
    const installation = userInput.installation;
    const usage = userInput.usage;
    const license = userInput.license;
    const contributing = userInput.contributing;
    const tests = userInput.tests;

    // // still to go...
    // const badges = asdf.badges;
    // const url = asdf.url;
    // const profilePic = asdf.profilePic;

    const highlighter = "```";

    const template =
        `# ${title}

## Badges
badges go here

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

url to deployed app: 
${highlighter}
https://dianastebbins.github.io/homework3-passwordGenerator/

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
profile picture goes here`;
    return template;
}

// make these methods available
module.exports = {
    test: test,
    generateReadme: generateReadme
};