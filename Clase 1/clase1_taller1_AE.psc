Algoritmo Precio_Pasaje
	Escribir "Ingrese el nombre del conductor"
	Leer Nombre
	Escribir "Ingrese la placa del vehiculo"
	Leer Placa
	Escribir "Ingrese el valor recaudado por concepto de pasajes"
	Leer Valor_Pasajes
	Escribir "Ingrese el valor recaudado por concepto de encomiendas"
	Leer Valor_Encomiendas
	valor_Con_Pasajes<-Valor_Pasajes*0.25
	valor_Con_Encomiendas<-Valor_Encomiendas*0.15
	valor_total<-valor_Con_Pasajes+valor_Con_Encomiendas
	recaudo<-Valor_Pasajes+Valor_Encomiendas	
	Escribir "El conductor " Nombre " con vehiculo de placa: " Placa " Realizó un recaudo total de: " 	recaudo "$ que corresponde a: -por concepto de pasajes: " Valor_Pasajes "$ -por concepto de encomiendas: " Valor_Encomiendas "$ por lo cual se le cancela un total de: " valor_total "$ que correponden a: -por concepto de pasajes: " valor_Con_Pasajes "$ -por concepto de encomiendas: " valor_Con_Encomiendas "$"
FinAlgoritmo
