var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola mundo!',
    mostrar: true,
    texto1: "Actualmente me encuentro realizando la carrera de Sistemas, por el momento manejo HTML, CSS, algunos frameworks de CSS, Python, Javascript y Java, me encanta el desarrollo de software y la implementación de los mismos en diferentes entornos. Interesado en nuevos lenguajes y el desarrollo de aplicaciones de escritorio. Siempre con buena actitud ante los desafíos y la rápida búsqueda de soluciones. Siempre buscando nuevos aprendizajes y retos para mejorar mis capacidades como desarrollador e individuo. Me puedo desenvolver sin problemas con el trabajo en equipo, ya qué es una buena fuente de retroalimentación.",
    info: ' Información',
    infoTexto: 'Actualmente no poseo experiencia laboral. Soy una persona muy calma y tranquila, ideal para la atención al cliente o la resolución de problemas que se plantean al momento. Poseo un buen manejo de responsabilidad a la hora de ejercer, tengo conocimientos avanzados sobre tecnología en general y un excelente uso de computadoras y algún que otro programa, ya sea Word, Excel, entre otras. Puedo desempeñarme en la programación, ya sea web o apps, con diferentes lenguajes y frameworks.',
    estudios: ' Estudios',
    nere: 'Instituto Nere echea (2003-2017)',
    nereInfo: 'Secundaria y Primaria con orientación a ciéncias sociales.',
    unla: 'Universidad Nacional de Lanús (2019-actualidad)',
    unlaInfo: 'Licenciatura en Sistemas',
    cursos: 'Cursos',
    codo: "Codo a Codo",
    codoInfo: 'FullStack Java Developer HTML5-CSS-Booststrap-JavaScript-Git-Scrum-MySQL-Vue.js-Java-AJAX-Spring',
    google: 'Introducción al desarrollo Web I',
    googleInfo: 'Historia de la web - Cómo funciona la web - Cómo se escribe una página web - Cómo se publica un sitio web - Cómo se escribe una página web bien estructurada',
    datos: 'Datos personales',
    date: '16 de noviembre de 1999',
    estado: 'Soltero',
    nacio: 'Argentino',
    habil: ' Habilidades',
    contact: 'Contacto'
  }
})
;

let btn = document.querySelector('.switchBtn-checkbox');

