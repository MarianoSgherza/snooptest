$(document).ready(function () {

    var fotos = document.getElementById("fotos-carrusel");

    var avanzar = document.querySelector(".crsl-container");
    var forward = document.querySelector(".adelante");

 
    avanzar.addEventListener("click", function () {
        
        var primero = document.getElementById("fotos-carrusel").firstChild;
        fotos.removeChild(primero);
        fotos.appendChild(primero);
  
        
      
    });

    forward.addEventListener("click", function () {
        
        var primero = document.getElementById("fotos-carrusel").firstChild;
        fotos.removeChild(primero);
        fotos.appendChild(primero);
  
        
      
    });

    $(".hamburger").click(function () {
        $(".links-wrapper").slideToggle(200);
    })
    
})
