// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
module.exports = {
  generateMarkdown: (data) => {
  // console.log(data);
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [How to Contribute](#contribute)
  - [Tests](#license)
  - [Questions](#license)
  
  ## <a name="installation"></a>Installation
  
  ${data.installation}
  
  ## <a name="usage"></a>Usage
  
  ${data.usage}
  
  ## <a name="license"></a>License
  
  ${data.license}
  
  ## <a name="contribute"></a>How to Contribute
  
  ${data.contribute}
  
  ## <a name="tests"></a>Tests
  
  ${data.test}

  ## <a name="questions"></a>Questions

  https://github.com/${data.username}
  ${data.email}
`;
},
}
