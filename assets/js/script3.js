const elemento = document.getElementById('key')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    elemento.style.backgroundColor = 'pink';
    } else if (event.key === 's') {
    elemento.style.backgroundColor = 'orange';
    }
    else if (event.key === 'd') {
        elemento.style.backgroundColor = 'lightblue';
        }
    })

    function creaDiv(){
    const elemento2 = document.getElementById('key2')
        elemento2.style.width = '200px';
        elemento2.style.height = '200px';
        elemento2.style.border = '2px black solid';   
    }
    document.addEventListener('keydown', function(event){
        if (event.key === 'q') {
            creaDiv()
            elemento.style.backgroundColor = 'purple';
        } else if (event.key === 'w') {
            creaDiv()
            elemento.style.backgroundColor = 'grey';
        }
        else if (event.key === 'e') {
            creaDiv()
            elemento.style.backgroundColor = 'brown';
        }  
    })