btn.addEventListener( 'change', function() {
 if (btn.checked==true)
 {
  //Navbar
  document.querySelector('.navbar').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){document.querySelector('.navbar').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);
  setTimeout(function(){document.querySelector('.inicio').innerHTML='Home';},900);
  setTimeout(function(){document.querySelector('#contacto').innerHTML='Contact';},900); 
  setTimeout(function(){document.querySelector('#cv').innerHTML='Resume';},900);


  // Mensaje hello world
  btn.disabled=true;
  document.querySelector('.texto').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){app.message='Hello world!'},900);
  setTimeout(function(){document.querySelector('.texto').classList.replace("animate__fadeOut","animate__fadeIn",)},1000)
  btn.disabled=true;
  setTimeout(() => {
    btn.disabled=false;
  }, 2500);

    // Curriculum
  document.querySelector('.textowea').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){app.texto1='texto en ingles'},900);
  setTimeout(function(){document.querySelector('.textowea').classList.replace("animate__fadeOut","animate__fadeIn",)},1000)


  document.querySelector('.containerCV').classList.replace("animate__fadeIn","animate__fadeOut");

  setTimeout(function(){app.info='Information'},900);
  setTimeout(function(){app.infoTexto='texto en ingles'},900);
  setTimeout(function(){app.estudios='Education'},900);
  setTimeout(function(){app.nereInfo='Primary and Secondary school.'},900);
  setTimeout(function(){app.unla='Universidad Nacional de Lanús (2019-present)'},900);
  setTimeout(function(){app.unlaInfo='Bachelor of Information Systems '},900);
  setTimeout(function(){app.cursos='Courses'},900);
  setTimeout(function(){app.estudios='Education'},900);
  setTimeout(function(){app.google='Introduction to Web Development'},900);
  setTimeout(function(){app.googleInfo='History of the web - How the web works - How to write a web page - How to publish a website - How to trite well structured web page'},900);
  setTimeout(function(){app.date='November 16th, 1999'},900);
  setTimeout(function(){app.estado='Single'},900);
  setTimeout(function(){app.nacio='Argentinian'},900);
  setTimeout(function(){app.habil='Skills'},900);
  setTimeout(function(){app.contact='Contact'},900);
  setTimeout(function(){app.datos='Personal information'},900);




  setTimeout(function(){document.querySelector('.containerCV').classList.replace("animate__fadeOut","animate__fadeIn",)},1000)

 }
 else
 { 
  //Navbar
  document.querySelector('.navbar').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){document.querySelector('.navbar').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);
  setTimeout(function(){document.querySelector('.inicio').innerHTML='Inicio';},900);
  setTimeout(function(){document.querySelector('#contacto').innerHTML='Contacto';},900); 
  setTimeout(function(){document.querySelector('#cv').innerHTML='Curriculum';},900);
  // Mensaje hello world
  document.querySelector('.texto').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){app.message='Hola mundo!'},900);
  setTimeout(function(){document.querySelector('.texto').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);
  btn.disabled=true;
  setTimeout(() => {
    btn.disabled=false;
  }, 2500);
  // Curriculum
  document.querySelector('.textowea').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){app.texto1='Actualmente me encuentro realizando la carrera de Sistemas, por el momento manejo HTML, CSS, algunos frameworks de CSS, Python, Javascript y Java, me encanta el desarrollo de software y la implementación de los mismos en diferentes entornos. Interesado en nuevos lenguajes y el desarrollo de aplicaciones de escritorio. Siempre con buena actitud ante los desafíos y la rápida búsqueda de soluciones. Siempre buscando nuevos aprendizajes y retos para mejorar mis capacidades como desarrollador e individuo. Me puedo desenvolver sin problemas con el trabajo en equipo, ya qué es una buena fuente de retroalimentación.'},900);
  setTimeout(function(){document.querySelector('.textowea').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);

  document.querySelector('.containerCV').classList.replace("animate__fadeIn","animate__fadeOut");

  setTimeout(function(){app.info='Información'},900);
  setTimeout(function(){app.infoTexto='Actualmente no poseo experiencia laboral. Soy una persona muy calma y tranquila, ideal para la atención al cliente o la resolución de problemas que se plantean al momento. Poseo un buen manejo de responsabilidad a la hora de ejercer, tengo conocimientos avanzados sobre tecnología en general y un excelente uso de computadoras y algún que otro programa, ya sea Word, Excel, entre otras. Puedo desempeñarme en la programación, ya sea web o apps, con diferentes lenguajes y frameworks.'},900);
  setTimeout(function(){app.estudios='Estudios'},900);
  setTimeout(function(){app.nereInfo='Secundaria y Primaria con orientación a ciéncias sociales.'},900);
  setTimeout(function(){app.unla='Universidad Nacional de Lanús (2019-actualidad)'},900);
  setTimeout(function(){app.unlaInfo='Licenciatura en Sistemas'},900);
  setTimeout(function(){app.cursos='Cursos'},900);
  setTimeout(function(){app.google='Introducción al desarrollo web I'},900);
  setTimeout(function(){app.googleInfo='Historia de la web - Cómo funciona la web - Cómo se escribe una página web - Cómo se publica un sitio web - Cómo se escribe una página web bien estructurada'},900);
  setTimeout(function(){app.date='16 de noviembre de 1999'},900);
  setTimeout(function(){app.estado='Soltero'},900);
  setTimeout(function(){app.nacio='Argentino'},900);
  setTimeout(function(){app.habil='Habilidades'},900);
  setTimeout(function(){app.contact='Contacto'},900);
  setTimeout(function(){app.datos='Datos personales'},900);

  
  
  
  
  setTimeout(function(){document.querySelector('.containerCV').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);

  
 
  }
});

