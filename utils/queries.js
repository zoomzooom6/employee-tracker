const mysql = require('mysql2');

require('dotenv').config();

const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PW,
    database: 'company'
});

async function allEmp() {
    connection.query(
        'SELECT e.id, e.first_name, e.last_name, r.title AS job_title, d.dept_name AS department, r.salary AS salary, m.first_name AS manager FROM employees e LEFT JOIN roles r ON e.role_id = r.id LEFT JOIN department d ON r.department_id = d.id LEFT JOIN employees m ON e.manager_id = m.id',
        function (err, results) {
            if (err) {
                console.log({ error: err.message });
                return;
            }
            console.log('\n\n');
            console.table(results);
        }
    )
};

async function updEmp(roleId, empId) {
    connection.query(
        'UPDATE employees SET role_id = ? WHERE employees.id = ?',
        [roleId, empId],
        function (err, results) {
            if (err) {
                console.log({ error: err.message });
                return;
            }
            console.log('\n\n');
            console.log({
                message: 'success',
                changes: results.affectedRows
            });
        }
    );
}

async function addEmp(newEmp) {
    connection.query(
        'INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [newEmp.first_name, newEmp.last_name, newEmp.roleId, newEmp.managerId],
        function (err, result) {
            if (err) {
                console.log({ error: err.message });
                return;
            }
            console.log('\n\n');
            console.log({
                message: 'success',
                changes: result.affectedRows
            });
        }
    );
}

async function rmEmp(id) {
    connection.query(
        'DELETE FROM employees WHERE id = ?',
        [id],
        function (err, result) {
            if (err) {
                console.log({ error: err.message });
                return;
            } else if (!result.affectedRows) {
                console.log('\n\n');
                console.log({
                    message: 'Employee with matching ID not found.'
                });
            } else {
                console.log('\n\n');
                console.log({
                    message: 'success',
                    changes: result.affectedRows,
                    removed: id
                });
            };
        }
    );
}

async function allRole() {

}

async function addRole() {

}

async function rmRole(id) {

}

async function allDept() {

}

async function addDept() {

}

async function rmDept(id) {

}

module.exports = { allEmp, allRole, allDept, updEmp, addEmp, addRole, addDept, rmEmp, rmRole, rmDept };