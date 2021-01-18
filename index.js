const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'username'
        },
        {
            type: 'input',
            message: 'What is your location?',
            name: 'location',
        },
        {
            type: 'input',
            message: 'Please type a short Bio.',
            name: 'bio',
        },
        {
            type: 'input',
            message: 'Please enter your LinkedIn URL.',
            name: 'linkedIn',
        },
        {
            type: 'input',
            message: 'Please enter your Github URL.',
            name: 'gitHub',
        }
    ])
    .then((response) =>
        console.log(response)
    );