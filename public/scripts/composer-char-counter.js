$(document).ready(function () {
  // --- our code goes here ---

  const messageEle = document.getElementById("nt-input");
  const counterEle = document.getElementById("nt-counter");

  // Update the counter element based on the current length of the message
  messageEle.addEventListener("input", function (e) {
    const target = e.target;

    const currentLength = target.value.length;
    const charRemaining = 140 - currentLength;

    counterEle.innerHTML = `${charRemaining}`;

    // Add some visual styling to the counter element based on the current length of the message
    if (currentLength > 140) {
      counterEle.style.color = "red";
    } else {
      counterEle.style.color = "black";
    }
  });


});