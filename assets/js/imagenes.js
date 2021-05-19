let fotos = document.querySelectorAll('.grid-gallery__item');
let spinner = document.querySelector('.spinner');
//console.log(spinner);
//console.log(fotos);

let times = 0;
for (let i = 0; i < fotos.length; i++) {
  times += 200;
  setTimeout(()=>{ fotos[i].style.display= 'block';}, times)
}

window.onload = function () {
spinner.style.display= 'none';
};