// src/logic/operate.js
import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  // Wrap numbers with Big.js classes
  const bigNumberOne = Big(numberOne);
  const bigNumberTwo = Big(numberTwo);

  // Perform the operation based on the operation argument
  switch (operation) {
    case '+':
      // Addition
      return bigNumberOne.plus(bigNumberTwo).toString();
    case '-':
      // Subtraction
      return bigNumberOne.minus(bigNumberTwo).toString();
    case 'x':
      // Multiplication
      return bigNumberOne.times(bigNumberTwo).toString();
    case '÷':
      // Division
      if (bigNumberTwo.eq(0)) {
        // Handle division by zero
        return 'Error';
      }
      return bigNumberOne.div(bigNumberTwo).toString();
    case '%':
      // Modulus
      return bigNumberOne.mod(bigNumberTwo).toString();
    // Add more cases for other operations as needed
    default:
      // Handle unknown operations
      return 'Error';
  }
};

export default operate;
