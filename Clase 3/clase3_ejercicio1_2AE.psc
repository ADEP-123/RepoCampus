Algoritmo calculo_de_tarifa_agua
	Escribir "Escriba la cantidad de usuarios"
	Leer N
	totalAcumulado = 0
	Para i <- 1 Hasta N Con Paso 1 Hacer
		Escribir "Escriba su nombre: "
		Leer nombre
		Escribir nombre " escriba su codigo: "
		Leer codigo
		Escribir nombre " escriba su estado de la siquiente manera:"
		Escribir "V: Si su estado es vigente"
		Escribir "S: Si su estado es suspendido"
		Leer  estado
		Escribir nombre " escriba su estrato en numeros: "
		Leer estrato
		Escribir nombre " escriba su consumo del mes en cm³: "
		Leer consumo
		Si estado == "v" o estado == "V" Entonces
			Si estrato == 1 Entonces
				tarifa = 10000
			SiNo
				Si estrato == 2 Entonces
					tarifa = 20000
				SiNo
					Si estrato == 3 Entonces
						tarifa = 30000
					SiNo
						Si estrato == 4 Entonces
							tarifa = 45000
						SiNo
							Si estrato == 5 Entonces
								tarifa = 60000
							SiNo
								tarifa = 70000
							Fin Si
						Fin Si
					Fin Si
				Fin Si
			Fin Si
			tarifa_consumo = 200*consumo
			total= tarifa + tarifa_consumo
			totalAcumulado = totalAcumulado + total
			Escribir nombre " los siguientes son los datos de su factura:"
			Escribir "El valor de su tarifa basica es de $: " tarifa
			Escribir "El valor asociado a su consumo es de $: " tarifa_consumo
			Escribir "El valor total a pagar es de $: " total
		SiNo
			Escribir "No es posible calcular, su estado es inactivo"
		Fin Si
	Fin Para
	Escribir "El valor total a pagar por todos los usuarios consultados es: $" totalAcumulado
FinAlgoritmo
