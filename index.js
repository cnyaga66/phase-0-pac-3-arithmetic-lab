function basicFunction(num1, num2) {
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;
    const incrementNum1 = num1 + 1;
    const decrementNum1 = num1 - 1;

    console.log(`Addition: ${addition}`);
    console.log(`Subtraction: ${subtraction}`);
    console.log(`Multiplication: ${multiplication}`);
    console.log(`Division: ${division}`);
    console.log(`Increment of num1: ${incrementNum1}`);
    console.log(`Decrement of num1: ${decrementNum1}`);
}

// Test the function with different numbers
basicFunction(50, 80);
