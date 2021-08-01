const db = require('../db/connection');
const cTable = require('console.table');

const getAllEmp = () => {
    db.query(
        'SELECT e.id, e.first_name, e.last_name, r.title AS job_title, d.dept_name AS department, r.salary AS salary, m.first_name AS manager FROM employees e LEFT JOIN roles r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id', 
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log(`
            
            
            
            
            `)
            console.table(result);
            console.log(`
            
            `)
            return result;
        }
    )
};

const getAllRole = () => {
    db.query(
        'SELECT r.title AS job_title, r.id AS role_id, d.dept_name AS department, r.salary FROM roles r LEFT JOIN department d ON r.department_id = d.id', 
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log(`
            
            
            
            
            `)
            console.table(result);
            console.log(`
            
            `)
            return result;
        }
    )
};

const getAllDept = () => {
    db.query(
        'SELECT d.id AS department_id, d.dept_name AS department FROM department d', 
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            console.log(`
            
            
            
            
            `)
            console.table(result);
            console.log(`
            
            `)
            return result;
        }
    )
};

const mkDept = (dept_name) => {
    db.query(
        'INSERT INTO department (dept_name) VALUES (?)',
        [dept_name],
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            return result.affectedRows;
        }
    )
};

const mkRole = (title, salary, dept_num) => {
    db.query(
        'INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)',
        [title, salary, dept_num],
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            return result.affectedRows;
        }
    )
};

const addEmp = (first, last, role, manager) => {
    db.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [first, last, role, manager],
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            return result.affectedRows;
        }
    )
};

const updEmp = (name, role) => {
    db.query(
        'UPDATE employees SET role_id = ? WHERE id = ?',
        [role, name],
        function(err, result) {
            if(err) {
                console.log(err.message);
                return;
            }
            return result.message;
        }
    )
};

module.exports = { getAllEmp, getAllRole, getAllDept, mkDept, mkRole, addEmp, updEmp };