const fs = require("fs");

// sanity check for project file setup
const test = function () {
    console.log("Generator here");
}

function generateReadme(details) {
    const readme = getTemplate(details);
    fs.writeFile(`README_${details.github}.md`, readme, function (err) {
        if (err) {
            return console.log(err);
        }
        return console.log("README written!");
    });
}

function getTemplate(details) {
    const github = details.github;
    const email = details.email;
    const title = details.title;
    const description = details.description;
    const installation = details.installation;
    const usage = details.usage;
    const license = details.license;
    const contributing = details.contributing;
    const tests = details.tests;

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

module.exports = {
    test: test,
    generateReadme: generateReadme
};