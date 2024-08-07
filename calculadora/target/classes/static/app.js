document.addEventListener('DOMContentLoaded', function() {
    const pantalla = document.getElementById('pantalla');
    const teclados = document.querySelectorAll('.teclados');
    const operaciones = document.querySelectorAll('.operacion');
    const resultado = document.querySelector('.resultado');
    const botonBorrar = document.getElementById('botonBorrar');

    let operacionActual = '';
    let valorActual = '';
    let valorAnterior = '';
    let operacionPendiente = false;

    teclados.forEach(tecla => {
        tecla.addEventListener('click', function() {
          
            if (operacionPendiente) {
                valorActual = '';
                operacionPendiente = false;
            }
            valorActual += this.textContent;
            actualizarPantalla();
        });
    });

    operaciones.forEach(operacion => {
        operacion.addEventListener('click', function() {
            if (valorActual === '') return; // Evitar que se presione operador sin número
            if (valorAnterior !== '') {
                calcular();
            }
            operacionActual = this.dataset.operacion;
            valorAnterior = valorActual;
            operacionPendiente = true;
        });
    });

    resultado.addEventListener('click', calcular);

botonBorrar.addEventListener('click', function(){
    valorActual = '';
    valorAnterior = '';
    operacionActual = '';
    operacionPendiente = false;
    actualizarPantalla();
})

    function calcular() {
      
        if (valorAnterior === '' || valorActual === '') return;
        let resultado;
        const numeroAnterior = parseFloat(valorAnterior);
        const numeroActual = parseFloat(valorActual);

        switch (operacionActual) {
            case '+':
                resultado = numeroAnterior + numeroActual;
                break;
            case '-':
                resultado = numeroAnterior - numeroActual;
                break;
            case '*':
                resultado = numeroAnterior * numeroActual;
                break;
            case '/':
                if(numeroActual === 0){
                    pantalla.value = "Error: División por cero";
                    return;
                }
                resultado = numeroAnterior / numeroActual;
                break;
            default:
                return;
        }
        
        valorActual = resultado.toString();
        operacionActual = '';
        operacionPendiente = true;
        actualizarPantalla();
    }

    function actualizarPantalla() {
        pantalla.value = valorActual;
    }
});