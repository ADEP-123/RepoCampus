Algoritmo Lista_Enteros
	Escribir "Ingrese la lista de numeros uno a uno, para finalizar ingrese el -1"
	Leer num
	conPar = 0
	conImpar = 0
	Mientras num <> -1 Hacer
		Si num % 2 = 0 Entonces
			Escribir "El numero " num " es par"
			conPar = conPar + 1  
		SiNo
			Escribir "El numero " num " es impar"
			conImpar = conImpar + 1
		Fin Si
		Escribir "La cantidad de numeros pares que lleva es: " conPar
		Escribir "La cantidad de numeros impares que lleva es: " conImpar
		Escribir "Ingrese el siguiente numero entero"
		Leer num
	Fin Mientras
	Escribir "La cantidad total de numeros pares es: " conPar
	Escribir "La cantidad total de numeros impares es: " conImpar
FinAlgoritmo
