


let display = document.getElementById("sum");
let buttons = document.querySelectorAll(".button");

let str = '';

// Convert NodeList to an array
let buttonArr = Array.from(buttons);

// Iterate over each button and attach an event listener
buttonArr.forEach(function(btn) {
    btn.addEventListener("click", function(event) {
        let buttonValue = event.target.innerHTML;

        if (buttonValue === 'DEL') {
            // Remove the last character from the string
            str = str.substring(0, str.length - 1);
            display.value = str;

        } else if (buttonValue === 'AC') {
            // Clear the entire string
            str = '';
            display.value = str;

        } else if (buttonValue === '=') {
            try {
                // Calculate the result of the expression
                str = eval(str).toString();
                display.value = str;
            } catch (error) {
                // Handle invalid expressions
                display.value = "Error";
                str = '';
            }

        } else {
            // Append the clicked value to the string
            str += buttonValue;
            display.value = str;
        }
    });
});








