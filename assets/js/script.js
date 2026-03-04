const form = document.getElementById("formulario");

if(form){

form.addEventListener("submit",function(e){

e.preventDefault();

let nombre=document.getElementById("nombre").value.trim();
let email=document.getElementById("email").value.trim();
let descripcion=document.getElementById("descripcion").value.trim();

let mensaje=document.getElementById("mensaje");

if(nombre.length<3){
mensaje.textContent="Nombre mínimo 3 caracteres";
return;
}

if(!email.includes("@")){
mensaje.textContent="Email inválido";
return;
}

if(descripcion.length<10){
mensaje.textContent="Descripción mínima 10 caracteres";
return;
}

mensaje.style.color="green";
mensaje.textContent="Formulario enviado correctamente ✅";

});
}