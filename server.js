const mysql = require("mysql");
const inquirer = require("inquirer");
const database = require('./tracker.js');

const table = require("console.table");
const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "loveisreal",
    database: "employee_db"
});
connection.connect(function (err) {
    if (err) throw err;
    mainMenu();

    function mainMenu() {
        inquirer
            .prompt({
                type: "rawlist",
                name: "action",
                message: "What would you like to do?",
                choices: [
                    "View Departments",
                    "View Employees",
                    "View Roles",
                    "Add Department",
                    "Add Role",
                    "Add Employee",
                    "Update Employees Role",
                
                    "Exit"
                ]
            })
            .then(function (answer) {
                switch (answer.action) {
                    case "View Departments":
                        viewDepartment();
                        break;
                    case "View Employees":
                        viewEmployee();
                        break;
                    case "View Roles":
                        viewRole();
                        break;
                    case "Add Department":
                        addDepartment();
                        break;
                    case "Add Role":
                        addRole();
                        break;
                    case "Add Employee":
                        addEmployee();
                    case "Update Employees Role":
                        updateEmployee();
                        break;
                    case "Delete Department":
                        deleteDepartment();
                        break;
                    case "Delete Role":
                        deleteRole();
                        break;
                    case "Delete Employee":
                        deleteEmployee();
                        break;
                    case "Exit":
                        connection.end()
    
                }
            })
            
    }
   