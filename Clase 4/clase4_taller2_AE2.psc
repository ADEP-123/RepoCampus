Algoritmo Comision_Vendedores
	valVentTot = 0
	valTotComision = 0
    cant_vend = 0
    Para i<-1 Hasta cant_vend Con Paso 1 Hacer
    	Escribir "Ingrese la cedula del vendedor: "
        Leer cedula
		comisionVend = 0
		valVentTotVend = 0
		Escribir "Escriba el nombre del vendedor identificado con la cedula: " cedula
		Leer nombre
		Escribir "Escriba en que tipo de vendedor se clasifica " nombre " de la siguiente manera:"
		Escribir "1:Puerta a puerta"
		Escribir "2:Telemercadeo"
		Escribir "3:Ejecutivo en ventas"
		Leer tipoVendedor
		Escribir "Ingrese la cantidad de ventas realizadas por " nombre
		Leer cantidadVentas
		Para i<-1 Hasta cantidadVentas Con Paso 1 Hacer
			Escribir "Escriba el nombre del cliente: "
			Leer nomClient
			Escribir "Escriba el codigo del cliente: "
			Leer codClient
			Escribir "Escriba el tipo de venta de la siguiente manera:"
			Escribir "1:Contado"
			Escribir "2:Credito"
			Leer tipVent
			Escribir "Escriba el valor de la venta "
			Leer valVent
			Si tipVent = 1 Entonces
				Si tipoVendedor = 1 Entonces
					comision = valVent*0.25
				SiNo
					Si tipoVendedor = 2 Entonces
						comision = valVent*0.15
					SiNo
						comision = valVent*0.20
					Fin Si
				Fin Si
			SiNo
				Si tipoVendedor = 1 Entonces
					comision = valVent*0.20
				SiNo
					Si tipoVendedor = 2 Entonces
						comision = valVent*0.10
					SiNo
						comision = valVent*0.15
					Fin Si
				Fin Si
			Fin Si
			valVentTotVend = valVent + valVent
			comisionVend = comision + comision
		Fin Para
		valVentTot = valVentTotVend+ valVentTotVend
		valTotComision = comision + comision
		Escribir "El valor a pagar por comision para " nombre " es de : $" comisionVend
	Fin Mientras
	Escribir "El valor total de ventas del mes es de: $" valVentTot
	Escribir "El valor total a pagar por comision es de: $" valTotComision
	
FinAlgoritmo
