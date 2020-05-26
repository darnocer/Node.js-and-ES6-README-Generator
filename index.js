const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const writeToFile = require("write-to-file");
const emoji = require("node-emoji");
const markdown = require("./utils/generateMarkdown.js");
const github = require("./utils/github.js");

// emojis
const checkmark = emoji.get("heavy_check_mark");

// command line prompts
const questions = [
  "Enter your full name:",
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
  "Enter your license:",
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

  (async () => {
    try {
      await writeToFile("README.md", data);
      await console.log(`${checkmark}  README.md successfully created!`);
    } catch (error) {
      console.error(error.message);
    }
  })();
});
