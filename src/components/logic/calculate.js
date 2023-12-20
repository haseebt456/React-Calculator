// src/logic/calculate.js
import operate from './operate'; // Import the operate.js module

const calculate = (calculatorData, buttonName) => {
  // Extract calculator data properties
  let { total, next, operation } = calculatorData;

  switch (buttonName) {
    case '+/-':
      return {
        total: total ? `${parseFloat(total) * -1}` : total,
        next: next ? `${parseFloat(next) * -1}` : next,
        operation,
      };
    case 'AC':
      return {
        total: null,
        next: null,
        operation: null,
      };
    case '=':
      if (total && next && operation) {
        // Perform the operation using operate.js and set the result as the new total
        total = operate(total, next, operation);
        return {
          total,
          next: null,
          operation: null,
        };
      }
      return calculatorData; // No operation to perform
    case '+':
    case '-':
    case 'x':
    case '÷':
    case '%':
      // Handle operator buttons
      return {
        total: next ? total : null,
        next: null,
        operation: buttonName,
      };
    case '.':
      // Handle decimal point button
      if (next) {
        // If there is a next value, append the decimal point to it
        return {
          total,
          next: `${next}.`,
          operation,
        };
      } else if (!total) {
        // If no total, start a new number with '0.'
        return {
          total: '0.',
          next,
          operation,
        };
      }
      return calculatorData; // Do nothing if total is present
    case '0':
    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      // Handle numeric buttons
      if (!operation) {
        // If no operation, set the clicked button as the next value
        next = next ? `${parseFloat(next)}${buttonName}` : buttonName;
        return {
          total,
          next,
          operation,
        };
      } else {
        // If there is an operation, set the clicked button as the next value and clear the operation
        return {
          total,
          next: buttonName,
          operation: null,
        };
      }
    default:
      return calculatorData; // No action for unknown buttons
  }
};

export default calculate;
