////////////////Kamerasivun scripti//////////////////////


var naytaBtn = document.getElementById("naytakamera");
var kameraDiv = document.getElementById("kameradiv")
var suljeBtn = document.getElementById("sulje");
var sijaintiBtn = document.getElementById("naytasijainti");
var valoBtn = document.getElementById("naytavalo");


  suljeBtn.onclick = function (){
    document.querySelector('.active').classList.remove('active');
    document.getElementById("divhome").classList.add('active');
    console.log(this);
  }
  sijaintiBtn.onclick = function (){
    document.querySelector('.active').classList.remove('active');
    document.getElementById("sijaintidiv").classList.add('active');
  }
  valoBtn.onclick = function (){
    document.querySelector('.active').classList.remove('active');
    document.getElementById("valodiv").classList.add('active');
  }
  naytaBtn.onclick = function (){
    document.querySelector('.active').classList.remove('active');
    document.getElementById("kameradiv").classList.add('active');
    
  }




//window.addEventListener("load", cameraStarttaa);

