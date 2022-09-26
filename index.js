
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require(answers);


(async function (){ 
const questions = await [{
    
    type: "input",
    name: "manager",
    message: "whats the name of your manager?",
},
{
    type: "input",
    name: "email",
    message: "what is your managers email?"
},
{
    type: "input",
    name: "manager-id",
    message: "what is your managers ID?"
},
{
    type: "input",
    name: "office",
    message: "what is your managers office number?"
},
{
    type: "list",
    name: "menu",
    message: "Do you have other employee info you want to enter??",
    choices: ["yes/no"]
},
{
    type: "list",
    name: "menu",
    message: "who?",
    choices: ["employee,engineer,intern"],
    when(answers) {
        return answers.menu === "yes"
    }
},
{
    type: "input",
    name: "engineer",
    message: "whats the name of your other engineer?",
    when(answers) {
        return answers.menu === "engineer"
    }
},
{
    type: "input",
    name: "engineer-github",
    message: "whats thier github username?",
    when(answers) {
        return answers.menu === "engineer"
    }
},
{
    type: "input",
    name: "engineer-email",
    message: "whats thier email??",
    when(answers) {
        return answers.menu === "engineer"
    }
},
{
    type: "input",
    name: "engineer-id",
    message: "whats thier ID number?",
    when(answers) {
        return answers.menu === "engineer"
    }
},

// this this will run after, if you selected engineer
{
    type: "list",
    name: "menu",
    message: "who?",
    choices: ["employee,intern"],
    

},
// not sure anymore but employee
{
    type: "input",
    name: "employee",
    message: "whats the name of your employee?",
    when(answers) {
        return answers.menu === "employee"
    }
},
{
    type: "input",
    name: "employee-github",
    message: "whats thier github username?",
    when(answers) {
        return answers.menu === "employee"
    }
},
{
    type: "input",
    name: "employee-email",
    message: "whats thier email??",
    when(answers) {
        return answers.menu === "employee"
    }
},
{
    type: "input",
    name: "employee-id",
    message: "whats thier ID number?",
    when(answers) {
        return answers.menu === "employee"
    }
},
{
    type: "list",
    name: "menu",
    message: "who?",
    choices: ["engineer,intern"],
    

},

//intern 
{
    type: "input",
    name: "intern",
    message: "whats the name of your intern?",
    when(answers) {
        return answers.menu === "intern"
    }
},
{
    type: "input",
    name: "intern-email",
    message: "whats thier email??",
    when(answers) {
        return answers.menu === "intern"
    }
},
{
    type: "input",
    name: "intern-id",
    message: "whats thier ID number?",
    when(answers) {
        return answers.menu === "intern"
    }
},
{
    type: "input",
    name: "intern-school",
    message: "where did they go to school?",
    when(answers) {
        return answers.menu === "intern"
    }
},
{
    type: "input",
    name: "employee-2",
    message: "where did they go to school?",
    when(answers) {
        return answers.menu === "intern"
    }
},
{
    type: "list",
    name: "menu",
    message: "who?",
    choices: ["employee,engineer"],
    

},
]

