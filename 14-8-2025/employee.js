// Function to print employees and return the count
function printEmployees(employees) {
    employees.forEach(function (emp) {
        console.log("ID: ".concat(emp.empId, ", Name: ").concat(emp.empName, ", Salary: ").concat(emp.salary));
    });
    return employees.length;
}
// Creating a list of employees
var employeesList = [
    { empId: 101, empName: "Alice", salary: 50000 },
    { empId: 102, empName: "Bob", salary: 60000 },
    { empId: 103, empName: "Charlie", salary: 55000 }
];
// Calling the function
var totalEmployees = printEmployees(employeesList);
console.log("Total Employees: ".concat(totalEmployees));
