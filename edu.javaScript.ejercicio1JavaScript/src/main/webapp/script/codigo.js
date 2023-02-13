/**
 * CODIGO JAVASCRIPT
 */

// EJERCICIO 1
/*
// Mostramos una alerta para que se tenga activado el soporte de javascript
alert("Comprueba que tengas activado el soporte de JavaScript!");
// Imprimimos por consola el siguiente texto
console.log("Hola Mundo!");
// Escribimos un mensaje en el documento
document.write("Soy el primer script");
*/

// ----------------------------------------------------------------------
// EJERCICIO 2
// Imprimimos por consola el siguiente texto
console.log("Hola Mundo!");

// Mostramos una alerta para que se tenga activado el soporte de javascript
alert("Comprueba que tengas activado el soporte de JavaScript!");

 // Creamos una variable que almacenará el mensaje que se muestra al usuario
 let mensaje = "Soy el primer script";
 // Mostramos el mensaje en una alerta
 alert(mensaje);
 
 // ---------------------------------------------------------------------
 // EJERCICIO 3
 // Creamos un array llamado meses que contendrá los nombres de los 12 mesesd del año
 let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", 
 	"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

 // Mostramos por consola los 12 nombres utilizando un bucle for
 for(let step=0; step < meses.length; step++){
	 console.log(meses[step]); // Mostramos por consola el mes
 }
 
 // ---------------------------------------------------------------------
 // EJERCICIO 4
 // Tenemos un array llamado valores
 var valores = [true, 5, false, "hola", "adios", 2];
 
 // Determinar cual de los dos elementos de texto es mas largo
 // Declaramos las variables necesarias
 let indiceArray; // Contendra el indice del string mas largo
 let numeroCaracteresMasLargo = 0; // Contendra el numero de caracteres del string mas largo
 // Vamos a empezar recorriendo el array y comprobando si lo que tenemos es un string o no
 // De esta forma funcionará con arrays mas largos
 for(let i=0; i < valores.length; i++){
	 // Comprobamos si es string
	 if(typeof valores[i] == "string"){
		 // Comprobamos si el string es mas grande que el numero de la variable numeroCaracteresMasLargo
	 	if(valores[i].length > numeroCaracteresMasLargo){
			 indiceArray = i; // Le asignamos a la variable el valor del indice del string
			 numeroCaracteresMasLargo = valores[i].length;
		 }
	 }
 }
 // Imprimimos por consola el string mas largo y su numero de caracteres
 console.log("El texto mas largo es: " + valores[indiceArray] + " y su longitud es: " + numeroCaracteresMasLargo);
 
 // Utilizando los valores booleanos del array, tenemos que obtener un resultado true y otro false, para ello declaramos dos variables
 let resultadoBoolean1 = valores[0] && valores[2]; // Esta variable almacenará false
 let resultadoBoolean2 = valores[0] || valores[2]; // Esta variable almacenará true
 
 // Imprimimos por consola los dos resultados
 console.log("Resultado true: " + resultadoBoolean2);
 console.log("Resultado false: " + resultadoBoolean1);
 
 // Resultado de las cinco operaciones matematicas utilizando los dos elementos numericos del array
 let suma = valores[1] + valores[valores.length - 1];
 let resta = valores[5] - valores[1];
 let multiplicacion = valores[1] * valores[5];
 let division = valores[1] / valores[5];
 let resto = valores[1] % valores[5];
 console.log(suma);
 console.log(resta);
 console.log(multiplicacion);
 console.log(division);
 console.log(resto);
 
 // Incremento y decremento al primer valor numérico
 let incremento = ++valores[1];
 let decremento = --valores[1];
 // Imprimimos
 console.log("Incremento: " + incremento);
 console.log("Decremento: " + decremento);
 
 // Exponencia al segunda valor numérico, siendo el exponente el primer valor numérico
 let exponencia = valores[5]**valores[1];
 // Imprimimos
 console.log("Exponencia: Base: " + valores[5] + "; Exponente: " + valores[1] + "; Resultado: " + exponencia);
 
 // ---------------------------------------------------------------------
 // EJERCICIO 5
 // Completar los ifs
 var numero1 = 5;
 var numero2 = 8;
 
 if(!(numero1 > numero2)){ // (numero1 < numero2)
	 console.log("numero1 no es mayor que numero2");
 }
 if(numero2 > 0){
	 console.log("numero2 es positivo");
 }
 if(numero1 < 0 || numero1 != 0){ // (numero1 != 0)
	 console.log("numero1 es negativo o distinto de cero");
 }
 if(numero1 + 1 < numero2){
	 console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
 }
 