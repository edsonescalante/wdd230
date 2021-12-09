let d = new Date();
const todayDate = Date.now();
const millisecondsToDays = 86400000;
const lastVisit = localStorage.getItem("lastvisit") || todayDate;

numberofdays = ((d - lastVisit) / millisecondsToDays).toFixed(0);

if (numberofdays == 0) {
  document.querySelector("#LastVisited").innerHTML = "Welcome to the Chamber of Commerce of Boise Idaho!";
} else {
  document.querySelector(
    "#LastVisited"
  ).innerHTML = `Days since last visit: ${numberofdays}`;
}

localStorage.setItem("lastvisit", todayDate);
