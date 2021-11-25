let dbanner = new Date();

const fri = dbanner.getDay();
const banner = document.querySelector("aside");

if (fri == 5) {
    banner.setAttribute("class", "announcement");
} else {
    banner.setAttribute("class", "onlyFriday");
}