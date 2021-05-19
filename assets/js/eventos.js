 // generacion del footer

let pie = `<div class="container">
<p> &copy; 2021 - Isabel Ferreiro Abeijón - CV</p>
<a href="https://github.com/A19IsabelFA/CurriculumWeb" target="_blank"><i class="fab fa-github"></i></a>
</div>`;
 
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