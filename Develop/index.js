//External Modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')




//Declaring varriables to connect modules
const licenseBadge = require("./utils/licenseBadge").licenseBadge;
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
    name: 'contribute',
    message: 'Please enter contribution guidelines for your project:',
},
{
    type: 'input',
    name: 'test',
    message: 'Please enter test instructions for your project:',
},
{
    type: 'input',
    name: 'github',
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
];


//Function to return promise for writing the README file
const ReturnWriteFile = util.promisify(fs.writeFile)

//Function to initialize app
function init() {
    try {
        const data = inquirer.prompt(questions);
        data.licenseBadge = licenseBadge(data.license)
        let READMEcontent = generateMarkdown(data);


        //Generate markdown from user input


        //Create file containing markdown
    } catch (err) {
        console.log('Oops! We have encountered an error while trying to generate your README. Please try again!')
    }

};

// Function call to initialize app
init();
