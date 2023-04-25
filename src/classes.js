class Employee {
  constructor(id, name) {
    if (!id || !name) {
      throw new Error("Employee id and name are mandatory");
    }
    this.id = id;
    this.name = name;
  }
  setSalary(salary) {
    this.salary = salary;
  }
  gitId() {
    return this.id;
  }
  getName() {
    return this.name;
  }
  getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  setDepartment(name) {
    this.department = name;
  }

  getDepartment() {
    return this.department;
  }
}

const employee = new Employee(1, "Jack");
employee.setSalary(1000);
const manager = new Manager(2, "johfs");
