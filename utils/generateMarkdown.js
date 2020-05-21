const axios = require("axios");
const writeToFile = require("write-to-file");

function generateMarkdown(data) {
  // let imgUrl;
  // let email;
  // let legalName;

  // // get github picture and email based on username
  // const queryUrl = `https://api.github.com/users/${data.username}`;
  // axios.get(queryUrl).then(function (response) {
  //   imgUrl = response.data.avatar_url;
  //   email = response.data.email;
  //   legalName = response.data.legalName;
  //   console.log(imgUrl);
  // });

  return `# ${data.title}
  
  ## URL
  ${data.url}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## License
  ${data.license}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}

  ## Questions?


  `;

  // writeToFile("README.md", readME);
}

module.exports = generateMarkdown;
