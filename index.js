var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "Project title:",
      name: "title",
    },
    {
      type: "input",
      message: "Project description:",
      name: "password",
    },
    {
      type: "input",
      message: "Installation:",
      name: "installation",
    },
    {
      type: "input",
      message: "Usage:",
      name: "usage",
    },
    {
      type: "input",
      message: "License:",
      name: "license",
    },
    {
      type: "input",
      message: "Contributing:",
      name: "contributing",
    },
    {
      type: "input",
      message: "Tests:",
      name: "tests",
    },
  ])
  .then(function (response) {
    console.log(`Title: ${response.title}`);
  });

// const questions = [

// ];

// function writeToFile(fileName, data) {
// }

// function init() {

// }

// init();
