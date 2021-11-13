const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json'

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
      return response.json();
    }
  })
  .then(function (jsonObject) {
    const towns = jsonObject['towns'];
    const areas = towns.filter((towns) => towns.name === 'Preston' || towns.name === 'Fish Haven' || towns.name === 'Soda Springs');
    areas.forEach(areas => {
      let towndescription = document.createElement('section');
      let section = document.createElement('div');
      let townname = document.createElement('h2');
      let motto = document.createElement('h3');
      let yfounded = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      let image = document.createElement('img');

      towndescription.innerHTML = `<span class="towndescription></span>`;
      townname.innerHTML = `<span class="descrip">${areas.name}</span>`;
      motto.innerHTML = `<span class="descrip">"${areas.motto}"</span>`;
      yfounded.innerHTML = `<span class="descrip">Year Founded: ${areas.yearFounded}</span>`;
      population.innerHTML = `<span class="descrip">Population: ${areas.currentPopulation}</span>`;
      rain.innerHTML = `<span class="descrip">Annual Rain Fall: ${areas.averageRainfall}</span>`;
      image.setAttribute('src', `images/${areas.photo}`);
      image.setAttribute('alt', `${areas.name}`);


      towndescription.appendChild(section);
      section.appendChild(townname);
      section.appendChild(motto);
      section.appendChild(yfounded);
      section.appendChild(population);
      section.appendChild(rain);
      towndescription.appendChild(image);

      document.querySelector('div.homepagetowns').appendChild(towndescription);
    });
  });