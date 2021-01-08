
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola Vue!',
    mostrar: true
  }
})
;

let btn = document.querySelector('.onoffswitch-checkbox');
let text = document.querySelector('.texto');

btn.addEventListener( 'change', function() {
 if (btn.checked==true)
 {
  text.classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){app.message='Hola vue!'},900);
  setTimeout(function(){text.classList.replace("animate__fadeOut","animate__fadeIn",)},1000)
  btn.disabled=true;
  setTimeout(() => {
    btn.disabled=false;
  }, 5000);
  document.querySelector('.inicio').innerHTML='Inicio'; 
 }
 else
 {
  btn.disabled=true;
  text.classList.replace("animate__fadeIn","animate__fadeOut")
  setTimeout(function(){app.message='Hello vue!'},900);
  setTimeout(function(){text.classList.replace("animate__fadeOut","animate__fadeIn",)},1000)
  btn.disabled=true;
  setTimeout(() => {
    btn.disabled=false;
  }, 5000);
  document.querySelector('.inicio').innerHTML='Home';    
 }
});
