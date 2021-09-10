const initialize = require('./index');


function generateHTML(response){
    return `# ${response.name}`
}

module.exports = generateHTML;