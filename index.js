const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const writeToFile = require("write-to-file");
const markdown = require("./utils/generateMarkdown.js");

// command line prompts
const questions = [
  "Enter your email:",
  "Enter your Github username:",
  "Project title:",
  "Deployed page url:",
  "Project description:",
  "Installation:",
  "Usage:",
  "License:",
  "Contributing:",
  "Tests:",
  "Questions?",
];

let prompts = [];

// contructor function to create prompt object for each question
const Prompt = function (question) {
  (this.type = "input"),
    (this.message = question),
    (this.name = this.message.split(" ").splice(-1).toString().toLowerCase());
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

  // get github picture and email based on username

  // let gitInfo;
  // const queryUrl = `https://api.github.com/users/${data.username}`;
  // axios.get(queryUrl).then(function (response) {
  //   gitInfo = {
  //     image: response.data.avatar_url,
  //     email: response.data.email,
  //   };
  // });
  // console.log(gitInfo); // returns undefined

  (async () => {
    try {
      await writeToFile("README.md", data);
    } catch (error) {
      console.error(error.message);
    }
  })();
});
