const template = (data) => {
return `
# ${data.title}

## Description
${data.description}

## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [License](#license)
5. [Contributing](#contributing)
6. [Tests](#tests)
7. [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.credits}

## Tests
${data.tests}

## Questions
For questions about this project, please input your contact ${data.github} and ${data.email}.
`;}
module.exports =  {template};