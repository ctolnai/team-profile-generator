const initialize = require('..index')
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(officeNumber) {
        super(name, id, email);
        this.role = role;
    }
    getRole() {
        if (this.role !== "Employee") {
            return "Manager";
        }
        
    }
}

module.exports = Manager;