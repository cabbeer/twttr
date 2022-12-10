$(document).ready(function () {
  // --- our code goes here ---

const messageEle = document.getElementById("nt-input");
const counterEle = document.getElementById("nt-counter");

// Add event Listener to MSG element which updates  Counter element

messageEle.addEventListener("input", function (e) {
  const target = e.target;

  // Count the current number of characters
  const currentLength = target.value.length;  
  const charRemaining = 140 - currentLength 

  counterEle.innerHTML = `${charRemaining}`;
});


  
});







  // (() => {
  //   const counter = (() => {
  //     const input = document.getElementById("counter-input"),
  //       display = document.getElementById("counter-display"),
  //       changeEvent = (evt) => (display.innerHTML = evt.target.value.length),
  //       getInput = () => input.value,
  //       countEvent = () => input.addEventListener("keyup", changeEvent),
  //       init = () => countEvent();

  //     return {
  //       init: init,
  //     };
  //   })();

  //   counter.init();
  // })();
