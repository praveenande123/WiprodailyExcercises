
const people = [
  { 
    name: "Aarav", age: 17, city: "Delhi" 
},
  { 
    name: "Meera", age: 22, city: "Mumbai" 
},
  {
     name: "Raj", age: 19, city: "Chennai"
     },
  {
     name: "Priya", age: 16, city: "Bangalore"
     },
  { 
    name: "Vikram", age: 25, city: "Kolkata"
 }
];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         console.log("Adult:", people[i].name);
//     } else {
//         console.log("Minor:", people[i].name);
//     }
// }
people.map(person => {
  if (person.age >= 18) {
    console.log("Adult:", person.name);
  } else {
    console.log("Minor:", person.name);
  }
});

// const eligibleVoters = people.filter(person => person.age >= 18);


// for(let i=0; i < eligibleVoters.length; i++){
//   console.log(eligibleVoters);
// };
