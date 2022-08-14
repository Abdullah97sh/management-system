// constructor should be start capital

function Employee(empID, fName, department, level, image) {
  this.EmployeeID = empID;
  this.FullName = fName;
  this.Department = department;
  this.Level = level;
  this.ImageURL = image;
  this.Salary = calcSalary(level);

  function calcSalary(level) {
    switch (level) {
      case "Junior":
        return Math.round(Math.random() * (2000 - 1500) + 1500);
        break;

      case "Mid-Senior":
        return Math.round(Math.random() * (1500 - 1000) + 1000);
        break;

      case "Senior":
        return Math.round(Math.random() * (1000 - 500) + 500);
        break;
    }
  }

  this.printEmp = function () {
    // use ` `  and  $ {} to print variables
    return `Employee Name: ${this.FullName} - salary: ${this.Salary}`;
  };
}

let emp1 = new Employee(
  1000,
  "Ghazi Samer",
  "Administration",
  "Senior",
  "https://picsum.photos/200/300"
);
console.log(emp1.printEmp());

let emp2 = new Employee(
  1001,
  "Lana Ali",
  "Finance",
  "Senior",
  "https://picsum.photos/200/300"
);
console.log(emp2.printEmp());

let emp3 = new Employee(
  1002,
  "Tamara Ayoub",
  "Marketing",
  "Senior",
  "https://picsum.photos/200/300"
);
console.log(emp3.printEmp());

let emp4 = new Employee(
  1003,
  "Safi Walid",
  "Administration",
  "Mid-Senior",
  "https://picsum.photos/200/300"
);
console.log(emp4.printEmp());

let emp5 = new Employee(
  1004,
  "Omar Zaid",
  "Development",
  "Senior",
  "https://picsum.photos/200/300"
);
console.log(emp5.printEmp());

let emp6 = new Employee(
  1005,
  "LRana Saleh",
  "Development",
  "Junior",
  "https://picsum.photos/200/300"
);
console.log(emp6.printEmp());

let emp7 = new Employee(
  1006,
  "Hadi Ahmad",
  "Finance",
  "Mid-Senior",
  "https://picsum.photos/200/300"
);
console.log(emp7.printEmp());
