let fotos = document.querySelectorAll('.grid-gallery__item');
let spinner = document.querySelector('.spinner');
//console.log(spinner);
//console.log(fotos);

window.onload = function () {
  let times = 0;
  for (let i = 0; i < fotos.length; i++) {
    times += 200;
    setTimeout(()=>{ fotos[i].style.display= 'block';}, times)
    //console.log(times)
  }
  setTimeout(()=>{ spinner.style.display= 'none';}, times) 
};