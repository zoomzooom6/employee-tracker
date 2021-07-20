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
5. Type "node server" to initialize program

## Final Result
Main CLI page
<img src='' alt=''/>

Table of departments
<img src='' alt=''/>

Table of roles
<img src='' alt=''/>

Live video link
<a href=''>Click here</a>