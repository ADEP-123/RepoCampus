<?php

/* echo 'texto a imprimir'; */
$texto = 'Mundo';
printf('Hola %s', $texto);
$mensaje = sprintf('Hola %s', $texto);

/**
 * Como definir constantes en php
 */

define('MENSAJE', 'parangaricutirimicuaro');
/* const MENSAJE = 'mundo'; */
printf('%s', MENSAJE);

/**
 * vardum permite obtener el tipo de dato
 */
var_dump($texto);

/**
 * Declaracion estricta
 */


 $nombre = (string) 'este es string nea';


 /**
  * Numeros
  */
 $numero1 = 20;
 $numero2 = 30;
 $numero3 = 30;
 $numero4 = '30';

 echo '<br/>';
 var_dump($numero1 > $numero2);
 echo '<br/>';

 var_dump($numero1 < $numero2);
 echo '<br/>';

 var_dump($numero1 >= $numero2);
 echo '<br/>';
 
 var_dump($numero1 <= $numero2);
 echo '<br/>';

 var_dump($numero2 == $numero3);
 echo '<br/>';

 var_dump($numero2 == $numero4);
 echo '<br/>';

 var_dump($numero2 === $numero4);
 echo '<br/>';
?>