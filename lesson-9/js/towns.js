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
    const highcountry = towns.filter((towns) => towns.name === 'Preston' || towns.name === 'Fish Haven' || towns.name === 'Soda Springs');
    highcountry.forEach(highcountry => {
      let towndescription = document.createElement('section');
      let section = document.createElement('div');
      let townname = document.createElement('h2');
      let motto = document.createElement('h3');
      let yfounded = document.createElement('p');
      let population = document.createElement('p');
      let rain = document.createElement('p');
      let image = document.createElement('img');

      towndescription.innerHTML = `<span class="towndescription></span>`;
      townname.innerHTML = `<span class="descrip">${highcountry.name}</span>`;
      motto.innerHTML = `<span class="descrip">"${highcountry.motto}"</span>`;
      yfounded.innerHTML = `<span class="descrip">Year Founded: ${highcountry.yearFounded}</span>`;
      population.innerHTML = `<span class="descrip">Population: ${highcountry.currentPopulation}</span>`;
      rain.innerHTML = `<span class="descrip">Annual Rain Fall: ${highcountry.averageRainfall}</span>`;
      image.setAttribute('src', `images/${highcountry.photo}`);
      image.setAttribute('alt', `${highcountry.name}`);


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