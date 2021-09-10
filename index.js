const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./generateHTML');

const managerQuestions = [
    {
        type: 'input',
        message: 'Enter the name of the Manager:',
        name: 'name',
    },

    {
        type: 'input',
        message: 'Enter the ID number of the Manager:',
        name: 'id',
    },

    {
        type: 'input',
        message: 'Enter the email of the Manage:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter the office number of the Manager:',
        name: 'officeNumber',
    },
    {
        type: 'confirm',
        message: 'Do you want to add an Engineer or Intern?',
        name: 'another',
        default: false,

    },
]

function initialize() {
    inquirer
        .prompt(managerQuestions)
        .then((response) => {
            let log = `MYTEAM.md`;
            if (response.another == true) { anotherEmployee() }
            else(
            fs.writeFile(log, generateHTML(response), (err) =>
                err ? console.log(err) : console.log('Thank you for creating your team.')
            ));
        })
};

const questions = [
    {
        type: 'list',
        message: 'What type of Employee would you like to add?',
        name: 'role',
        choices: ['Engineer', 'Intern']
    },
];

function anotherEmployee() {
    inquirer
        .prompt(questions)
        .then(response => {
            if (response.role == 'Manager') { createManager() }
            else if (response.role == 'Engineer') { createEngineer() }
            else { createIntern() }
        });
};

function createEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((response) => {
            let log = `MYTEAM.md`;
            if (response.another == true) { anotherEmployee() }
            else(
            fs.writeFile(log, generateHTML(response), (err) =>
                err ? console.log(err) : console.log('Thank you for creating your team.')
            ));
        })
};

const engineerQuestions = [
    {
        type: 'input',
        message: 'Enter the name of the Engineer:',
        name: 'name',
    },

    {
        type: 'input',
        message: 'Enter the ID number of the Engineer:',
        name: 'id',
    },

    {
        type: 'input',
        message: 'Enter the email of the Engineer:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter the github username of the Engineer:',
        name: 'github',
    },
    {
        type: 'confirm',
        message: 'Do you want to add another Engineer or Intern?',
        name: 'another',
        default: false,

    },
]


function createIntern() {
    inquirer
        .prompt(internQuestions)
        .then((response) => {
            let log = `MYTEAM.md`;
            if (response.another == true) { anotherEmployee() }
            else(
            fs.writeFile(log, generateHTML(response), (err) =>
                err ? console.log(err) : console.log('Thank you for creating your team.')
            ));
        })
};

const internQuestions = [

    {
        type: 'input',
        message: 'Enter the name of the Intern:',
        name: 'name',
    },

    {
        type: 'input',
        message: 'Enter the ID number of the Intern:',
        name: 'id',
    },

    {
        type: 'input',
        message: 'Enter the email of the Intern:',
        name: 'email',
    },
    {
        type: 'input',
        message: 'Enter the school that the Intern goes to:',
        name: 'github',
    },
    {
        type: 'confirm',
        message: 'Do you want to add another Engineer or Intern?',
        name: 'another',
        default: false,

    },
]


initialize()

module.exports = initialize;