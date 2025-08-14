const input = document.getElementById("myInput");
const label = document.getElementById("charLabel");

input.addEventListener("input", function() {
    const remaining = 50 - input.value.length;
    label.textContent = remaining + "characters remaining";
});
