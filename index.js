// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please provide a project title!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How is your software installed?',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is your software used?(Provide examples or scenarios)',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: "What kind of license does your project have?",
        choices: ['MIT', 'Apache', 'GPL'],
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please provide a description!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'Contributing',
        message: 'Were there any contributors to this project?(List all contributors)',
        validate: ContributingInput => {
            if (ContributingInput) {
                return true;
            } else {
                console.log('Were there any contributors to this project?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'How can a user test your software?',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('How can a user test your software?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub user name?',
        validate: githubUsernameInput => {
            if (githubUsernameInput) {
                return true;
            } else {
                console.log('What is your GitHub user name?');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please provide your email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'why',
        message: 'Why did you create this project?',
        validate: whyInput => {
            if (whyInput) {
                return true;
            } else {
                console.log('Please enter why you created this project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'how',
        message: 'How will someone use this?',
        validate: howInput => {
            if (howInput) {
                return true;
            } else {
                console.log('Please enter how someone will use this!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'MadeWith',
        message: 'what were the technologies that your application was built with.',
        validate: MadeWithinput => {
            if (MadeWithinput) {
                return true;
            } else {
                console.log('what were the technologies that your application was built with!');
                return false;
            }
        }
    }, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw err;
        }
        console.log("README was created");
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then (function (userInput){
        console.log(userInput)
        writeToFile("generateREADME.md", generateMarkdown(userInput))
    });
};

// Function call to initialize app
init();