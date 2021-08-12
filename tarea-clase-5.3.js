const $aceptar = document.querySelector('#aceptar');

$aceptar.onclick = function (){
    const horas = document.querySelectorAll('.horas');
    const minutos = document.querySelectorAll('.minutos');
    const segundos = document.querySelectorAll('.segundos');

    
    let sumatoriaDeHoras = 0; //calcula total de horas en decimal
    for(let i = 0; i < horas.length; i++){                
        sumatoriaDeHoras += Number(horas[i].value);

    }
    

    let sumatoriaDeMinutos = 0; //calcula total de minutos en decimal
    for(let i = 0; i < minutos.length; i++){              
        sumatoriaDeMinutos += Number(minutos[i].value);

    }
    

    let sumatoriaDeSegundos = 0; //calcula total de segundos en decimal
    for(let i = 0; i < segundos.length; i++){             
        sumatoriaDeSegundos += Number(segundos[i].value);

    }

    // Convierto todos los valores a segundos para poder sumarlos

    const horasEnSegundos = sumatoriaDeHoras * 3600;
    const minutosEnSegundos = sumatoriaDeMinutos * 60;
    
    let segundosTotalesDeVideo = horasEnSegundos + minutosEnSegundos + sumatoriaDeSegundos;

    console.log(segundosTotalesDeVideo); 

    let contadoHoras = 0;         //almacena cantidad de horas
    while (segundosTotalesDeVideo>3600){
        for (let i = 3600; segundosTotalesDeVideo >= i; contadoHoras++){
            segundosTotalesDeVideo = segundosTotalesDeVideo - i;

        }
    }

    let contadoMinutos = 0;  //almacena cantidad de minutos luego de descontar las horas
    while (segundosTotalesDeVideo>60){
        for (segundosTotalesDeVideo; segundosTotalesDeVideo >= 60; contadoMinutos++){
            segundosTotalesDeVideo = segundosTotalesDeVideo - 60

        }
    }

    document.querySelector('#resultado').innerText = (contadoHoras + ' horas ' + contadoMinutos + ' minutos ' + segundosTotalesDeVideo + ' segundos ');

    return false;









}   
    
    

