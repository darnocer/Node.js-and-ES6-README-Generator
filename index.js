const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const writeToFile = require("write-to-file");
const markdown = require("./utils/generateMarkdown.js");

// command line prompts
const questions = [
  "Enter your email:",
  "Enter your Github username:",
  "Enter the Github repo:",
  "Project title:",
  "Deployed page url:",
  "Project description:",
  "Installation:",
  "Usage:",
  "Credits:",
  "Tests:",
];

let prompts = [];

// contructor function to create prompt object for each question
const Prompt = function (question) {
  (this.type = "input"),
    (this.message = question),
    (this.name = this.message.split(" ").splice(-1).toString().toLowerCase());
  this.validate = function (value) {
    if (value.length) {
      return true;
    } else {
      return "Input required";
    }
  };
};

// generates an array of prompt objects to pass into inquirer
for (i = 0; i < questions.length; i++) {
  prompts[i] = new Prompt(questions[i]);
  prompts[i].name = prompts[i].name.substring(0, prompts[i].name.length - 1);
}

// command line prompts
inquirer.prompt(prompts).then(function (response) {
  let data = markdown(response);
  console.log(response);

  // update back from TEST

  (async () => {
    try {
      await writeToFile("READMETEST.md", data);
    } catch (error) {
      console.error(error.message);
    }
  })();
});
