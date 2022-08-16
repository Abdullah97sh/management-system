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

// create array for all employee
let empArr = [
  new Employee(
    1000,
    "Ghazi Samer",
    "Administration",
    "Senior",
    "https://picsum.photos/200/300"
  ),
  new Employee(
    1001,
    "Lana Ali",
    "Finance",
    "Senior",
    "https://picsum.photos/200/300"
  ),
  new Employee(
    1002,
    "Tamara Ayoub",
    "Marketing",
    "Senior",
    "https://picsum.photos/200/300"
  ),
  new Employee(
    1003,
    "Safi Walid",
    "Administration",
    "Mid-Senior",
    "https://picsum.photos/200/300"
  ),
  new Employee(
    1004,
    "Omar Zaid",
    "Development",
    "Senior",
    "https://picsum.photos/200/300"
  ),
  new Employee(
    1005,
    "LRana Saleh",
    "Development",
    "Junior",
    "https://picsum.photos/200/300"
  ),
  new Employee(
    1006,
    "Hadi Ahmad",
    "Finance",
    "Mid-Senior",
    "https://picsum.photos/200/300"
  ),
];

// for loop to show names & salary on the console
for (let i = 0; i < empArr.length; i++) {
  console.log(empArr[i].printEmp());
}

/*
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
*/

// other way to git result

/*
function empInfo() {
  const empArr = [emp1, emp2, emp3, emp4, emp5, emp6, emp7];

  for (let index = 0; index < empArr.length; index++) {
    console.log(
      "Second way to git result: " +
        empArr[index].FullName +
        " - " +
        empArr[index].Salary
    );
  }
}

empInfo();
*/

// Second Task, create table using JS

let main = document.getElementById("mainId");

let mainT = document.createElement("table");
main.appendChild(mainT);

let tHead = document.createElement("thead");
mainT.appendChild(tHead);
// mainT.setAttribute("style", "background-color:red;");

let thData = document.createElement("th");
tHead.appendChild(thData);
thData.textContent = "Employee ID";

let thData1 = document.createElement("th");
tHead.appendChild(thData1);
thData1.textContent = "Full Name";

let thData2 = document.createElement("th");
tHead.appendChild(thData2);
thData2.textContent = "Department";

let thData3 = document.createElement("th");
tHead.appendChild(thData3);
thData3.textContent = "Level";

let thData4 = document.createElement("th");
tHead.appendChild(thData4);
thData4.textContent = "Salary";

const arrData = ["EmployeeID", "FullName", "Department", "Level", "Salary"];
// compiled for

for (let i = 0; i < empArr.length; i++) {
  const employeeRow = document.createElement("tr");
  mainT.appendChild(employeeRow);

  // loop to create columns and add data
  for (let s = 0; s < 5; s++) {
    const cell = document.createElement("td");
    employeeRow.appendChild(cell);
    cell.textContent = empArr[i][arrData[s]];
  }
}

/*
let tRow = document.createElement("tr");
mainT.append(tRow);

let trData = document.createElement("td");
tRow.append(trData);
trData.textContent = "1000";

let trData1 = document.createElement("td");
tRow.append(trData1);
trData1.textContent = "Ghazi Samer";

let trData2 = document.createElement("td");
tRow.append(trData2);
trData2.textContent = "Administration";

let trData3 = document.createElement("td");
tRow.append(trData3);
trData3.textContent = "Senior";

let trData4 = document.createElement("td");
tRow.append(trData4);
trData4.textContent = sa;
*/

/*
let hRow = document.createElement("tr");
th.append(hRow);
let hCell = hRow.insertCell();
hCell.append= "text";

*/
