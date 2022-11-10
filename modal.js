// Creamos las variables 
var modal = document.getElementById("fondoModal");
var boton = document.getElementById("link");
var span = document.getElementsByClassName("cerrar")[0];

// Clic para abrir el modal
boton.onclick = function()
{
  modal.style.display = "block";
}

// Clic sobre <span> para cerrar modal
span.onclick = function()
{
  modal.style.display = "none";
}

// Cerrar modal haciendo clic en cualquier parte de la ventana
window.onclick = function(event)
{
  if (event.target == modal)
  {
    modal.style.display = "none";
  }
}