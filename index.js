const inquirer = require ("inquirer");
const fs = require("fs");
const {generateTemplate} = require("./htmlTemplate");
//const { setUncaughtExceptionCaptureCallback } = require("process");
​
const askQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What is your name?',
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
    ]);
};

//const init = async() => {
    //const answers = await askQuestions();
    //const generateTemplate = generateTemplate(answers);

    //fs.writeFile("htmlTemplate.html", generateTemplate.trim(), (error) => {
        //console.log('successfully wrote file');
    //});
//}

//init();

askQuestions()
    .then((answers) =>writeFileAsync('index.html', generateTemplate(answers)))
    .then(() => console.log('Success!'))
    .then((err) => console.log(err));
