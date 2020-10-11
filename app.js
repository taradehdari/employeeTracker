const mysql = require('mysql');
const inquirer = require('inquirer');

async function questions() {
  const starter = await inquirer.prompt([
    {
      type: 'list',
      message: "Choose what you'd like to do?",
      name: 'choices',
      choices: [
        'View all Employees',
        'View all Departments',
        'View all Roles',
        'Add Employee',
        'Add Roles',
        'Add Department',
        'Exit'
      ]
    }
  ])
}

switch (starter.choices){
  case 'View all Employees':
  await employeeChoice ();
  break;
  
  case 'View all Departments':
  await departmentChoice ();
  break; 

  case 'View all Roles':
  await rolesChoice ();
  break; 
   
  case 'Add Roles':
  await addRoles ();
  break; 
   
  case 'Add Department':
  await addDepartment ();
  break; 
   
  case 'Exit':
  connection.end ();
  break; 

}

questions ();
module.exports = questions;