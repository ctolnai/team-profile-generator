const Employee = require("./Employee");

class Intern extends Employee {
    constructor(school) {
        super(name, id, email);
        this.role = role;
    }
    getRole() {
        if (this.role !== "Employee") {
            return "Intern";
        }
    }
    getSchool() {

    }

}


module.exports = Intern;