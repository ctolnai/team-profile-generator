const fs = require('fs');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = [
    {
        type: 'input',
        message: 'Enter the name of the Employee:',
        name: name,
    },

    {
        type: 'input',
        message: 'Enter the ID number of the Employee',
        name: id,
    },

    {
        type: 'input',
        message: 'Enter the email of the Employee',
        name: email,
    },
];

function initialize() {
    inquirer
        .prompt(questions)
        .then((response) => {let log = "teamprofile.html";
        
         fs.writeFile(log, (response), (err) =>
         err ? console.log(err) : console.log('success')
         );

});
}

initialize()

const response = new Employee(this.name, this.id, this.email)

module.exports = initialize;