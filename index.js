
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./generateHTML");

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Engineer");
const Intern = require("./lib/Intern");


const questions = [{ 
    
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
    name: "id",
    message: "what is your managers ID?"
},
{
    type: "input",
    name: "office",
    message: "what is your managers office number?"
},

//engineer
{
    type: "input",
    name: "engineer",
    message: "whats the name of your other engineer?",
    
},
{
    type: "input",
    name: "github",
    message: "whats thier github username?",
   
},

// not sure anymore but employee
{
    type: "input",
    name: "employee",
    message: "whats the name of your employee?",
    
},
{
    type: "input",
    name: "employee-github",
    message: "whats thier github username?",
    
},
{
    type: "input",
    name: "employee-email",
    message: "whats thier email??",
    
},
{
    type: "input",
    name: "employee-id",
    message: "whats thier ID number?",
   
},

]
//intern 
const generateIntern = [
{
    type: "input",
    name: "intern",
    message: "whats the name of your intern?",
   
},
{
    type: "input",
    name: "intern-id",
    message: "whats thier ID number?",
   
},
{
    type: "input",
    name: "school",
    message: "Where did they go to school?",
   
},
]




function writeToFile(data){
    const filename = "generate.html";

fs.writeFile(filename, data, err => {
  if (err) {
    console.error(err);
  }
})};   


 function init(){
    inquirer.prompt(questions)
        .then((answers) => writeToFile(generateHTML(answers)))
    }

    init();
 

