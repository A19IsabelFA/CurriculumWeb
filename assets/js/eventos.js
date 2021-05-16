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