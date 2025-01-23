const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button
const startButton = document.getElementById("start-btn")
startButton.onclick = startCountdown

// ITERATION 2: Start Countdown
function startCountdown() {
  timer = setInterval(() => {
    remainingTime--
    const timeDiv = document.getElementById("time")
    timeDiv.innerHTML = remainingTime
    if (remainingTime === 0) {
      clearInterval(timer)
      showToast()
    }
  }, 1000);
}

// ITERATION 3: Show Toast
function showToast() {
  const toast = document.getElementById("toast")
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}
