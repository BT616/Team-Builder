
const generateManager = function (manager){
    return`
    <div class="container-fluid mt-3">
            <div class="row justify-content-center">

                <!--manager-->
                <div class="card" style="width: 18rem;">

                    <div class="card-body">
                        <h5 class="card-title">${manager.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
                        <p class="card-text">${manager.id}</p>
                        <p class="card-text">${manager.email}</p>
                        <p class="card-text">${manager.officeNumber}</p>
                        <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a>
                    </div>
                </div>

    `
};

const generateEmployee = function(employee){

    return`
    <!--employee-->
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${employee.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${role}</h6>
            <p class="card-text">${employee.id}</p>
            <p class="card-text">${employee.email}</p>
            <p class="card-text">${office-number}</p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
        </div>
    </div>
    `
};

const generateEngineer = function(engineer){
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
const generateIntern = function(intern){
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