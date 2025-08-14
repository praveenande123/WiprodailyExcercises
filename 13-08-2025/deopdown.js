// Unordered city names
let cities = ["Mumbai", "Delhi", "Kolkata", "Bengaluru", "Chennai", "Pune", "Hyderabad"];
console.log(cities);
function populateDropdown() {
    let dropdown = document.getElementById("cityDropdown");

    // Clear existing options
    dropdown.innerHTML = "";

    // Sort cities alphabetically
    let sortedCities = cities.sort();
console.log(sortedCities);
    // Add each city as an option
    for (let i = 0; i < sortedCities.length; i++) {
        let option = document.createElement("option");
        option.value = sortedCities[i];
        option.text = sortedCities[i];
        dropdown.appendChild(option);
    }
}
