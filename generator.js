const fs = require("fs");

// sanity check for project file setup
const test = function () {
    console.log("Generator here");
}

function generateReadme(details) {
    const readme = getTemplate(details);
    fs.writeFile("generated/README.md", readme, function (err) {
        if (err) {
            return console.log(err);
        }
        return console.log("README written!");
    });
}

function getTemplate(details) {
    const title = details.title;
    const highlighter = "```";

    const template =
        `# ${title}

## Badges
badges go here

## Project Description
${highlighter}
words go here
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
words go here

url to deployed app: 
${highlighter}
https://dianastebbins.github.io/homework3-passwordGenerator/

### Usage
${highlighter}
usage goes here
${highlighter}

### License
${highlighter}
words go here
${highlighter}

### Contributing
${highlighter}
words go here
${highlighter}

### Tests
${highlighter}
tests go here
${highlighter}

### Questions
${highlighter}
For questions or comments, please contact username:
email goes here
${highlighter}
profile picture goes here`;
    return template;
}

module.exports = {
    test: test,
    generateReadme: generateReadme
};