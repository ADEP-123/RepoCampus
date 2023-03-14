Algoritmo Tarifa_Basica_De_Energia
	Escribir "Escriba el nombre del Estudiante:"
	Leer Nombre
	Escribir Nombre " escriba su codigo:"
	leer Codigo
	Escribir "Escriba el numero que corresponda a su programa academico de la siguiente manera:"
	Escribir "1.Tecnico en sistemas"
	Escribir "2.Tencnico en desarrollo de videojuegos"
	Escribir "3.Tecnico en animacion digital"
	Leer programa
	Si programa == 1 Entonces
		tarifa = 800000
	SiNo
		Si programa == 2 Entonces
			tarifa = 1000000
		SiNo
			tarifa = 1200000
		Fin Si
	Fin Si
	Si programa == 1 Entonces
		programal = "Tecnico en sistemas"
	SiNo
		Si programa == 2 Entonces
			programal = "Tecnico en desarrollo de videojuegos"
		SiNo
			programal = "Tecnico en animacion digital"
		Fin Si
	Fin Si
	Escribir "Escriba el numero que corresponde al tipo de beca que tenga de la siguiente manera"
	Escribir "1.Beca por rendimiento academico"
	Escribir "2.Beca cultural"
	Escribir "3.Sin Beca"
	Leer Beca
	Si Beca = 1 Entonces
		Descuento = 0.5
	SiNo
		Si Beca = 2 Entonces
			Descuento = 0.4
		SiNo
			Descuento = 0
		Fin Si
	Fin Si
	Escribir "El estudiante " Nombre " identificado con el codigo " Codigo " tiene un saldo a pagar por concepto de matricula en " programal " de: $" tarifa-(tarifa*Descuento)
FinAlgoritmo
