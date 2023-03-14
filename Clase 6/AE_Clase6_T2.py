# Programa para calcular Valor matricula estudiante
# Autor: Andres Elizalde
# Fecha: Enero 27 2023

#Funcion comprobar numero entre 1 y 3
def verf_1a3 (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < 1 or dato > 3:
                print("El dato debe estar entre 1 y 3")
                continue
            break
        except ValueError:
            print("El dato debe ser numerico entre 1 y 3")
    return dato        
    

nombre=input("Escriba el nombre del Estudiante:")
codigo=input(nombre + " escriba su codigo:")
programa=verf_1a3("Escriba el numero que corresponda a su programa academico de la siguiente manera: \n1.Tecnico en sistemas \n2.Tecnico en desarrollo de videojuegos \n3.Tecnico en animacion digital ")
if programa == 1:
    tarifa = 800000
    programal = "Tecnico en sistemas"
elif programa == 2:
    tarifa = 1000000
    programal = "Tecnico en desarrollo de videojuegos"
else:
    tarifa = 1200000
    programal = "Tecnico en animacion digital"
Beca=verf_1a3("Escriba el numero que corresponde al tipo de beca que tenga de la siguiente manera: \n1.Beca por rendimiento academico (50%) \n2.Beca cultural (40%) \n3.Sin Beca ")
if Beca == 1:
    Descuento = 0.5
elif Beca == 2:
    Descuento = 0.4
else:
    Descuento = 0
tarifaF=tarifa-(tarifa*Descuento)
print ("El estudiante " ,nombre, " identificado con el codigo " ,codigo, " tiene un saldo a pagar por concepto de matricula en " ,programal, " de: $" ,"{:,.0f}".format(tarifaF))  