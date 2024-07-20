document.addEventListener("DOMContentLoaded", function () {
    // Get reference to the screen
    var screen = document.getElementById("screen");
  
    // Get all the buttons
    var buttons = document.querySelectorAll(".box");
  
    // Add click event listener to each button
    buttons.forEach(function (button) {
      button.addEventListener("click", function () {
        // Get the button value
        var buttonText = button.innerText;
  
       
        if (buttonText === "C") {
          screen.value = ""; // Clear the screen
        } 
        else if (buttonText === "=") {
          try {
            // Evaluate the expression and display the result
            screen.value = eval(screen.value);
          } catch (error) {
            screen.value = "Error"; // Handle errors
          }
        } 
        else {
          // Append the button value to the screen
          screen.value += buttonText;
        }
      });
    });
  });
  const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    audio.play();
  });
});