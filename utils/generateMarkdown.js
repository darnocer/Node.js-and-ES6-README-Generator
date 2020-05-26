const axios = require("axios");
const writeToFile = require("write-to-file");

function generateMarkdown(data) {
  return `# ${data.title}

  ![license badge](https://img.shields.io/github/license/darnocer/Node.js-and-ES6-README-Generator?style=flat-square)
  
  ### URL: ${data.url}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
 \`${data.installation}\`
 
  ## Usage

  ## Credits
  ${data.credits}
  
  ## Tests
  ${data.tests}

  ## Questions?
  Contact me at [${data.email}](mailto:${data.email}) or follow me on [Github](www.github.com/${data.username})

  `;
}

module.exports = generateMarkdown;
