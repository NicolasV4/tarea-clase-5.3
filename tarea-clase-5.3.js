const $aceptar = document.querySelector('#aceptar');

function sumar (numero1,numero2,numero3){
    return numero1 + numero2 + numero3
};

$aceptar.onclick = function (){
    const $horasvideo1 = Number(document.querySelector('#horas-video1').value)
    const $minutosvideo1 = Number(document.querySelector('#minutos-video1').value)
    const $segundosvideo1 = Number(document.querySelector('#segundos-video1').value)


    console.log(sumar($horasvideo1,$minutosvideo1,$segundosvideo1))
    document.querySelector('#resultado').innerText = sumar($horasvideo1,$minutosvideo1,$segundosvideo1);
    return false;
}



