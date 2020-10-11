//Dependencies
const inquirer = require("inquirer");
const mysql = require("mysql");
const cTable = require("console.table");

const connection = mysql.createConnection({
  host: "localhost",

  // Your port
  port: 3306,

  
  user: "root",

  // Your password
  password: "S0ccer!2",
  database: "employeeTracker",
});

connection.connect(function(err) {
  if (err) throw err;

  startScreen();

});

//the prompts
function startScreen() {
  inquirer
    .prompt({
      type: "list",
      choices: [
        "Add department",
        "Add role",
        "Add employee",
        "View departments",
        "View roles",
        "View employees",
        "Update employee role",
        "Quit"
      ],
      message: "What would you like to do?",
      name: "option"
    })
    .then(function(result) {

      switch (result.option) {
        case "Add department":
          addDepartment();
          break;
        case "Add role":
          addRole();
          break;
        case "Add employee":
          addEmployee();
          break;
        case "View departments":
          viewDepartment();
          break;
        case "View roles":
          viewRoles();
          break;
        case "View employees":
          viewEmployees();
          break;
        case "Update employee role":
          updateEmployee();
          break;
        default:
          quit();
      }
    });
}


//functions

function addDepartment() {


    inquirer.prompt({
      
        type: "input",
        message: "What is the name of the department?",
        name: "name"

    }).then(function(answer){



        connection.query("INSERT INTO departments (name) VALUES (?)", [answer.name] , function(err, res) {
            if (err) throw err;
            console.table(res);
            console.log("\n added department \n");
            startScreen()
    })
    })
}


function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the name of the role?",
        name: "title"
      },
      {
        type: "input",
        message: "What is the salary for this role?",
        name: "salary"
      },
      {
        type: "input",
        message: "What is the department id number?",
        name: "department_id"
      }
    ])
    .then(function(answer) {


      connection.query("INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)", [answer.title, answer.salary, answer.department_id], function(err, res) {
        if (err) throw err;
        console.table(res);
        console.log("\n added role \n");
        startScreen();
      });
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What's the first name of the employee?",
        name: "first_name"
      },
      {
        type: "input",
        message: "What's the last name of the employee?",
        name: "last_name"
      },
      {
        type: "input",
        message: "What is the employee's role id number?",
        name: "role_id"
      },
    ])
    .then(function(answer) {

      
      connection.query("INSERT INTO employees (first_name, last_name, role_id) VALUES (?, ?, ?)", [answer.first_name, answer.last_name, answer.role_id], function(err, res) {
        if (err) throw err;
        console.table(answer);
        console.log("\n added employee \n");
        startScreen();
      });
    });
}


function viewDepartment() {
  let query = "SELECT * FROM departments";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startScreen();
  });
}

function viewRoles() {
  let query = "SELECT * FROM roles";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startScreen();
  });
}

function viewEmployees() {
  let query = "SELECT * FROM employees";
  connection.query(query, function(err, res) {
    if (err) throw err;
    console.table(res);
    startScreen();
  });
}

function quit() {
  connection.end();
  process.exit();
}