Algoritmo Honorarios_Docentes
	Escribir "Ingrese el numero de docentes"
	Leer N
	totalPagar = 0
	cantA = 0
	cantB = 0
	cantC = 0
	Para i <- 1 Hasta N Con Paso 1 Hacer
		Escribir "Ingrese el nombre del docente: "
		Leer nombre
		Escribir "Ingrese el documento de identidad de " nombre ": "
		Leer cedula
		Escribir "Ingrese la categoría del docente " nombre " de la siguiente manera: "
		Escribir "1:A (Pago por hora 25000$)"
		Escribir "2:B (Pago por hora 35000$)"
		Escribir "3:C (Pago por hora 50000$)"
		Leer categoria
		Escribir "Ingrese la cantidad de horas laboradas por " nombre " : "
		Leer horas
		Si categoria == 1 Entonces
			pago = horas * 25000
			cantA = cantA + 1
		SiNo
			Si categoria == 2 Entonces
				pago = horas * 35000
				cantB = cantB + 1
			SiNo
				pago = horas * 50000
				cantC = cantC + 1
			Fin Si
		Fin Si
		totalPagar = totalPagar + pago
		Escribir "El valor a pagar para el docente " nombre " es de: $" pago
	Fin Para
	Escribir "El total a pagar para todos los docentes es de: $" totalPagar
	Escribir "La cantidad de docentes en la categoria A es de: " cantA
	Escribir "La cantidad de docentes en la categoria B es de: " cantB
	Escribir "La cantidad de docentes en la categoria C es de: " cantC
	
	
	
FinAlgoritmo
