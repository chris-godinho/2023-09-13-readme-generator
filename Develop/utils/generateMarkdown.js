// Add correct license badge markdown
function renderLicenseBadge(license) {
  let chosenBadge;
  if (license === 'MIT') {
    chosenBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
  } else if (license === 'GNU General Public License v3.0') {
    chosenBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
  } else if (license === 'The Unlicense') {
    chosenBadge = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]';
  } else {
    chosenBadge = '';
  }
  return chosenBadge;
}

// Add correct link to license badge
function renderLicenseLink(license) {
  let chosenLink;
  if (license === 'MIT') {
    chosenLink = '(https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU General Public License v3.0') {
    chosenLink = '(https://www.gnu.org/licenses/gpl-3.0)';
  } else if (license === 'The Unlicense') {
    chosenLink = '(http://unlicense.org/)';
  } else {
    chosenLink = '';
  }
  return chosenLink;
}

// Add license section to file if that is the case
function renderLicenseSection(chosenBadge, chosenLink) {
  return `
  
  ## <a name="license"></a>License

  ${chosenBadge}${chosenLink}`;
}

module.exports = {
  generateMarkdown: (data) => {
    let licenseAnchor;
    let licenseSection;
    // Check whether user wants a license
    if (data.license === 'No license') {
      // Generate empty strings for license section/anchor
      licenseAnchor = '';
      licenseSection = '';
    } else {
      // Generate license section/anchor
      licenseAnchor = `
  - [License](#license)`
      const licenseBadge = renderLicenseBadge(data.license);
      const licenseLink = renderLicenseLink(data.license);
      licenseSection = renderLicenseSection(licenseBadge, licenseLink);
    }
  // Generate markdown
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)${licenseAnchor}
  - [How to Contribute](#contribute)
  - [Tests](#license)
  - [Questions](#license)
  
  ## <a name="installation"></a>Installation
  
  ${data.installation}
  
  ## <a name="usage"></a>Usage
  
  ${data.usage}${licenseSection}
  
  ## <a name="contribute"></a>How to Contribute
  
  ${data.contribute}
  
  ## <a name="tests"></a>Tests
  
  ${data.test}

  ## <a name="questions"></a>Questions

  Feel free to ask me any questions at [my GitHub page](<https://github.com/${data.username}>) or through [e-mail](<mailto:${data.email}>).
`;
},
}
