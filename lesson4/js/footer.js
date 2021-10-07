let d = new Date();

document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

document.getElementById("currentDate").textContent = d.toLocaleDateString('en-UK', options);

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}



