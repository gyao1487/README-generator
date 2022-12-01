//External Modules
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util')

//Declaring varriables to connect modules
const generateMarkdown = require('./generateMarkdown.js')

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

function writeFilePlease(fileName, data) {
 fs.writeFile(fileName,data, err => {
    if (err) {
        return console.log(err)
    } 

    console.log ("Your README file has successfully been generated!")
 });
}

//Function to return promise for writing the README file
const ReturnWriteFile = util.promisify(writeFilePlease)

//Function to initialize app
async function init() {
    try {
        const data = await inquirer.prompt(questions);
        let READMEcontent = generateMarkdown(data);
        await ReturnWriteFile("new-README.md",READMEcontent)
        
    } catch (err) {
        console.log('Oops! We have encountered an error while trying to generate your README. Please try again!')
        throw err
    }

};

// Function call to initialize app
init();
