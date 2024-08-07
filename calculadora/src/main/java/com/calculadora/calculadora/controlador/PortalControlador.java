package com.calculadora.calculadora.controlador;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PortalControlador {

     @GetMapping String index(){
         return  "index";
     }

}
