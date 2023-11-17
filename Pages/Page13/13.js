function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }

//Funciones para avanzar

const boton = document.getElementById("boton");
const avanzarBtn = document.getElementById("avanzarBtn");

boton.addEventListener("mouseover", function() {
    avanzarBtn.disabled = false;
});

boton.addEventListener("onmouseover", function() {
    avanzarBtn.disabled = true;
});  