function calculate(operation) {
    const n1 = parseFloat(document.getElementById("num1").value);
    const n2 = parseFloat(document.getElementById("num2").value);
    let result = "";

    if (isNaN(n1) || isNaN(n2)) {
        result = "Please enter valid numbers!";
    } else {
        switch (operation) {
            case 'add':
                result = n1 + n2;
                break;
            case 'subtract':
                result = n1 - n2;
                break;
            case 'multiply':
                result = n1 * n2;
                break;
            case 'divide':
                result = n2 !== 0 ? (n1 / n2) : "Cannot divide by zero!";
                break;
        }
    }

    document.getElementById("result").innerText = "Result: " + result;
}
