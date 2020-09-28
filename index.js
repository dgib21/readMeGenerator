
// Initialize the file system and inquirer modules
const inquirer = require('inquirer');
const fs = require('fs');

const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUser = () => {

  return inquirer.prompt([{
    type: 'input',
    name: 'title',
    message: 'Enter project name: ',
    
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter project description: ',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter project installation instructions: ',
   
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Describe how the project should be used: '
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Enter contribution guidelines: '
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select a license:',
    choices: [
      "MIT",
      "ISC",
      "Apache-2.0",
      "MPL-2.0"
    ]
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter GitHub username?', 
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address?'
  },
  ])
    .then(userResponse => {
    const readMe = generateMarkdown(userResponse);
      return writeToFile(readMe)
    })
    .then(response => {
      console.log(response);
    }) 
    .catch(err => {
      console.log(err);
    });
};

// function to write README file
function writeToFile(userResponse) {
  // create a path to create the readme file
  const fileName = "readme.md";

  // Write the file
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, userResponse, err => {
     
      //need some error checking 

    });
  });

}

// function to initialize program
function init() {
  const userResponse = promptUser();
}

// function call to initialize program
init();