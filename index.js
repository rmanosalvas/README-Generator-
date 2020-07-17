// The packages we need in order to create README.md
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");



// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is  your full name?",
        name: "name",
    }, {
        type: "input",
        message: "What is  your GitHub username?",
        name: "github",
    }, {
        type: "input",
        message: "What is  your email?",
        name: "email",
    }, {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    }, {
        type: "input",
        message: "Please write a brief description of your project",
        name: "description",
    }, {
        type: "list",
        message: "What kind of license should your project have?",
        name: "license",
        choices: ["None", "MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "ISC", ],
    }, {
        type: "input",
        message: "What command is used to install dependencies?",
        name: "install",
    }, {
        type: "input",
        message: "What command is used to test applications?",
        name: "test",
    }, {
        type: "input",
        message: "What does the user need to know about using this application?",
        name: "usage",
    }, {
        type: "input",
        message: "What does the user need to know about contributing to this application?",
        name: "contributing",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inqAnswers) => {
            console.log("Generating README.md....");
            writeToFile("README.md", generateMarkdown({
                ...inqAnswers
            }));
            console.log(inqAnswers)
        })
}

// function call to initialize program
init();