Algoritmo Comision_Vendedores
	Escribir "Ingrese la cedula del vendedor: "
	Leer cedula
	valVentTot = 0
	valTotComision = 0
	Mientras cedula <> -1  Hacer
		Escribir "Escriba el nombre del vendedor identificado con la cedula: " cedula
		Leer nombre
		Escribir "Escriba en que tipo de vendedor se clasifica " nombre " de la siguiente manera:"
		Escribir "1:Puerta a puerta"
		Escribir "2:Telemercadeo"
		Escribir "3:Ejecutivo en ventas"
		Leer tipoVendedor
		Escribir "Escriba el total de ventas realizadas por el vendedor " nombre " en el ultimo mes: "
		Leer valVent
		Si tipoVendedor = 1 Entonces
			comision = valVent*0.2
		SiNo
			Si tipoVendedor = 2 Entonces
				comision = valVent*0.15
			SiNo
				comision = valVent*0.25
			Fin Si
		Fin Si
		valVentTot = valVent + valVent
		valTotComision = comision + comision
		Escribir "El valor a pagar por comision para " nombre " es de : $" comision
		Escribir "Ingrese la cedula del vendedor: "
		Leer cedula
	Fin Mientras
	Escribir "El valor total de ventas del mes es de: $" valVentTot
	Escribir "El valor total a pagar por comision es de: $" valTotComision
	
FinAlgoritmo
