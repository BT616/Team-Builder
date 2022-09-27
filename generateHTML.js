
function manager(data) { 

    return`

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
    <main>

         <div class="container-fluid mt-3">
            <div class="row justify-content-center">
                    ${team}
              

            

        </div>
        </div>
        </div>
</body>

</html>
</main>

</html>
`
};
 


// <div class="container-fluid mt-3">
//             <div class="row justify-content-center">

//                 <!--manager-->
//                 <div class="card" style="width: 18rem;">

//                     <div class="card-body">
//                         <h5 class="card-title">${data.name}</h5>
//                         <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
//                         <p class="card-text">${data.id}</p>
//                         <p class="card-text">${data.email}</p>
//                         <p class="card-text">${data.office}</p>
//                         <a href="#" class="card-link">Card link</a>
//                         <a href="#" class="card-link">Another link</a>
//                     </div>
//                 </div>

















function employee(data){

    return`
    <!--employee-->
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">emloyee</h6>
            <p class="card-text">${employee.id}</p>
            <p class="card-text">${employee.email}</p>
            <p class="card-text">${office-number}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `
};

const generateEngineer = function(data){
   return`
    <!--engineer-->
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
            <p class="card-text">${enineer.id}</p>
            <p class="card-text">${engineer.email}</p>
            <p class="card-text">${engineer.github}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>


</div>
</div>
`
};
const generateIntern = function(data){
    return`
    <div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
        <p class="card-text">${intern.id}</p>
        <p class="card-text">${intern.email}</p>
        <p class="card-text">${intern.school}</p>
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
    </div>
</div>
</div>`
};





module.exports = generateHTML;