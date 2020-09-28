// function to generate markdown for README
function generateMarkdown(userResponse) {
  console.log(userResponse);
  
    return `
    # ${userResponse.title}\n
    
    ## Description:\n
      ${userResponse.description}\n

    # Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Credits](#credits)
    - [License](#license)
    - [Contribution](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation:\n
    ${userResponse.installation}\n

    ## Usage:\n
    ${userResponse.usage}\n

    ## Credits:\n
    ${userResponse.credits}\n

    ## License:\n
    For more information about licenses, please visit:
    [License](https://opensource.org/licenses/${userResponse.license})\n

    ## Contributing:\n    
    ${userResponse.contributing}\n
    
    ## Tests:\n
    ${userResponse.tests}\n
    
    ## Questions:\n
    For questions or concerns please use the following: 
    - [Github Profile](https://github.com/${userResponse.github})
    - [Email](${userResponse.email})\n
  `;
  }
  
  module.exports = generateMarkdown;