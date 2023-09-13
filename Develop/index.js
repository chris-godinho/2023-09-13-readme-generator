const fs = require('fs');
const inquirer = require('inquirer');
const genMark = require('./utils/generateMarkdown.js');

const questions = ['Please enter the title of your project:', 'Enter the description for your project:', 'Enter the instructions for app installation:', 'Enter instructions and examples for use:', 'Choose your preferred license below:', 'Enter instructions for contributing to this project:', 'Enter examples on how to test this application:', 'Enter your GitHub username:', 'Enter your e-mail address:'];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('README file generated successfully.')
);
}

function init() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'title',
        message: questions[0],
      },
      {
        type: 'input',
        name: 'description',
        message: questions[1],
      },
      {
        type: 'input',
        name: 'installation',
        message: questions[2],
      },
      {
        type: 'input',
        name: 'usage',
        message: questions[3],
      },
      {
        type: 'list',
        name: 'license',
        message: questions[4],
        choices: ['MIT', 'GNU General Public License v3.0', 'The Unlicense'],
      },
      {
        type: 'input',
        name: 'contribute',
        message: questions[5],
      },
      {
        type: 'input',
        name: 'test',
        message: questions[6],
      },
      {
        type: 'input',
        name: 'username',
        message: questions[7],
      },
      {
        type: 'input',
        name: 'email',
        message: questions[8],
      }
    ])
    .then((compiledInfo) => {
      fileData = genMark.generateMarkdown(compiledInfo);
      writeToFile('README.md', fileData);
    });
}

// Function call to initialize app
init();
