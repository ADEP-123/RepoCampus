# Programa para calcular el pago total a un conductor
# Autor: Andres Elizalde
# Fecha: Enero 27 2023

#Funcion de datos numericos naturales
def verf_Nat (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < 0:
                print("El dato debe ser mayor o igual 0")
                continue
            break
        except ValueError:
            print("El dato ingresado debe ser numerico entero")
    return dato

#Funcion total pago
def pagos (recaudo_pasajes,recaudo_encomiendas):
    total_recaudado=int(recaudo_pasajes+recaudo_encomiendas)
    pago_pasajes=int(recaudo_pasajes*0.25)
    pago_encomiendas=int(recaudo_encomiendas*0.15)
    pago_total=int(pago_pasajes+pago_encomiendas)
    return total_recaudado,pago_pasajes,pago_encomiendas,pago_total

nombre=input("Ingrese el nombre del conductor:")
placa=(input("Ingrese la placa del conductor:"))
recaudo_pasajes=verf_Nat("Ingrese el valor recaudado por concepto de pasajes:")
recaudo_encomiendas=verf_Nat("Ingrese el valor recaudado por concepto de encomiendas:")
total_recaudado,pago_pasajes,pago_encomiendas,pago_total=pagos(recaudo_pasajes,recaudo_encomiendas)

print("El conductor " ,nombre,  " con vehiculo de placa: " ,placa, " Realizó un recaudo total de: " ,"{:,.0f}".format(total_recaudado), "$ que corresponde a: \n-por concepto de pasajes: " ,"{:,.0f}".format(recaudo_pasajes), "$ \n-por concepto de encomiendas: " ,"{:,.0f}".format(recaudo_encomiendas), "$ \npor lo cual se le cancela un total de: " ,"{:,.0f}".format(pago_total), "$ que correponden a: \n-por concepto de pasajes: " ,"{:,.0f}".format(pago_pasajes), "$ \n-por concepto de encomiendas: " ,"{:,.0f}".format(pago_encomiendas), "$")