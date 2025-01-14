# Calculator-Using-HTML-CSS-and-JS
# Simple Calculator

A simple and functional calculator built using HTML, CSS, and JavaScript. This project is designed to demonstrate how to build a basic web calculator with an interactive user interface.

## Features

- Perform basic arithmetic operations: addition, subtraction, multiplication, and division.
- Supports calculation with decimal points.
- Clear (`AC`) and delete (`DEL`) functionality to manage the current input.
- Displays results on an input field.
- Simple and clean design for easy use.

## Files in the Project

1. **HTML** (`index.html`): The structure and layout of the calculator.
2. **CSS** (`style.css`): The styling for the calculator.
3. **JavaScript** (`script.js`): The logic to handle the button clicks and evaluate the expressions.

## Installation

To use this calculator on your local machine, simply follow these steps:

1. Download or clone this repository to your local machine.
2. Open the `index.html` file in a web browser to start using the calculator.

Alternatively, you can also serve it on any local or online server to test it.

## How It Works

1. The buttons for digits, operators, and special functions (AC, DEL, =) are laid out in a grid format.
2. The user can click buttons to build a mathematical expression.
3. The calculator supports the following functions:
   - **AC (All Clear)**: Clears the current input.
   - **DEL (Delete)**: Removes the last character.
   - **=**: Evaluates the current mathematical expression and shows the result.
4. The JavaScript uses `eval()` to evaluate the expression. It safely handles errors and displays "Error" if the expression is invalid.

## Code Overview

### HTML (`index.html`)

Defines the structure of the calculator interface, including buttons for digits (0-9), operators (+, -, *, /), and special functions (AC, DEL, =).

### CSS (`style.css`)

Styles the calculator container and buttons to create a user-friendly layout with a clean design.

### JavaScript (`script.js`)

Handles the logic for:
- Adding the clicked button values to the input string.
- Removing the last character when `DEL` is pressed.
- Clearing the input when `AC` is pressed.
- Evaluating and displaying the result when `=` is pressed.
- Ensuring that errors in the expression are caught and handled gracefully.

## Example

Here’s how the calculator works:

- **Input:** `7 + 3`
- **Output:** `10`

## License

This project is open-source and available under the MIT License.

## Contributing

If you’d like to contribute to this project, feel free to fork the repository and submit a pull request. Any contributions, bug fixes, or suggestions are welcome!
