//Weather Summary
const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=43.618881&lon=-116.215019&appid=be76dc31a6e1904015882fc9237649b1&units=imperial";

fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        document.querySelector("#degree").textContent = jsObject.current.temp.toFixed(0);
        document.querySelector("#skycondition").textContent = jsObject.current.weather[0].description;
        document.querySelector("#humid").textContent = jsObject.current.humidity;

    });

//Forecast    
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {

        const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        let day = 0;

        for (let i = 1; i <= 3; i++) {
           
            const daily = jsObject.daily[i]
            let thedate = new Date(daily.dt * 1000);
            const imagesrc = 'http://openweathermap.org/img/wn/' + daily.weather[0].icon + '.png';
            const desc = daily.weather[0].description;
            document.querySelector(`#wday${i}`).textContent = weekdays[thedate.getDay()];
            document.querySelector(`#degree${i}`).textContent = daily.temp.day.toFixed(0) + "°F";
            document.querySelector(`#img${i}`).setAttribute('src', imagesrc);
            document.querySelector(`#img${i}`).setAttribute('alt', desc);

        }


    });