
interface Employee {
    empId: number;
    empName: string;
    salary: number;
}


function printEmployees(employees: Employee[]): number {
    employees.forEach(emp => {
        console.log(`ID: ${emp.empId}, Name: ${emp.empName}, Salary: ${emp.salary}`);
    });
    return employees.length;
}


const employeesList: Employee[] = [
    { empId: 101, empName: "Alice", salary: 50000 },
    { empId: 102, empName: "Bob", salary: 60000 },
    { empId: 103, empName: "Charlie", salary: 55000 }
];


const totalEmployees = printEmployees(employeesList);
console.log(`Total Employees: ${totalEmployees}`);
