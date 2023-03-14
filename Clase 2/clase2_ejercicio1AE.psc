Algoritmo Subsidio_En_Salario
	Escribir "Ingrese el nombre del trabajador:"
	Leer nombre
	Escribir "ingrese el salario del trabajador:"
	Leer salario
	Si salario<=1200000 Entonces
		Escribir "Para el trabajador " nombre " dado que su salario es menor a 1200000$ (" salario "$) su subsidio corresponde a: 120000$ dando un salario total de " salario+120000 "$."
	SiNo
		Escribir "Para el trabajador " nombre " dado que su salario es mayor a 1200000$ (" salario "$) no tiene subsidio de transporte dando un salario total de " salario "$."
	Fin Si

FinAlgoritmo
