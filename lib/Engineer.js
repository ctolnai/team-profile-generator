const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id , email, github) {
        super(name, id, email);
        this.role = 'Engineer';
        this.github = github;
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