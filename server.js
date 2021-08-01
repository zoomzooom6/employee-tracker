const queries = require('./models/queries');
const inquirer = require('inquirer');

console.log(`
==========================================================
        WELCOME TO THE EMPLOYEE MANAGEMENT SYSTEM
==========================================================`);
console.log('Printing first query.....');

const empPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What is the Employee's first name?"
        },
        {
            type: 'input',
            name: 'last_name',
            message: "What is the Employee's last name?"
        },
        {
            type: "number",
            name: 'role_id',
            message: 'What is their role?'
        },
        {
            type: 'number',
            name: 'manager_id',
            message: "Who does this employee report to?"
        }
    ]).then(answer => {
        //console.log(answer);
        return queries.addEmp(answer.first_name, answer.last_name, answer.role_id, answer.manager_id);
    }).catch(err => {
        if(err) {
            console.log(err);
            return;
        }
    })
};

const rolePrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the role title?'
        },
        {
            type: 'number',
            name: 'salary',
            message: 'What is the annual salary of this role?'
        },
        {
            type: 'input',
            name: 'dept_num',
            message: 'What department is this role in?'
        }
    ]).then(answer => {
        //console.log(answer);
        return queries.mkRole(answer.title, answer.salary, answer.dept_num);
    }).catch(err => {
        if(err) {
            console.log(err);
            return;
        }
    })
};

const deptPrompt = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'dept',
            message: 'What is the name of the new department?'
        }
    ]).then(answer => {
        //console.log(answer);
        return queries.mkDept(answer.dept);
    }).catch(err => {
        if(err) {
            console.log(err);
            return;
        }
    })
};

const updPrompt = () => {
    inquirer.prompt([
        {
            type: 'number',
            name: 'emp_num',
            message: 'What is the ID number of the employee?'
        },
        {
            type: 'number',
            name: 'new_role',
            message: 'What is their new role id number?'
        }
    ]).then(answer => {
        //console.log(answer);
        return queries.updEmp(answer.emp_num, answer.new_role);
    }).catch(err => {
        if(err) {
            console.log(err);
            return;
        }
    })
};

async function userPrompts() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choice',
            message: 'What do you want to do?',
            choices: ['View All Employees', 'View All Roles', 'View All Departments', 'Create a Department', 'Create a Role', 'Add an Employee', 'Update Employee Role', 'Exit']
        }
    ])
        .then( (answer) => {
            //console.log(answer);
            // if(answer.choice === 'View All Employees') {
            //     console.log(queries.getAllEmp());
            // }
            // if(answer.choice === 'View All Roles') {
            //     console.log(queries.getAllRole());
            // }
            // if(answer.choice === 'View All Departments') {
            //     console.log(queries.getAllDept());
            // }
            // if(answer.choice === 'Create a Department') {
            //     deptPrompt();
            //     return;
            // }
            // if(answer.choice === 'Create a Role') {
            //     rolePrompt();
            //     return;
            // }
            // if(answer.choice === 'Add an Employee') {
            //     empPrompt();
            //     return;
            // }
            // if(answer.choice === 'Update Employee Role') {
            //     updPrompt();
            //     return userPrompts();
            // }
            // if(answer.choice !== 'Exit') {
            //     return userPrompts();
            // }
            switch(answer.choice) {
                case 'View All Employees':
                    console.log(queries.getAllEmp());
                    break;
                case 'View All Roles':
                    console.log(queries.getAllRole());
                    break;
                case 'View All Departments':
                    console.log(queries.getAllDept());
                    break;
                case 'Create a Department':
                    deptPrompt();
                    break;
                case 'Create a Role':
                    rolePrompt();
                    break;
                case 'Add an Employee':
                    empPrompt();
                    break;
                case 'Update Employee Role':
                    updPrompt();
                    break;
            }
            if(answer.choice !== 'Exit') {
                return userPrompts();
            }
        })
};


userPrompts();