const $aceptar = document.querySelector('#aceptar');

$aceptar.onclick = function (){
    const horas = document.querySelectorAll('.horas');
    const minutos = document.querySelectorAll('.minutos');
    const segundos = document.querySelectorAll('.segundos');

    
    let sumatoriaDeHoras = 0; //calcula valor entero de horas
    for(let i = 0; i < horas.length; i++){                
        sumatoriaDeHoras += Number(horas[i].value);

    }
    

    let sumatoriaDeMinutos = 0; //calcula valor entero de minutos
    for(let i = 0; i < minutos.length; i++){              
        sumatoriaDeMinutos += Number(minutos[i].value);

    }
    

    let sumatoriaDeSegundos = 0; //calcula calcula valor entero de segundos
    for(let i = 0; i < segundos.length; i++){             
        sumatoriaDeSegundos += Number(segundos[i].value);

    }

    // Convierto todos los valores a segundos para poder sumarlos

    const horasEnSegundos = sumatoriaDeHoras * 3600;
    const minutosEnSegundos = sumatoriaDeMinutos * 60;
    
    let segundosTotalesDeVideo = horasEnSegundos + minutosEnSegundos + sumatoriaDeSegundos;

    

    let minutosDeSegundos = Math.floor(segundosTotalesDeVideo / 60) // calcula total de segundos y la totalidad de los minutos
    const segundosRestantes = segundosTotalesDeVideo % 60

    const horasDeMinutos = Math.floor(minutosDeSegundos / 60) // calcula la totalidad de horas en base a los minutos resantes
    minutosDeSegundos = minutosDeSegundos % 60

    document.querySelector('#resultado').innerText = (horasDeMinutos + ' horas ' + minutosDeSegundos + ' minutos ' + segundosRestantes + ' segundos ');

    return false;









}   
    
    

