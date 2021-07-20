INSERT INTO department (dept_name) 
VALUES
    ('White House'),
    ('Parliament'),
    ('Congress'),
    ('House of Commons'),
    ('Janitorial'),
    ('Senate'),
    ('Commoner');

INSERT INTO roles(title, salary, department_id)
VALUES
    ('Prime Minister', 400000, 2),
    ('Clown', 50000, 1),
    ('Delivery Boy', 25000, 3),
    ('Janitor', 75000, 4),
    ('Singer', 30000, 6),
    ('Dancer', 20000, 5),
    ('Laughing Stock', 5, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Justin', 'Trudeau', 2, null),
    ('Stephen', 'Harper', 4, 1),
    ('Paul', 'Martin', 5, 2),
    ('Jean', 'Chretian', 7, 1),
    ('Kim', 'Campbell', 3, 2),
    ('Brian', 'Mulroney', 4, 1),
    ('John', 'Turner', 1, 2),
    ('Pierre', 'Trudeau', 2, 5),
    ('Joe', 'Clark', 4, 7),
    ('Lester', 'Pearson', 4, null),
    ('John', 'Diefenbaker', 5, null);