function cambiaColor(elemento, color) {
elemento.style.backgroundColor = color;
}
const elemento1 = document.querySelector('#div-1');
const elemento2 = document.querySelector('#div-2');
const elemento3 = document.querySelector('#div-3');
const elemento4 = document.querySelector('#div-4');

elemento1.addEventListener ('click', function (){
cambiaColor (elemento1, 'black')
});

elemento2.addEventListener ('click', function (){
    cambiaColor (elemento2, 'black')
});
elemento3.addEventListener ('click', function (){
    cambiaColor (elemento3, 'black')
});
elemento4.addEventListener ('click', function (){
    cambiaColor (elemento4, 'black')
});