const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const currentTown = towns.filter((towns) => towns.name === 'Fish Haven');
        console.table(currentTown);
        currentTown.forEach(currentTown => {
            let preston = document.createElement('div');
            let eventOne = document.createElement('p');
            let eventTwo = document.createElement('p');
            let eventThree = document.createElement('p');

            preston.className = 'eventscss';
            eventOne.innerHTML = `${currentTown.events[0]}`;
            eventTwo.innerHTML = `${currentTown.events[1]}`;
            eventThree.innerHTML = `${currentTown.events[2]}`;

            preston.appendChild(eventOne);
            preston.appendChild(eventTwo);
            preston.appendChild(eventThree);

            document.querySelector('div.eventsinfo').appendChild(preston);

        });
    });