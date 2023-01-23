const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");




// array of questions for user
const questions = [
    // Question #1 - Project Title
    {
      type: "input",
      name: "title",
      message: "Enter your project's title (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a title for your project");
          return false;
        }
      },
    },
    // Question #2 - Project Description
    {
      type: "input",
      name: "description",
      message: "Enter a brief description of your project(Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description for your project");
          return false;
        }
      },
    },
    // Question #3 - Installation
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions for your project(Required)",
        validate: (nameInput) => {
            if (nameInput) {
                return true;
            } else {
                console.log(
                    "Please enter installation instructions for your project"
                    );
                    return false;
                }
            },
        },
        // Question #4 - Usage
        {
            type: "input",
            name: "usage",
            message: "Enter usage information for your project (Required)",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter usage information for your project");
                    return false;
                }
            },
        },
        // Question #5 - Software License
        {
          type: "list",
          name: "license",
          message: "Choose a software license for this project (Required)",
          choices: ["MIT", "AGPLv3", "GPLv3", "N/A"],
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log("Please choose a license for your project");
              return false;
            }
          },
        },
    // Question #6 - Contribution
    {
      type: "input",
      name: "contribution",
      message: "Enter your contribution guidelines for this project (Required)",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter contribution guidelines for your project");
          return false;
        }
      },
    },
    // Question #7 - Tests
    {
      type: "input",
      name: "tests",
      message: "Enter your testing guidelines for this project (Optional)",
    },
    // Question #8 - Github Username
    {
      type: "input",
      name: "git",
      message: "Enter your github username (Optional)",
    },
    // Question #9 - Email
    {
      type: "input",
      name: "email",
      message: "Enter your email address (Optional)",
    },
     // Question #10 - LinkedIn
     {
        type: "input",
        name: "LinkedIn",
        message: "Enter your LinkedIn user name (Optional)",
      },
];

// function to write README file
function writeToFile(generatedReadme, data) {
    const markdownData = generateMarkdown(data);
    fs.writeFile(`./${generatedReadme}.md`, markdownData, (err) => {
        if(err) {
            console.log(err)
        }
    } )
    console.log(markdownData)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile('generatedREADME', data);
    });
}

// function call to initialize program
init();
