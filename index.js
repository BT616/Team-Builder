

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./generateHTML");


const team =[];

const manager = [
    {
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
]




const github = [

//engineer
{
    type: "input",
    name: "github",
    message: "whats thier github username?",
   
},

]


const questions = [
{
    type: "input",
    name: "employee",
    message: "whats the name of your employee?",
    
},
{
    type: "input",
    name: "github",
    message: "whats thier github username?",
    
},
{
    type: "input",
    name: "email",
    message: "whats thier email??",
    
},
{
    type: "input",
    name: "id",
    message: "whats thier ID number?",
   
},
]





function writeToFile(data){
    const filename = "generate.html";

fs.writeFile(filename, data, (err) => {
  if (err) {
    console.error(err);
  }
})};   


 function init(){
    inquirer.prompt(questions,Engineer)
        .then((answers) => writeToFile(generateHTML(answers)))
    }

    init();
 

