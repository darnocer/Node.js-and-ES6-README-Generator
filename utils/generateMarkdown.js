const axios = require("axios");
const writeToFile = require("write-to-file");

function generateMarkdown(data) {
  return `# ${data.title}

  ![last commit](https://img.shields.io/github/last-commit/${data.username}/${data.repo}?style=flat-square) ![license badge](https://img.shields.io/github/license/${data.username}/${data.repo}?style=flat-square)


  ### URL: ${data.url}

  ## Description

  ---

  ${data.description}


  ## Table of Contents

  ---

  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ---

 \`${data.installation}\`
 
  ## Usage

  ---


  ## Credits

  ---

  ${data.credits}
  
  ## Tests
  
  ---
  
  ${data.tests}

  ## Questions?

  ---
  
  Contact me at [${data.email}](mailto:${data.email}) 
  
  or [![Follow on Github](https://img.shields.io/github/followers/${data.username}?label=Follow&style=social)](http://www.github.com/${data.username})

  `;
}

module.exports = generateMarkdown;
