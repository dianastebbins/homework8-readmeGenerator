const axios = require("axios");

// sanity check for project file setup
const test = function () {
    console.log("Retriever here");
}

// given a github username, retrieve repo information
//
// wrapping retrieveGithubProject in a Promise layer so the caller (index.js) does not try to move to
// it's next step before retriever is done
//
// returns profile structure from github
function retrieveGithubProfile(username) {
    return new Promise(function (resolve, reject) {
        console.log(`retrieveGithubProject with parameter ${username}`);
        
        const queryUrl = `https://api.github.com/users/${username}`;
        axios
            .get(queryUrl)
            .then(function (response) {
                if(false){
                    return reject(`Something bad happened in retriever`);
                }

                console.log(`within retriever, response: ${JSON.stringify(response.data)}`);
                resolve(response.data);
            });
    })
}

module.exports = {
    test: test,
    retrieveGithubProfile: retrieveGithubProfile
};