const generateTemplate = ({response}) => {
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
    ;    

};

module.exports = {
    generateTemplate
}

