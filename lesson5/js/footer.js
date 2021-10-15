let d = new Date();

document.getElementById("copyrightyear").textContent = d.getFullYear();

const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
}

document.getElementById("currentDate").textContent = d.toLocaleDateString('en-UK', options);

function toggleMenu(){
    document.getElementById("primaryNav").classList.toggle("hide");
}

function popupFriday(){
   
    var d = new Date();
    var n = d.getDay()
  
    if(n == 5){

      console.log("test")
      document.getElementById("onlyfriday").style.display= "flex";
  
    }

    else{
        document.getElementById("onlyfriday").style.display= "none"; 
    }
  
  }
  
  popupFriday()
  