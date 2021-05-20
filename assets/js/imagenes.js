let fotos = document.querySelectorAll('.grid-gallery__item');

//console.log(fotos);

let times = 0;
for (let i = 0; i < fotos.length; i++) {
  times += 200;
  setTimeout(()=>{ fotos[i].style.display= 'block';}, times)
}
