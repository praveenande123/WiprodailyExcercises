
let names = ["John", "Michael", "Sita", "Jonathan", "Ravi", "Anjali"];


  let filteredNames=names.filter(name => name.length > 5)
   let upperCasedNames=filteredNames.map(name => name.toUpperCase());
console.log(upperCasedNames);

