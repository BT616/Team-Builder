
const inquirer = require('inquirer');
const fs = require('fs');

const generateHTML = require(answers);

    `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css">
    <title>Team Builder Document</title>
</head>


<body>
    <header>
        <div class="p-5 bg-danger text-center ">
            <h1 class="mb-3 ">My Team</h1>
        </div>
    </header>

`


generate manager= getRole(manager){
    return `
    <main>

        <div class="container-fluid mt-3">
            <div class="row justify-content-center">

                <!--manager-->
                <div class="card" style="width: 18rem;">

                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <h6 class="card-subtitle mb-2 text-muted">${manager}</h6>
                        <p class="card-text">${id}</p>
                        <p class="card-text">${email}</p>
                        <p class="card-text">${office-number}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>

                `
};
generate employee = getRole(manager){
`
                <!--employee-->
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employeename}</h5>
                        <h6 class="card-subtitle mb-2 text-muted"></h6>
                        <p class="card-text">${id}</p>
                        <p class="card-text">${email}</p>
                        <p class="card-text">${office - number}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
`
};

                <!--engineer-->
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${engineername}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                        <p class="card-text">${id}</p>
                        <p class="card-text">${email}</p>
                        <p class="card-text">${github}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>


            </div>
        </div>


        <div class="container-fluid mt-3">
            <div class="row justify-content-center">

                <!-- enginerr2-->

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${engineername2}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                        <p class="card-text">${id}</p>
                        <p class="card-text">${email}</p>
                        <p class="card-text">${github}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>


                <!--intern-->

                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${internname}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                        <p class="card-text">${id}</p>
                        <p class="card-text">${email}</p>
                        <p class="card-text">${school}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>
            </div>

        </div>
        </div>
        </div>
</body>

</html>
</main>

</html>
<script src= " https://code.jquery.com/jquery-3.6.1.min.js"</script>
`
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

