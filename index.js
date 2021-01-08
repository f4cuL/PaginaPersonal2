
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola mundo!',
    mostrar: true
  }
})
;

let btn = document.querySelector('.switchBtn-checkbox');

btn.addEventListener( 'change', function() {
 if (btn.checked==true)
 {
  btn.disabled=true;
  document.querySelector('.texto').classList.replace("animate__fadeIn","animate__fadeOut")
  setTimeout(function(){app.message='Hello world!'},900);
  setTimeout(function(){document.querySelector('.texto').classList.replace("animate__fadeOut","animate__fadeIn",)},1000)
  btn.disabled=true;
  setTimeout(() => {
    btn.disabled=false;
  }, 2500);
  document.querySelector('.inicio').innerHTML='Home';    
  document.querySelector('#contacto').innerHTML='Contact'; 
 }
 else
 { 
  document.querySelector('.texto').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){app.message='Hola mundo!'},900);
  setTimeout(function(){document.querySelector('.texto').classList.replace("animate__fadeOut","animate__fadeIn",)},1000)
  btn.disabled=true;
  setTimeout(() => {
    btn.disabled=false;
  }, 2500);
  document.querySelector('.inicio').innerHTML='Inicio'; 
  document.querySelector('#contacto').innerHTML='Contacto'; 
 
  }
});

