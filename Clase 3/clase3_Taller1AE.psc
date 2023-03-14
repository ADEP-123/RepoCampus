Algoritmo liquidacion_conductores
	Escribir "Ingrese el numero de conductores: "
	Leer N
	totalConductores = 0
	Para i<-1 Hasta N Con Paso 1 Hacer
		Escribir "Escriba el nombre del conductor: "
		Leer  nombre
		Escribir "Escriba la cedula del conductor " nombre ":"
		Leer cedula
		Escribir "Escriba la clase de conductor de " nombre "(1: Experto, 2:Novato):"
		Leer clase
		Escribir "Escriba el valor total recaudado por concepto de pasajes de " nombre ":"
		Leer pasajes
		Escribir "Escriba el valor total recaudado por concepto de encomiendas de " nombre ":"
		Leer  encomiendas
		Si clase == 1 Entonces
			pagoPasajes = pasajes*0.3
			pagoEncomiendas = encomiendas*0.2
		SiNo
			pagoPasajes = pasajes*0.2
			pagoEncomiendas = encomiendas*0.15
		Fin Si
		totalPagar = pagoPasajes + pagoEncomiendas
		totalConductores = totalPagar + totalConductores 
		Escribir "El total a pagar para el conductor " nombre "es de: $" totalPagar
	Fin Para
	Escribir  "El total a pagar de todos los conductores es de: $" totalConductores
FinAlgoritmo
