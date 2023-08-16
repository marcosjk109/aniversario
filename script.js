let contador = 1;

setInterval( function(){
    document.getElementById('slide' + contador).checked = true;
    contador++;

    if(counter > 7 ) {
        contador = 1;
    }
}, 3000 );
