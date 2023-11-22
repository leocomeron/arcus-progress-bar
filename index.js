let progressBar = document.getElementById("progress-bar");
let startButton = document.getElementById("start-btn");
let stopButton = document.getElementById("stop-btn");
let resetButton = document.getElementById("reset-btn");
let progressInterval;

const startProgress = () => {
  startButton.disabled = true;
  stopButton.disabled = false;
  resetButton.disabled = false;

  progressInterval = setInterval(() => {
    let currentWidth = parseFloat(progressBar.style.width) || 0;

    if (currentWidth < 100) {
      currentWidth += 1;
      progressBar.style.width = currentWidth + "%";
      progressBar.textContent = currentWidth + "%";
    } else {
      clearInterval(progressInterval);
      startButton.disabled = true;
      stopButton.disabled = true;
      resetButton.disabled = false;
    }
  }, 100);
};

const stopProgress = () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = false;
  clearInterval(progressInterval);
};

const resetProgress = () => {
  startButton.disabled = false;
  stopButton.disabled = true;
  resetButton.disabled = true;

  clearInterval(progressInterval);
  progressBar.style.width = "0%";
  progressBar.textContent = "0%";
};
