//External Modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

//Internal requirements
const generateMarkdown = require('./utils/generateMarkdown.js')


// Array of questions for inquirer
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'
},
{
    type: 'input',
    name: 'description',
    message: 'Please write a description for your project:',
},
{
    type: 'input',
    name: 'installation',
    message: 'Please enter installation instructions for your project:',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please enter usage information for your project:',
},
{
    type: 'input',
    name: 'contribution',
    message: 'Please enter contribution guidelines for your project:',
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter test instructions for your project:',
},
{
    type: 'input',
    name: 'username',
    message: 'What is your GitHub username?',
},
{
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
},
{
    type: 'list',
    name: 'license',
    message: 'Please choose the license for this project:',
    choices: [
        'Apache',
        'Academic',
        'GNU',
        'ISC',
        'MIT',
        'Mozilla',
        'Open',
    ]
},
]];


//Function to write README file
function writeToFile(fileName, data) {
    FileSystem.writeFile('README.md', READMEcontent)
}

//Function to initialize app
function init() { 






}

// Function call to initialize app
init();
