const initialize = require('..index')
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(github) {
        super(name, id, email);
        this.role = role;
    }
    getRole() {
        if (this.role !== "Employee") {
            return "Engineer";
        }
        
    }
    getGithub(){

    }

}

module.exports = Engineer;