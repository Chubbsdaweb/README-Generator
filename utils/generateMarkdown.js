// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license !== 'no license') {
        return `
      ![badge](https://img.shields.io/badge/license-${license}-blue)
        `;
      } else {
        return ' ';
      }
    
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license !== 'no license') {
        return `
        [${license}](https://choosealicense.com/licenses/${license})
          `;
        } else {
          return ' ';
        }
      
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license !== 'no license') {
        return `
        ## [License](#table-of-contents)
        The application is covered under the following license:
        ${renderLicenseLink(license)}
          `;
        } else {
          return ' ';
        }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Table-of-Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [MadeWith](#MadeWith)
  
  ## [Description](#description)
  ${data.description}

  ## [Installation](#Installation)
  ${data.installation}

  ## [Usage]
  ${data.usage}
  
  ## [Contributing](#Contributing)
  ${data.Contributing}
  
  ## [Tests](#Tests)
  ${data.Tests}

  ## [MadeWith](#MadeWith)
  ${data.MadeWith}

  ## Questions (#Questions)
  Checkout the following links to contact me if you have any questions:
  [GitHub](https://github.com/${data.githubUsername})
  Email: ${data.email}
`;
}

module.exports = generateMarkdown;