USE employeeTracker;

INSERT INTO departments (name)
VALUES 
('HR'),  
('sales'), 
('Engineering'), 
('Finance'), 
('Legal'); 

INSERT INTO roles (title, salary, department_id)
VALUES 
('Lawyer', 100000, 1),
('Security', 100000, 1), 
('Sales Lead', 100000, 2), 
('Salesperson', 80000, 2), 
('Lead Engineer', 150000, 3),
('Software Engineer', 120000, 3), 
('Civil Engineer', 150000, 3), 
('Accountant', 125000, 4);


INSERT INTO employees (first_name, last_name, role_id)
VALUES
('John','Doe', 1), 
('Mike','Chan', 2), 
('Ashley','Rodriguez', 5), 
('Kevin','Tupik', 6), 
('Malia','Brown', 7), 
('Sarah','Lourd', 9), 
('Tom','Allen', 10),
('Christian','Eckenrode', 8);