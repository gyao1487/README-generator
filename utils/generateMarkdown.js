// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

//Function for license Badge
function licenseBadge(userLicense) {
  if (userLicense === "") {
    return ""

  }else {
    return `![Github license](http://img.shields.io/badge/license-${data.license}-blue.svg)`
  }
}

//Function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  

  ## Description
  ${data.description}
  
  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  If you would like to contribute to this project, you can follow the below guidelines:
  ${data.contribute}
  
  ## Tests
  How to run tests for the application:
  ${data.test}
  
  ## License
  This project is licensed under ${data.license}.
  
  ---
  ## Questions
  
  If you have any questions about this project, or have any inquiries about contributions or collaboration, please feel free to reach out! Refer to the contact information below:
  
  GitHub: ${data.github}
  
  Email: ${data.license} 
`;
}

module.exports = generateMarkdown;
