document.getElementById("flip-button").addEventListener("click", function () {
  // Add flipping class to initiate animation
  const coinDisplay = document.getElementById("result").parentElement;
  coinDisplay.classList.add("flipping");

  // Randomly pick Ronaldo or Messi
  const result = Math.random() < 0.5 ? "Ronaldo" : "Messi";

  // Set a timeout to update the result after the flip animation completes
  setTimeout(function() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;

    // Update the color based on the result
    if (result === "Ronaldo") {
      resultDiv.style.color = "blue";
    } else {
      resultDiv.style.color = "purple";
    }

    // Remove the flipping class after animation
    coinDisplay.classList.remove("flipping");
  }, 1000); // Match the timeout duration with animation time (1 second)
});
