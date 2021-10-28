const daysSinceLastVisit = document.querySelector('#gallerylastVisited');

function setDateLastVisited() {
    localStorage.setItem("dateLastVisited", new Date());
}

function getDateLastVisited(daysSinceLastVisit) {
    try {
        const milisecondsToDays = 8640000;
        const lastVisit = localStorage.getItem("dateLastVisisted") || new Date();
        const days = Math.round((lastVisit - new Date()) / milisecondsToDays);

        if (days > 0) {
            daysSinceLastVisit.textContent = days;
        } else {
            daysSinceLastVisit.textContent = 0;
        }
    }
    catch (er) {
        daysSinceLastVisit.textContent = 0;
    }
}

getDateLastVisited(daysSinceLastVisit)
setDateLastVisited()