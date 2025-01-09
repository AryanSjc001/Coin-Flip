document.getElementById("flip-button").addEventListener("click", function () { 
  const coinDisplay = document.getElementById("result").parentElement;
  coinDisplay.classList.add("flipping");

  const result = Math.random() < 0.5 ? "Ronaldo" : "Messi";

  setTimeout(function() {
    const resultDiv = document.getElementById("result");
    resultDiv.textContent = result;

    if (result === "Ronaldo") {
      resultDiv.style.color = "blue";
    } else {
      resultDiv.style.color = "purple";
    }

    coinDisplay.classList.remove("flipping");
  }, 1000);
});
