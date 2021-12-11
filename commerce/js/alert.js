    //There is no weather alerts available for the city of Boise.
    //I attended to the virtual lab, and brother Blazzard said we should write our attempt to display as if we were to have alerts in our city.

    if (jsonObject.alerts) {
        Object.keys(jsonObject.alerts).forEach(i => {
            let banner = document.createElement('div');
            banner.classList.add('weather-alert');

            let button = document.createElement('button');
            button.setAttribute('type', 'button');
            button.innerHTML = "&times;";
            button.classList.add('close-button');
            button.addEventListener("click", () => {
                banner.remove('weather-alert');
            })

            let title = document.createElement('h2');
            title.textContent = jsonObject.alerts[i].event;

            let description = document.createElement('p');
            description.textContent = jsonObject.alerts[i].description;

            title.addEventListener("onmouseover", () => {
                if (description.style.display === "none") {
                    description.style.display = "block";
                }
            })

            title.addEventListener("onmouseout", () => {
                if (description.style.display === "block") {
                    description.style.display = "none";
                }
            })

            banner.appendChild(title);
            banner.appendChild(button);
            banner.appendChild(description);

            const body = document.querySelector('body');
            body.prepend(banner);
        });
    } else {
        bannerClass = document.querySelector('weather-alert');
        if (bannerClass) {
            banner.remove('weather-alert');
        }
    }