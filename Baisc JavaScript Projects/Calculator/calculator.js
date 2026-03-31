// Create an object to store calculator values and state
const Calculator = {
    Display_Value: '0',        // What is currently shown on the screen
    First_Operand: null,       // Stores the first number entered
    Wait_Second_Operand: false,// Tracks if we are waiting for the next number
    operator: null,            // Stores the selected operator (+, -, *, /)
};

// Function to handle number button clicks
function Input_Digit(digit) {

    // Destructure values from Calculator object
    const { Display_Value, Wait_Second_Operand } = Calculator;

    // If waiting for second number, replace display
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;       // Start fresh with new digit
        Calculator.Wait_Second_Operand = false; // Reset flag
    } else {
        // If display is '0', replace it, otherwise add digit
        Calculator.Display_Value = Display_Value === '0'
            ? digit
            : Display_Value + digit;
    }
}

// Function to handle decimal point
function Input_Decimal(dot) {

    // Prevent adding decimal if waiting for next number
    if (Calculator.Wait_Second_Operand === true) return;

    // Add decimal only if not already present
    if (!Calculator.Display_Value.includes(dot)) {
        Calculator.Display_Value += dot;
    }
}

// Function to handle operators (+, -, *, /, =)
function Handle_Operator(Next_Operator) {

    // Get current values from Calculator object
    const { First_Operand, Display_Value, operator } = Calculator;

    // Convert display value (string) to number
    const Value_of_Input = parseFloat(Display_Value);

    // If operator exists and waiting for next number → update operator
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }

    // If first number is not set → store it
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // Perform calculation if operator already exists

        const Value_Now = First_Operand || 0;

        // Call correct operation from object below
        let result = Perform_Calculation[operator](Value_Now, Value_of_Input);

        // Fix decimal precision (limit to 9 decimal places)
        result = Number(result).toFixed(9);

        // Remove unnecessary trailing zeros
        result = (result * 1).toString();

        // Update display and first operand
        Calculator.Display_Value = result;
        Calculator.First_Operand = result;
    }

    // Now we wait for the next number input
    Calculator.Wait_Second_Operand = true;

    // Store the selected operator
    Calculator.operator = Next_Operator;
}

// Object that stores all calculation operations
const Perform_Calculation = {

    // Division
    '/': (First_Operand, Second_Operand) =>
        First_Operand / Second_Operand,

    // Multiplication
    '*': (First_Operand, Second_Operand) =>
        First_Operand * Second_Operand,

    // Addition
    '+': (First_Operand, Second_Operand) =>
        First_Operand + Second_Operand,

    // Subtraction
    '-': (First_Operand, Second_Operand) =>
        First_Operand - Second_Operand,

    // Equals (returns second value)
    '=': (First_Operand, Second_Operand) =>
        Second_Operand
};

// Function to reset calculator (AC button)
function Calculator_Reset() {

    Calculator.Display_Value = '0';        // Reset display
    Calculator.First_Operand = null;       // Clear first number
    Calculator.Wait_Second_Operand = false;// Reset waiting flag
    Calculator.operator = null;            // Clear operator
}

// Function to update screen display
function Update_Display() {

    // Get the screen element
    const display = document.querySelector('.calculator-screen');

    // Update its value
    display.value = Calculator.Display_Value;
}

// Initial display update when page loads
Update_Display();

// Select all calculator buttons container
const keys = document.querySelector('.calculator-keys');

// Add event listener to detect button clicks
keys.addEventListener('click', (event) => {

    // Get the clicked element
    const { target } = event;

    // Ignore clicks that are not buttons
    if (!target.matches('button')) {
        return;
    }

    // If operator button clicked (+, -, *, /, =)
    if (target.classList.contains('operator')) {
        Handle_Operator(target.value); // Handle operator
        Update_Display();              // Update screen
        return;
    }

    // If decimal button clicked
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);   // Add decimal
        Update_Display();
        return;
    }

    // If AC (clear) button clicked
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();            // Reset calculator
        Update_Display();
        return;
    }

    // Otherwise it's a number button
    Input_Digit(target.value);         // Add digit
    Update_Display();
});