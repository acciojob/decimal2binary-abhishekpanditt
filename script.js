function decimalToBinary(num) {
  //Write you code here
  if (num === 0) {
    return '0'; // Special case for 0
  }

  var binary = '';
  while (num > 0) {
    binary = (num % 2) + binary; // Get the remainder (0 or 1) and prepend it to the binary string
    decimal = Math.floor(num / 2); // Divide the decimal by 2 to move to the next bit
  }

  return binary;
}


window.decimalToBinary = decimalToBinary;
