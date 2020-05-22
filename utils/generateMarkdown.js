const axios = require("axios");
const writeToFile = require("write-to-file");

function generateMarkdown(data) {
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
  Contact me at [mailto:${data.email}](${data.email}) or follow me on [www.github.com/${data.username}](Gihub)

  `;

  // writeToFile("README.md", readME);
}

module.exports = generateMarkdown;
