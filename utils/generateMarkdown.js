// function to generate license and badge for README
  function renderLicenseBadge(license){
    const badges = {
      AGPLv3: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)',
      GPLv3: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
      MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
    }
    return badges[license]
  }
  function renderLicenseLink(license) {
    const licenseLinks = {
      AGPLv3: '[AGPLV3](https://choosealicense.com/licenses/agpl-3.0/)',
      GPLv3: '[GPLv3](https://choosealicense.com/licenses/gpl-3.0/)',
      MIT: '[MIT](https://choosealicense.com/licenses/mit/)'
    }
    return licenseLinks[license]
  }
  function renderLicenseSection(license){
    if(license){
    return `Licensed under the ${renderLicenseLink(license)} license`
  } else {
    return ''
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

${renderLicenseBadge(data.license)}
    
## Description
${data.description}
    
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [Contact](#contact)
    
    
## Installation
${data.installation}
    
## Usage
${data.usage}
    
## License
${renderLicenseSection(data.license)}
    
## Contributing
${data.contribution}
    
## Tests
${data.tests}
    
## Questions
Any Questions? Please contact me at ${data.email}\n
You can view this project at https://github.com/${data.git}/README_generator
    
## Contact
* GitHub: [GitHub](https://github.com/${data.git})
* LinkedIn: [LinkedIn](https://www.linkedin.com/in/${data.LinkedIn})
* Email: [Kev McGowan]${data.email}
---
© Kevin McGowan
`
}



module.exports = generateMarkdown;




// castify to record