fetch("ccbevents.json")
    .then(response => response.json())
    .then(data =>{
        document.querySelector("eventsinfo").innerText = data.name
    })