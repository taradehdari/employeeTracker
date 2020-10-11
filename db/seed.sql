USE employeeDB;

INSERT INTO department (name)
VALUES 
('HR'),  
('sales'), 
('Engineering'), 
('Finance'), 
('Legal'); 

INSERT INTO role (title, salary, department_id)
VALUES 
('Lawyer', 100000, 1),
('Security', 100000, 1), 
('Sales Lead', 100000, 2), 
('Salesperson', 80000, 2), 
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 3), 
('Civil Engineer', 150000, 3), 
('Accountant', 125000, 4), 


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John','Doe', 1, null), 
('Mike','Chan', 2, 1), 
('Ashley','Rodriguez', 5, NULL), 
('Kevin','Tupik', 6, 3), 
('Malia','Brown', 7, 3), 
('Sarah','Lourd', 9, NULL), 
('Tom','Allen', 10, 6),
('Christian','Eckenrode', 8, NULL);