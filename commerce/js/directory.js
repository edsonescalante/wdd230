document.querySelector('.gridview').addEventListener('click', () => {
    document.querySelector('.businessinfo').classList.add('grid-layout');
    document.querySelector('.businessinfo').classList.remove('listport');
}, false);

document.querySelector('.listview').addEventListener('click', () => {
    document.querySelector('.businessinfo').classList.add('listport');
    document.querySelector('.businessinfo').classList.remove('grid-layout');
}, false);

const directory = 'json/directory.json';

fetch(directory).then((response) => response.json()).then((jsonObject) => {

    Object.keys(jsonObject.localbusiness).forEach(i => {
        let div = document.createElement('div');
        div.classList.add('localbusiness-div');

        let name = document.createElement('h3');

        if (jsonObject.localbusiness[i].logo != "" || jsonObject.localbusiness[i].website != undefined) {
            let logo = document.createElement('img');
            logo.setAttribute('src', jsonObject.localbusiness[i].logo);
            logo.setAttribute('alt', `${jsonObject.localbusiness[i].name} logo`);

            div.appendChild(logo);
        }
        
        let address = document.createElement('p');
        address.textContent = jsonObject.localbusiness[i].address;

        let phone = document.createElement('p');
        phone.textContent = jsonObject.localbusiness[i].phone;

        if (jsonObject.localbusiness[i].website != "" || jsonObject.localbusiness[i].website != undefined) {
            let website = document.createElement('a');
            website.setAttribute('href', jsonObject.localbusiness[i].website);
            website.textContent = jsonObject.localbusiness[i].name;

            div.appendChild(name);
            name.appendChild(website);
        } else {
            div.appendChild(name);
        }
        
        div.appendChild(address);
        div.appendChild(phone);

        document.querySelector('div.businessinfo').appendChild(div);
    })
});