const botonAceptarCookies=document.getElementById('btnAceptar');
const avisoCookies=document.getElementById('avisoCookies');
const fondoAvisoCookies=document.getElementById('fondo-aviso-cookie');

dataLayer = [];

if(!localStorage.getItem('cookies-aceptadas')){
    avisoCookies.classList.add('activo');
    fondoAvisoCookies.classList.add('activo');
}else{
    dataLayer.push({'event':'cookies-aceptadas'});
}

 botonAceptarCookies.addEventListener('click',()=>{
 avisoCookies.classList.remove('activo');
 fondoAvisoCookies.classList.remove('activo');

 localStorage.setItem('cookies-aceptadas',true);

 dataLayer.push({'event':'cookies-aceptadas'});
});
