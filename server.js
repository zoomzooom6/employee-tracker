const getUsers = require('./models/queries');
const inquirer = require('inquirer');

console.log(`
==========================================================
        WELCOME TO THE EMPLOYEE MANAGEMENT SYSTEM
==========================================================`);
console.log('Printing first query.....');

const userPrompts = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Create a Department', 'Create a Role', 'Add an Employee', 'Update Employee Role', 'Exit']
        },
        {
            type: 'number',
            name: 'id',
            message: 'What is the Employee ID number?'
        }
    ])
        .then(answers => {
            console.log(answers);
            getUsers(answers.id);
            if(answers.choice !== 'Exit') {
                return userPrompts();
            }
        })
};


userPrompts();