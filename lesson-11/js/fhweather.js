const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=be76dc31a6e1904015882fc9237649b1";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.querySelector("#degree").textContent = jsObject.main.temp.toFixed(0);
        document.querySelector("#skycondition").textContent = jsObject.weather[0].description;
        document.querySelector("#humid").textContent = jsObject.main.humidity;
        document.querySelector("#windspeed").textContent = jsObject.wind.speed.toFixed(0);

        const fah = parseInt(document.querySelector("#degree").textContent);
        const wind = parseInt(document.querySelector("#windspeed").textContent);
        let chill = "";

        if ((fah <= 50) && (wind > 3)) {
            chill = windChill(fah, wind);
        } else {
            chill = "N/A"
        }

        function windChill(fah, wind) {
            let chill =
                35.74 + 0.6215 * fah - 35.75 * Math.pow(wind, 0.16) +
                0.4275 * fah * Math.pow(wind, 0.16);
            return chill.toFixed(0);
        }

        document.querySelector("#wChill").innerHTML = chill;
    });

const forcastURL = "https://api.openweathermap.org/data/2.5/forecast?id=5585010&appid=be76dc31a6e1904015882fc9237649b1&units=imperial";

fetch(forcastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const hourmark = jsObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;

        hourmark.forEach(forecast => {
            let thedate = new Date(forecast.dt_txt);
            const imagesrc = 'https://openweathermap.org/img/w/' + forecast.weather[0].icon + '.png';
            const desc = forecast.weather[0].description;
            document.querySelector(`#wday${day + 1}`).textContent = weekdays[thedate.getDay()];
            document.querySelector(`#degree${day + 1}`).textContent = forecast.main.temp.toFixed(0) + "°F";
            document.querySelector(`#img${day+1}`).setAttribute('src', imagesrc);
            document.querySelector(`#img${day+1}`).setAttribute('alt', desc);
            day++;

        });
    });