const inquirer = require ("inquirer");
const fs = require("fs");
//const { setUncaughtExceptionCaptureCallback } = require("process");
​
inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name? ',
        name: 'name',
    },
    {
        type: 'input',
        message: 'What is your location?',
        name: 'location'
    },
    {
        type: 'input',
        message: 'Please type a short Bio.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What is your LinkedIn URL? ',
        name: 'linkedIn'
    },
    {
        type: 'input',
        message: 'Please enter your Github URL.',
        name: 'gitHub',
    }
])
.then((response) => {
    console.log(response);
    fs.appendFile(`index.html`, writeIndex(response), (err) =>
    err ? console.error.apply(err) : console.log("html file created")
    );
});
    
const writeIndex = (response) => {
    console.log(response);
    return (
    `<!DOCTYPE html>
<html lang="en">
​
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mini Project</title>
    <!-- Bootstrap CDN -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
</head>
​
<body>
    <div class="container bg-light">
        <h1 class="text-center">Mini-Project</h1>
        <h3>Name: ${response.name}</h3>
        <h3>Location: ${response.location}</h3>
        <h3>Bio: ${response.bio}</h3>
        <p></p>
        <a href="#">LinklelinURL: ${response.linkedIn}</a><br>
        <a href="#">Git Hub: https://github.com/${response.gitHub}</a>
    </div>
</body>
​
</html>`
    )
}
