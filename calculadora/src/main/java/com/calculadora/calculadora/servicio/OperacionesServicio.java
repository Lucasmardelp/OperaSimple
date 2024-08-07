package com.calculadora.calculadora.servicio;

import org.springframework.stereotype.Service;

@Service
public class OperacionesServicio {


    public int suma(int numero1, int numero2, String operacion ){
       int resultado;
        switch (operacion){

            case "suma":
               resultado = numero1 + numero2;
                break;
            case "resta":
                resultado = numero1 - numero2;
                break;
            case "multiplicación":
                resultado = numero1 * numero2;
                break;
            case "division":
                resultado = numero1 / numero2;
                break;
            default:
                resultado = 0;
                break;

        }
       return resultado;
    }

}
