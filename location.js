
var latitude, longitude;
var suljeBtn = document.getElementById("suljesijainti");

function starttaa(){
    

    if(navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(
            function(position) {
                latitude = position.coords.latitude;
                longitude = position.coords.longitude;
            }


        )

    }
    setTimeout(function () {
        if(latitude !== undefined) {
            alert("Koordinaattisi ovat " + latitude + " leveysastetta ja " + longitude + " pituusastetta");
            
        }
        else {
            alert("Geolocation ei ole tuettu")
        }
    }, 2000);
    
   
    
    
   document.getElementById("naytabtn").hidden = false;
}


    
    function naytaKartalla(){
        console.log("klikattu")
        //alert("Koordinaattisi ovat " + latitude + " leveysastetta ja " + longitude + " pituusastetta");

        window.location.href = "https://maps.google.com/?q="+latitude+","+longitude;
        console.log(document.querySelector("#test"));
    
        }

        suljeBtn.addEventListener("click", function(){
            document.querySelector(".active").classList.remove("active");
            document.querySelector("#divhome").classList.add("active");
        })
