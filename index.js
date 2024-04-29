const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of your project:',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Enter the description of your project:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installation instructions:'
        },
        // how can i create a tabel of contents
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information:'
        },
        {
            type: 'input',
            name: 'credits',
            message: 'Enter your list of collaborators or resources:'
        },
        // { do not use this one
        //     type: 'input',
        //     name: 'contributing',
        //     message: 'Enter contribution guidelines:'
        // },
        {
            type: 'input',
            name: 'license',
            message: 'Choose a license for your project:',
            choices: ['Apache License 2.0',
            'GNU General Public License v3.0',
            'MIT License',
            'BSD 2-Clause "Simplified" License',
            'BSD 3-Clause "New" or "Revised" License',
            'Boost Software License 1.0',
            'Creative Commons Zero v1.0 Universal',
            'Eclipse Public License 2.0',
            'GNU Affero General Public License v3.0',
            'GNU General Public License v2.0',
            'GNU Lesser General Public License v2.1',
            'Mozilla Public License 2.0',
            'The Unlicense']
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address:'
        }
    ])
    .then((response) => {
        const { title, description, installation, usage, credits, license, tests, github, email } = response;
        fs.writeFile('README.md', readmeContent, (err) => {
            if (err) {
                console.error('Error writing README file:', err);
            } else {
                console.log('README.md successfully created!');
            }
        });
    });