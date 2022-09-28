

const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require("./generateHTML");


const team = [];

const addManager = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
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
            name: "officeNumber",
            message: "what is your managers office number?"
        },
    ])

        .then(userInput => {
            const { name, id, email, officeNumber } = userInput;
            const manager = new Manager(name, id, email, officeNumber);

            team.push(manager);

        })
}

const employee =() => {
return inquirer.prompt 
[   {
        type: "list",
        name:'role',
        choice: ["engineer,intern"],
    }, 
     {
        type: "input",
        name: "employee",
        message: "whats the name of your employee?",

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
    //engineer
    {
        type: "input",
        name: "github",
        message: "whats thier github username?",
        when(answers) {answers.role === "engineer"},


    },

    //intern
    {
        type: 'input',
        name: 'school',
        message: 'what school did they go to',
        when(answers){answers.role==="intern"},
    },
    {
        type:'confirm',
        name:'confirmEmployee',
        message:'add more teammates?',
        dafault:false

    }
    

]}

.then(employeeData => {
    .then(userInput => {
        const { name, id, email, role, school, github, confirmEmployee} = employeeData;
        let employee;

        team.push();


})




function writeToFile(data) {
    const filename = "generate.html";

    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(err);
        }
    })
};

