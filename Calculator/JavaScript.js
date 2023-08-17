// Get the input element
const inputElement = document.getElementById("input");

// Handle button clicks
function handleButtonClick(event) {
    const clickedButton = event.target;
    const buttonId = clickedButton.id;

    if (buttonId === 'clear') {
        inputElement.textContent = '0'; // Clear the input
    } else if (buttonId === 'equals') {
        try {
            const result = eval(inputElement.textContent);
            inputElement.textContent = result;
        } catch (error) {
            inputElement.textContent = 'Error';
        }
    } else {
        if (inputElement.textContent === '0') {
            inputElement.textContent = clickedButton.textContent;
        } else {
            inputElement.textContent += clickedButton.textContent;
        }
    }
}

// Add click event listeners to buttons
const buttons = document.querySelectorAll(".button, .Sbutton, .done, .clear");
buttons.forEach(button => {
    button.addEventListener("click", handleButtonClick);
});