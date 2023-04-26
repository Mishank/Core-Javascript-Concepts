var Employee = function (id, name) {
  if (!id || !name) {
    throw new Error("Employee id and name are mandatory");
  }
  this.id = id;
  this.name = name;

  Employee.prototype.setSalary = function () {
    this.salary = salary;
  };
  Employee.prototype.gitId = function () {
    return this.id;
  };
  Employee.prototype.getName = function () {
    return this.name;
  };
  Employee.prototype.getSalar = function () {
    return this.salary;
  };

  var Manager = function (params) {
    Employee.apply(this, arguments);
  };
};
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.construcrtor = Manager;
