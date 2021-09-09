const initialize = require('./index')

function generateHTML(response){
    return `<p>${this.role}<p>`
}

module.exports = generateHTML;