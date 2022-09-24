
const inquirer =require('inquirer');
const fs=require('fs');





const generateHTML = ({})

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



    <main>

        <div class="container-fluid mt-3">
            <div class="row justify-content-center">

                <!--manager-->
                <div class="card" style="width: 18rem;">

                    <div class="card-body">
                        <h5 class="card-title">${managername}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                        <p class="card-text">${id}</p>
                        <p class="card-text">${email}</p>
                        <p class="card-text">${office-number}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>



                <!--employee-->
                <div class="card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">${employeename}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                        <p class="card-text">${id}</p>
                        <p class="card-text">${email}</p>
                        <p class="card-text">${office-number}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>



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
`