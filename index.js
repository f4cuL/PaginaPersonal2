var app = new Vue({
  el: '#app',
  data: {
    message: 'Hola mundo!',
    mostrar: true,
    texto1: "Me encuentro realizando la carrera de Sistemas, por el momento manejo HTML, CSS, algunos frameworks de CSS, Python, Javascript y Java, me encanta el desarrollo de software y la implementación de los mismos en diferentes entornos. Interesado en nuevos lenguajes y el desarrollo de aplicaciones de escritorio. Siempre con buena actitud ante los desafíos y la rápida búsqueda de soluciones. Siempre buscando nuevos aprendizajes y retos para mejorar mis capacidades como desarrollador e individuo. Me puedo desenvolver sin problemas con el trabajo en equipo, ya qué es una buena fuente de retroalimentación.",
    info: 'Información',
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
    contact: 'Contacto',
    webpersonalinfo: 'Pagina personal con HTML, Javascript y Bootstrap',
    motorudymensajeria: 'Página web de mensajeria para enprendimiento',
    curriculuminfo: 'Curriculum web realizado con HTML y Bootstrap',
    pythongame: 'Juego realizado con Python con PyGame',
    javascriptlogin: 'Validación básica de JavaScript',
    bootstrapform: 'Formulario realizado en bootstrap'
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
  setTimeout(function(){app.texto1='At the present time, I am studying System Development. I can handle HTML, CSS, some CSS’s frameworks, Python, Javascript and Java. I love developing software and and applying them on different enviorments. I am interested in new languages and desktop applications development. I’m always positive and capable of finding fast solutions to any trouble. I am always seeking for new learnings and challenges to improve my habilities as a developer and as a human being. I have no troubles working with a team since it is a great source of feedback. '},900);
  setTimeout(function(){document.querySelector('.textowea').classList.replace("animate__fadeOut","animate__fadeIn",)},1000)


  document.querySelector('.containerCV').classList.replace("animate__fadeIn","animate__fadeOut");

  setTimeout(function(){app.info=' Information'},900);
  setTimeout(function(){app.infoTexto='Nowadays i don’t have working experience. I am fit to work as a customer supporter since i am a really calm person. I have great knowledge about technology and a great usage of computers and softwares like Excel, Word, etc. I can perform good in web and apps programming, using different languages and frameworks.'},900);
  setTimeout(function(){app.estudios=' Education'},900);
  setTimeout(function(){app.nereInfo='Primary and Secondary school.'},900);
  setTimeout(function(){app.unla='Universidad Nacional de Lanús (2019-present)'},900);
  setTimeout(function(){app.unlaInfo='Bachelor of Information Systems '},900);
  setTimeout(function(){app.cursos=' Courses'},900);
  setTimeout(function(){app.estudios=' Education'},900);
  setTimeout(function(){app.google='Introduction to Web Development'},900);
  setTimeout(function(){app.googleInfo='History of the web - How the web works - How to write a web page - How to publish a website - How to trite well structured web page'},900);
  setTimeout(function(){app.date='November 16th, 1999'},900);
  setTimeout(function(){app.estado='Single'},900);
  setTimeout(function(){app.nacio='Argentinian'},900);
  setTimeout(function(){app.habil='Skills'},900);
  setTimeout(function(){app.contact='Contact'},900);
  setTimeout(function(){app.datos='Personal information'},900);
  setTimeout(function(){app.webpersonalinfo='Personal web made with HTML, Javascript and Bootstrap'},900);
  setTimeout(function(){app.motorudymensajeria='Web about entrepreneurship of messenger service'},900);
  setTimeout(function(){app.curriculuminfo='Web resume made with  HTML and Bootstrap'},900);
  setTimeout(function(){app.pythongame='Game made with Python and the library PyGame'},900);
  setTimeout(function(){app.javascriptlogin='Basic validation with Javascript'},900);
  setTimeout(function(){app.bootstrapform='Form made with Bootstrap'},900);
  




  setTimeout(function(){document.querySelector('.containerCV').classList.replace("animate__fadeOut","animate__fadeIn",)},1000)

  document.querySelector('.section3').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){document.querySelector('.section3').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);
  
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
  setTimeout(function(){app.texto1='Me encuentro realizando la carrera de Sistemas, por el momento manejo HTML, CSS, algunos frameworks de CSS, Python, Javascript y Java, me encanta el desarrollo de software y la implementación de los mismos en diferentes entornos. Interesado en nuevos lenguajes y el desarrollo de aplicaciones de escritorio. Siempre con buena actitud ante los desafíos y la rápida búsqueda de soluciones. Siempre buscando nuevos aprendizajes y retos para mejorar mis capacidades como desarrollador e individuo. Me puedo desenvolver sin problemas con el trabajo en equipo, ya qué es una buena fuente de retroalimentación.'},900);
  setTimeout(function(){document.querySelector('.textowea').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);

  document.querySelector('.containerCV').classList.replace("animate__fadeIn","animate__fadeOut");

  setTimeout(function(){app.info='Información'},900);
  setTimeout(function(){app.infoTexto='Actualmente no poseo experiencia laboral. Soy una persona muy calma y tranquila, ideal para la atención al cliente o la resolución de problemas que se plantean al momento. Poseo un buen manejo de responsabilidad a la hora de ejercer, tengo conocimientos avanzados sobre tecnología en general y un excelente uso de computadoras y algún que otro programa, ya sea Word, Excel, entre otras. Puedo desempeñarme en la programación, ya sea web o apps, con diferentes lenguajes y frameworks.'},900);
  setTimeout(function(){app.estudios=' Estudios'},900);
  setTimeout(function(){app.nereInfo='Secundaria y Primaria con orientación a ciéncias sociales.'},900);
  setTimeout(function(){app.unla='Universidad Nacional de Lanús (2019-actualidad)'},900);
  setTimeout(function(){app.unlaInfo='Licenciatura en Sistemas'},900);
  setTimeout(function(){app.cursos=' Cursos'},900);
  setTimeout(function(){app.google='Introducción al desarrollo web I'},900);
  setTimeout(function(){app.googleInfo='Historia de la web - Cómo funciona la web - Cómo se escribe una página web - Cómo se publica un sitio web - Cómo se escribe una página web bien estructurada'},900);
  setTimeout(function(){app.date='16 de noviembre de 1999'},900);
  setTimeout(function(){app.estado='Soltero'},900);
  setTimeout(function(){app.nacio='Argentino'},900);
  setTimeout(function(){app.habil=' Habilidades'},900);
  setTimeout(function(){app.contact=' Contacto'},900);
  setTimeout(function(){app.datos='Datos personales'},900);
  setTimeout(function(){app.webpersonalinfo='Pagina personal con HTML, Javascript y Bootstrap'},900);
  setTimeout(function(){app.motorudymensajeria='Página web de mensajeria para enprendimiento'},900);
  setTimeout(function(){app.curriculuminfo='Curriculum web realizado con HTML y Bootstrap'},900);
  setTimeout(function(){app.pythongame='Juego realizado con Python con PyGame'},900);
  setTimeout(function(){app.javascriptlogin='Validación básica de JavaScript'},900);
  setTimeout(function(){app.bootstrapform='Formulario hecho en Bootstrap'},900);
  
  setTimeout(function(){document.querySelector('.containerCV').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);

  document.querySelector('.section3').classList.replace("animate__fadeIn","animate__fadeOut");
  setTimeout(function(){document.querySelector('.section3').classList.replace("animate__fadeOut","animate__fadeIn",)},1000);
  
 
  }
});

