const fah = parseInt(document.querySelector("#degree").textContent);
const wind = parseInt(document.querySelector("#windspeed").textContent);
let chill = ""; 
if ((fah >= 50) && (wind > 3)) {
    chill = windChill(fah, wind);
} 

else {
    chill = "N/A"
}

function windChill(fah, wind) {
    let chill =
        35.74 + 0.6215 * fah - 35.75 * Math.pow(wind, 0.16) +
        0.4275 * fah * Math.pow(wind, 0.16);
    return chill.toFixed(0);
}

document.querySelector("#wChill").innerHTML = chill;


