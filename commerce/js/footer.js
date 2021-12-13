let dcurrent = new Date();

document.getElementById("copyrightyear").textContent = dcurrent.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

document.getElementById("currentDate").textContent = dcurrent.toLocaleDateString('en-UK', options);


//CODE FOR NAVIGATION MENU
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}
