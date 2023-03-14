Algoritmo Nota_Cuantitativa_A_Cualitativa
	Escribir "Escriba el nombre del estudiante:"
	Leer Nombre
	Escribir "Escriba la nota en numeros del estudiante:"
	leer Nota
	Si	Nota <= 59 Entonces
		NotaC = "D"
	SiNo
		Si	Nota <= 79 Entonces
			NotaC = "C"
		SiNo
			Si	Nota <= 89 Entonces
				NotaC = "B"
			SiNo
				NotaC = "A"
			FinSi
		FinSi
	FinSi
	Escribir "El estudiante: " Nombre " Obtuvo una nota de: " Nota " correspondiente a una: " NotaC 
FinAlgoritmo
