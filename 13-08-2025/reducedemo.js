const employee = [
  { 
    name: "Aarav", ID: 17,age:25, salary: 40000, role:"Manager" 
},
  { 
    name: "Meera", ID: 22, age:35,salary: 40000 , role:"Developer"
},
  {
     name: "Raj", ID: 19, age:19,salary: 30000 , role:"Designer"
     },
  {
     name: "Priya", ID: 16,age:15, salary: 20000, role:"Tester"
     },
  { 
    name: "Vikram", ID: 25, age:16, salary: 50000 , role:"Manager"
 }
];
for(let i=0;i<employee.length;i++){
    if(employee.age >= 18){
        console.log("Adult")
    }
    else{
        console.log("Minor")
    }
}

// const totalManagerSalary = employee.reduce((acc, emp) => {
//     return emp.role === "Manager" ? acc + emp.salary : total;
// }, 0);
// console.log( totalManagerSalary);