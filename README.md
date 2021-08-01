# Employee Tracker  
The goal of this challenge is to create a CLI application where an employer can view employee databases and update/create employees, roles and departments to be added to the company.

## Table of Contents
* [Criteria](#criteria)
* [Tools Used](#tools-used)
* [Contributions](#contributions)
* [How to Run](#how-to-run)
* [Final Results](#final-result)

## Criteria
* Command Line Interface (CLI) application that accepts user input
* Upon start, presented with following options
    * View all departments
    * View all roles
    * View all employees
    * Create a department
    * Create a role
    * Add an employee
    * Update employee role
* View all departments option presents formatted table showing
    * Department name
    * Department ID
* View all roles option presents formatted table showing
    * Job title
    * Role ID
    * Department that role belongs to
    * Salary for that role
* View all employees option presents formatted table showing
    * Employee IDs
    * First names
    * Last names
    * Job titles
    * Departments
    * Salaries
    * Manager that employees report to
* Create a department option prompts for
    * Name of department
* Create a role option prompts for
    * Name of role
    * Salary
    * Department for role
* Add an employee option prompts for
    * First name
    * Last name
    * Role
    * Manager
* Update employee role prompts for
    * Select an employee
    * New role

### Tools Used
* Node.js
* Inquirer
* MySQL

## Contributions
Designed and written by Tony Huang.

## How to run
1. Download entire package from repository
2. Open CLI at downloaded file directory
3. Type "npm init --y" to initialize Node.js
4. Type "npm install" to install all necessary packages
5. Enter 'mysql' CLI using own credentials
6. Type "source db/db.sql" to initialize database
7. Type "source db/schema.sql" to initialize tables
7. Type "source db/seeds.sql" to input pre-populated values
8. Quit out of mysql instance
9. Create a .env file containing the following variables
    * DB_NAME: 'company'
    * DB_USER: 'enter-user-account-to-access-mysql'
    * DB_PW: 'enter-password-to-log-into-mysql'
10. Type "npm start" to initialize program

## Final Result
Main CLI page
<img src='/public/images/MainCLIPage.png' alt='Main CLI Interface'/>

Table of departments
<img src='/public/images/Departments.png' alt='Department Table'/>

Table of roles
<img src='/public/images/Roles.png' alt='Roles Table'/>

Table of employees
<img src='/public/images/Employees.png' alt='Employees Table'/>

Live video link
<a href='https://youtu.be/_f5AW71pI7w'>Click here</a>