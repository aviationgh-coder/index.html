function getGreeting(name = "") {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good morning";
  } else if (hour < 18) {
    greeting = "Good afternoon";
  } else if (hour < 23) {
    greeting = "Good evening";
  } else {
    greeting = "Good night";
  }

  return name ? `${greeting}, ${name}` : greeting;
}

function updateGreeting() {
  const el = document.getElementById("greet");
  el.textContent = getGreeting(""); // ← put your name here
  el.classList.add('show');
}

updateGreeting();





var today = new Date();
var year = today.getFullYear();

// Target the specific span ID, not the whole footer
var yearSpan = document.getElementById('footer');

// Update only the text inside that span
yearSpan.textContent = 'Copyright ' + year;



var toDay = new Date();

// Formatting the Date
var dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
var fullDate = toDay.toLocaleDateString('en-US', dateOptions);

// Formatting the Time
var timeOptions = { hour: 'numeric', minute: '2-digit', hour12: true };
var fullTime = toDay.toLocaleTimeString('en-US', timeOptions);

// Combine them into one string
var displayString = fullDate + ', ' + fullTime;

// Update your element
var el = document.getElementById('now');
el.textContent = displayString;





