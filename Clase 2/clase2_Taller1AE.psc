Algoritmo Tarifa_Basica_De_Energia
	Escribir "Escriba el nombre del ciudadano:"
	Leer Nombre
	Escribir Nombre " Escriba su estrato de 1 a 5:"
	leer Estrato
	Si	Estrato < 2 Entonces
		Tarifa = 10000
	SiNo
		Si	Estrato < 3 Entonces
			Tarifa = 15000
		SiNo
			Si	Estrato < 4 Entonces
				Tarifa = 30000
			SiNo
				si	Estrato < 5 Entonces
					Tarifa = 50000
				SiNo
					Tarifa = 65000
				FinSi
			FinSi
		FinSi
	FinSi
	Escribir  Nombre " Usted tiene una tarifa basica de energia de: $" Tarifa
FinAlgoritmo
