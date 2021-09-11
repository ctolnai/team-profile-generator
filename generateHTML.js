const initialize = require('./index');

let template = `html ${generateHTML}`

const fred = []
function generateHTML(response) {


    for (let i = 0; i < response.length; i++) {
        switch (response[i].role) {
            case "Manager":
                fred.push(`<div class="card" style="width: 18rem;">
               <div class="card-header text-white bg-primary">
               <p>${response[i].name}</p>
               <p>${response[i].role}</p>
               </div>
               <ul class="list-group list-group-flush">
                 <li class="list-group-item">${response[i].id}</li>
                 <li class="list-group-item">${response[i].email}</li>
                 <li class="list-group-item">${response[i].officeNumber}</li>
               </ul>
             </div>`)

                break;
            case "Engineer":
                fred.push(`<div class="card" style="width: 18rem;">
                       <div class="card-header text-white bg-primary">
                       <p>${response[i].name}</p>
                       <p>${response[i].role}</p>
                       </div>
                       <ul class="list-group list-group-flush">
                         <li class="list-group-item">${response[i].id}</li>
                         <li class="list-group-item">${response[i].email}</li>
                         <li class="list-group-item">${response[i].github}</li>
                       </ul>
                     </div>`)
                break;
            case "Intern":
                fred.push(`<div class="card" style="width: 18rem;">
                        <div class="card-header text-white bg-primary">
                        <p>${response[i].name}</p>
                        <p>${response[i].role}</p>
                        </div>
                        <ul class="list-group list-group-flush">
                          <li class="list-group-item">${response[i].id}</li>
                          <li class="list-group-item">${response[i].email}</li>
                          <li class="list-group-item">${response[i].school}</li>
                        </ul>
                      </div>`)
            default:
                break;
        }



    }

    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
        <title>My Team</title>
    </head>
    
    
    <body>
    <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
            <span class="navbar-brand mb-0 h1 mx-auto "style="font-size: 3rem;">My Team</span>
        </div>
    </nav>
    <div class="cards d-flex justify-content-center">
    ${fred.join("")}


    </div>
        <script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js"
    integrity = "sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ"
    crossorigin = "anonymous" ></script >
</body >

</html > `


}

module.exports = generateHTML;

