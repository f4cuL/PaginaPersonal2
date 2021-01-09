var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola mundo!',
    mostrar: true,
    texto1: "Actualmente me encuentro realizando la carrera de Sistemas, por el momento manejo HTML, CSS, algunos frameworks de CSS, Python, Javascript y Java, me encanta el desarrollo de software y la implementación de los mismos en diferentes entornos. Interesado en nuevos lenguajes y el desarrollo de aplicaciones de escritorio. Siempre con buena actitud ante los desafíos y la rápida búsqueda de soluciones. Siempre buscando nuevos aprendizajes y retos para mejorar mis capacidades como desarrollador e individuo. Me puedo desenvolver sin problemas con el trabajo en equipo, ya qué es una buena fuente de retroalimentación."
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
  document.querySelector('#cv').innerHTML='Resume'
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
  document.querySelector('#cv').innerHTML='Curriculum'
 
  }
});

