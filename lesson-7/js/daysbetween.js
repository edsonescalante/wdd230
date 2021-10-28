const millisecondsToDays = 8640000;

const lastVisit = localStorage.getItem("lastvisit") || Date.now();

(lastVisit - Date.now() / millisecondsToDays).toFixed(0);

//display to wherever I want to

localStorage.setItem("lastvisit", Date.now());