//your JS code here. If required.
document.getElementById('btn').addEventListener('click', () => {
    const input = document.getElementById('ip').value;
    const outputDiv = document.getElementById('output');

    // Clear the output div
    outputDiv.textContent = '';

    // Parse the input number
    const num = parseFloat(input);

    if (isNaN(num)) {
        outputDiv.textContent = 'Please enter a valid number.';
        return;
    }

    // Function to create a promise that resolves after a delay
    const delay = (ms, value) =>
        new Promise((resolve) => setTimeout(() => resolve(value), ms));

    // Start promise chain
    delay(2000, num)
        .then((result) => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result * 2);
        })
        .then((result) => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result - 3);
        })
        .then((result) => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result / 2);
        })
        .then((result) => {
            outputDiv.textContent = `Result: ${result}`;
            return delay(1000, result + 10);
        })
        .then((finalResult) => {
            outputDiv.textContent = `Final Result: ${finalResult}`;
        })
        .catch((error) => {
            outputDiv.textContent = `Error: ${error.message}`;
        });
});
