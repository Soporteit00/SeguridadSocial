function myFunction1() {
    var popup = document.getElementById("myPopup1");
    popup.classList.toggle("show");
  }

  function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show");
  }

  function myFunction3() {
    var popup = document.getElementById("myPopup3");
    popup.classList.toggle("show");
  }

  function myFunction4() {
    var popup = document.getElementById("myPopup4");
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