var suljeBtn = document.getElementById("suljevalo");
var infoHeader = document.getElementById("info");

function lightsensor(){
    if ( 'AmbientLightSensor' in window ) {
      const sensor = new AmbientLightSensor();
      sensor.onreading = () => {
        console.log('Current light level:', sensor.illuminance);
        if(sensor.illuminance > 100) {
          alert("Onpa kirkasta! Nkykyinen taso: " + sensor.illuminance);
        }
      };
      sensor.onerror = (event) => {
        console.log(event.error.name, event.error.message);
      };
      sensor.start();
      infoHeader.innerHTML = "Vie laitetta lähelle valoa";
    }
    else {
        infoHeader.innerHTML ="Valosensori ei käytettävissä";
      console.log("Valosensori ei käytettävissä");
    }
    
    
  }
 

  suljeBtn.addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
    document.querySelector("#divhome").classList.add("active");
})