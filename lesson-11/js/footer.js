let d = new Date();

document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

document.getElementById("currentDate").textContent = d.toLocaleDateString('en-UK', options);

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}


const fri = d.getDay();
const banner = document.querySelector("aside");

if (fri == 5) {
    banner.setAttribute("class", "announcement");
} else {
    banner.setAttribute("class", "onlyFriday");
}