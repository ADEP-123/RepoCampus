# Programa para calcular el pago total a un conductor
# Autor: Andres Elizalde
# Fecha: Enero 27 2023
nombre=input("Ingrese el nombre del conductor:")
placa=(input("Ingrese la placa del conductor:"))
recaudo_pasajes=int(input("Ingrese el valor recaudado por concepto de pasajes:"))
recaudo_encomiendas=int(input("Ingrese el valor recaudado por concepto de encomiendas:"))
total_recaudado=int(recaudo_pasajes+recaudo_encomiendas)
pago_pasajes=int(recaudo_pasajes*0.25)
pago_encomiendas=int(recaudo_encomiendas*0.15)
pago_total=int(pago_pasajes+pago_encomiendas)
print("El conductor " ,nombre,  " con vehiculo de placa: " ,placa, " Realizó un recaudo total de: " ,total_recaudado, "$ que corresponde a: \n-por concepto de pasajes: " ,recaudo_pasajes, "$ \n-por concepto de encomiendas: " ,recaudo_encomiendas, "$ \npor lo cual se le cancela un total de: " ,pago_total, "$ que correponden a: \n-por concepto de pasajes: " ,pago_pasajes, "$ \n-por concepto de encomiendas: " ,pago_encomiendas, "$")