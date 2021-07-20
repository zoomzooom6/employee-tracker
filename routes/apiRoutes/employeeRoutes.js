const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

//View all employees (/api/employees)
router.get('/', (req, res) => {
    const sql = `SELECT e.id, e.first_name, e.last_name,
                 r.title AS job_title,
                 d.dept_name AS department,
                 r.salary AS salary,
                 m.first_name AS manager
                 FROM employees e
                 LEFT JOIN roles r
                 ON e.role_id = r.id
                 LEFT JOIN department d
                 ON r.department_id = d.id
                 LEFT JOIN employees m
                 ON e.manager_id = m.id`;
    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({ error: err.message });
            return;
        }
        res.json({
            message: 'sucess',
            data: rows
        });
    });
});

//Update employee role (/api/employees/:id)
router.put('/:id', (req, res) => {
    const sql = `UPDATE employees
                 SET role_id = ?
                 WHERE employees.id = ?`
    const params = [req.body.role_id, req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        } else if (!result.affectedRows) {
            res.json({
                message: 'Employee not found'
            });
        } else {
            res.json({
                message: 'sucess',
                data: req.body,
                changes: result.affectedRows
            });
        }
    });
});

//Add an employee (/api/employees)
router.post('/', ({ body }, res) => {
    const errors = inputCheck(body, 'first_name', 'last_name', 'role_id');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
    const params = [body.first_name, body.last_name, body.role_id, body.manager_id];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json({
            message: 'success',
            data: body
        });
    });
});

//Delete employee (/api/employees/:id)
router.delete('/:id', (req, res) => {
    const sql = `DELETE FROM employees WHERE id = ?`;
    const params = [req.params.id];

    db.query(sql, params, (err, result) => {
        if (err) {
            res.statusMessage(400).json({ error: res.message });
        } else if (!result.affectedRows) {
            res.json({
                message: 'Department not found'
            });
        } else {
            res.json({
                message: 'deleted',
                changes: result.affectedRows,
                id: req.params.id
            });
        }
    });
});

module.exports = router;