const todayDate = Date.now();
const millisecondsToDays = 86400000;
const lastVisit = localStorage.getItem("lastvisit") || todayDate;

numberofdays = ((d - lastVisit) / millisecondsToDays).toFixed(0);

if (numberofdays == 0) {
  document.querySelector("#gallaryLastVisited").innerHTML = "Welcome to the Weather Gallery!";
} else {
  document.querySelector(
    "#gallaryLastVisited"
  ).innerHTML = `Days since last visit: ${numberofdays}`;
}

localStorage.setItem("lastvisit", todayDate);
