/**
 * CODIGO JAVASCRIPT
 */

// EJERCICIO 1
function ejercicio1() {
	// Mostramos una alerta para que se tenga activado el soporte de javascript
	alert("Comprueba que tengas activado el soporte de JavaScript!");
	// Imprimimos por consola el siguiente texto
	console.log("Hola Mundo!");
	// Escribimos un mensaje en el documento
	document.write("Soy el primer script");
}


// ----------------------------------------------------------------------
// EJERCICIO 2
function ejercicio2() {
	// Imprimimos por consola el siguiente texto
	console.log("Hola Mundo!");

	// Mostramos una alerta para que se tenga activado el soporte de javascript
	alert("Comprueba que tengas activado el soporte de JavaScript!");

	// Creamos una variable que almacenará el mensaje que se muestra al usuario
	let mensaje = "Soy el primer script";
	// Mostramos el mensaje en una alerta
	alert(mensaje);
}


// ---------------------------------------------------------------------
// EJERCICIO 3
function ejercicio3() {
	// Creamos un array llamado meses que contendrá los nombres de los 12 mesesd del año
	let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo",
		"Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

	// Mostramos por consola los 12 nombres utilizando un bucle for
	for (let step = 0; step < meses.length; step++) {
		console.log(meses[step]); // Mostramos por consola el mes
	}
}



// ---------------------------------------------------------------------
// EJERCICIO 4
function ejercicio4() {
	// Tenemos un array llamado valores
	var valores = [true, 5, false, "hola", "adios", 2];

	// Determinar cual de los dos elementos de texto es mas largo
	// Declaramos las variables necesarias
	let indiceArray; // Contendra el indice del string mas largo
	let numeroCaracteresMasLargo = 0; // Contendra el numero de caracteres del string mas largo
	// Vamos a empezar recorriendo el array y comprobando si lo que tenemos es un string o no
	// De esta forma funcionará con arrays mas largos
	for (let i = 0; i < valores.length; i++) {
		// Comprobamos si es string
		if (typeof valores[i] == "string") {
			// Comprobamos si el string es mas grande que el numero de la variable numeroCaracteresMasLargo
			if (valores[i].length > numeroCaracteresMasLargo) {
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
	let exponencia = valores[5] ** valores[1];
	// Imprimimos
	console.log("Exponencia: Base: " + valores[5] + "; Exponente: " + valores[1] + "; Resultado: " + exponencia);
}


// ---------------------------------------------------------------------
// EJERCICIO 5
// Completar los ifs
function ejercicio5() {
	var numero1 = 5;
	var numero2 = 8;

	if (!(numero1 > numero2)) { // (numero1 < numero2)
		console.log("numero1 no es mayor que numero2");
	}
	if (numero2 > 0) {
		console.log("numero2 es positivo");
	}
	if (numero1 < 0 || numero1 != 0) { // (numero1 != 0)
		console.log("numero1 es negativo o distinto de cero");
	}
	if (numero1 + 1 < numero2) {
		console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
	}
}


// ---------------------------------------------------------------------
// EJERCICIO 6
// Utilizando la estructura for, crear un script que calcule el factorial de un número entero.

// Pedimos un numero al usuario y lo guardamos en una variable
function ejercicio6() {
	let numero = prompt("Introduce un numero: ");
	// Si no se introduce ningun numero vamos a asignarle a la variable el valor 0
	numero = (numero == "" || numero == null) ? "0" : numero;

	// Creamos la variable donde vamos a ir metiendo el factorial y hacemos el bucle
	let factorial = 1;
	for (let i = numero; i >= 1; i--) {
		// A la variable factorial le vamos añadiendo el resultado de multiplicar la variable i por el factorial
		factorial *= i;
	}

	// Mostramos el factorial
	document.write(numero + "! = " + factorial);
}


// ---------------------------------------------------------------------
// EJERCICIO 7
// Escribir el código de una función a la que se pasa como parámetro un número entero y 
// devuelve como resultado una cadena de texto que indica si el número es par o impar. 
// Mostrar por pantalla el resultado devuelto por la función.

function ejercicio7() {
	// Pedimos el numero, si no se introduce nada le asignamos el valor 0
	let captura = prompt("Introduce un numero entero: ", 0);
	let numeroEntero = parseInt(captura); // Si no se puede convertir devolverá NaN
	
	// Bucle que se ejercutara mientras no se introduzca un numero entero
	while(isNaN(numeroEntero)){
		captura = prompt("** Error: Hay que introducir un numero entero **\nIntroduce un numero entero: ", 0);
		numeroEntero = parseInt(captura);
	}
	// Llamamos a una funcion que comprobara si el numero es par o impar
	if(esPar(numeroEntero))
		document.write("El numero: "+numeroEntero+ " es par")
	else
		document.write("El numero: "+numeroEntero+ " es impar")
}

function esPar(numeroEntero) {
	// Si es par devolvera true
	if(numeroEntero % 2 == 0)
		return true;
	
	// Si no ha salido ya será porque es impar
	return false
}


// ---------------------------------------------------------------------
// EJERCICIO 8
// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento.
// A partir de la cadena que se le pasa, 
// la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

function ejercicio8(){
	// Vamos a pedir al usuario una cadena de texto
	let captura = prompt("Introduzca una cadena de texto: ");
	
	// Vamos a controlar que la cadena de texto no sean numeros
	while(!isNaN(parseInt(captura))){
		captura = prompt("** Error: Hay que introducir una cadena de texto **\nIntroduzca una cadena de texto: ");
	}
	
	// Ahora vamos a llamar a una funcion y le vamos a pasar como parametro la cadena de texto
	informacionCadena(captura);
}

function informacionCadena(cadenaTexto){
	// Vamos a recorrer la cadena y comprobando si cada caracter es mayuscula, minuscula
	// Si es mayuscula asignaremos la variable como true
	// Si es minuscula asignaremos la variable como true
	let esMayuscula = false, esMinuscula = false;
	let letra = "";
	for(let i=0; i < cadenaTexto.length; i++){
		letra = cadenaTexto.charAt(i);
		
		if(letra == " "){} // No hacemos nada
		else if(letra == letra.toUpperCase())
			esMayuscula = true;
		else if(letra == letra.toLowerCase()) // Podriamos poner un else
			esMinuscula = true;
	}
	
	// Ahora vamos a mostrar
	// Primero si las dos variables estan a true vamos a devolver que es una mezcla de ambas
	if(esMayuscula == true && esMinuscula == true)
		document.write("El texto: \"" + cadenaTexto + "\" esta en mayusculas y en minusculas");
	else if(esMayuscula == true)
		document.write("El texto: \"" + cadenaTexto + "\" esta en mayusculas");
	else if(esMinuscula == true)
		document.write("El texto: \"" + cadenaTexto + "\" esta en minusculas");
}

