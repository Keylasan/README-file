
const fs = require("fs");
const inquirer = require("inquirer");
inquirer
  .prompt([
    {
        type: "input",
        name: "gitUser",
        message: "What is your Github username?"
      },
    {
      type: "input",
      name: "title",
      message: "What is your Project's Title?"
    },
    {
      type: "input",
      name: "location",
      message: "Where are you located?"
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your linkedin username?"
    },
    {
      type: "input",
      name: "github",
      message: "What is your github username?"
    }
  ])
  .then(data => {
    const gitUser = data.gitUser;
    const title= data.title;
    const userLoc = data.location;
    const linkedin = data.linkedin;
    const github = data.github;
    let pageContent = `
    Github Username: ${gitUser}
    Project's title: ${title}
    
    
   `;
    fs.writeFile("README.txt", pageContent, err => {
      if (err) {
        throw err;
      }
      console.log("success!");
    });
  });