 // generacion del footer

 let pie = `<div class="container"><p> &copy; 2021 - Isabel Ferreiro Abeijón - CV</p><a href="https://github.com/A19IsabelFA/CurriculumWeb" onclick="https://github.com/A19IsabelFA/CurriculumWeb" target="_blank"><i title="github" class="fab fa-github"></i></a></div>`;

 document.querySelector('footer').innerHTML = pie;

 // boton menu

 let btnmenumovil = document.getElementById('menuMovil');
 let menu = document.getElementById('menu');
 btnmenumovil.addEventListener('click', () => {
   if (menu.classList.contains('menu')) {
     menu.style.display = 'block';
     menu.classList.replace('menu', 'desplegable');
   } else {
     menu.style.display = 'none';
     menu.classList.replace('desplegable', 'menu');
   }
 })

 /* spinner */
 let spinner = document.querySelector('.spinner');
 //console.log(spinner);
 window.onload = function () {
   spinner.style.display = 'none';
 };

 /* abrir ventana en nueva ventana (solo enlaces fuera de la web) */

/*  let links = document.querySelectorAll('a[target="_blank"]');
 for (let i = 0, length = links.length; i < length; i++) {
   links[i].addEventListener('mouseover', mensaje, false, i);
 }

 function mensaje(e) {
   let x = confirm('El enlace se abrira en una pestaña nueva');
   if (x == true) {
    links[e].addEventListener('onclick', mensaje, false);
   } else {
     links[e].removeAttribute('target');
     links[e].addEventListener('onclick', mensaje, false);
   }
 }
 */

let links = document.querySelectorAll('a[target="_blank"]');
 for (let i = 0, length = links.length; i < length; i++) {
   links[i].removeAttribute('target');
 }