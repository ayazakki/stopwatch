// Global variables to store stopwatch state and time
var stopwatchInterval;
var startTime;
var elapsedTime = 0;

// Function to start the stopwatch
function startStopwatch() {
  // Store the current time minus the elapsed time (if any)
  startTime = Date.now() - elapsedTime;
  
  // Start an interval that calls the updateStopwatch function every 10 milliseconds
  stopwatchInterval = setInterval(updateStopwatch, 10);
}

// Function to stop the stopwatch
function stopStopwatch() {
  // Clear the interval to stop the update
  clearInterval(stopwatchInterval);
}

// Function to reset the stopwatch
function resetStopwatch() {
  // Clear the interval to stop the update
  clearInterval(stopwatchInterval);
  
  // Reset the elapsed time and update the display
  elapsedTime = 0;
  document.getElementById("stopwatch").innerHTML = "00:00:00";
}

// Function to update the stopwatch display
function updateStopwatch() {
  // Get the current time
  var currentTime = Date.now();
  
  // Calculate the elapsed time since the stopwatch started
  elapsedTime = currentTime - startTime;
  
  // Format the elapsed time and update the display
  var formattedTime = formatTime(elapsedTime);
  document.getElementById("stopwatch").innerHTML = formattedTime;
}

// Function to format the time as hh:mm:ss
function formatTime(time) {
  var milliseconds = Math.floor(time % 1000 / 10);
  var seconds = Math.floor(time / 1000 % 60);
  var minutes = Math.floor(time / (1000 * 60) % 60);
  var hours = Math.floor(time / (1000 * 60 * 60));
  
  // Pad each component with leading zeros if necessary
  hours = padZero(hours);
  minutes = padZero(minutes);
  seconds = padZero(seconds);
  milliseconds = padZero(milliseconds);
  
  // Return the formatted time as a string
  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}

// Function to pad a value with leading zeros if necessary
function padZero(value) {
  return value.toString().padStart(2, "0");
}