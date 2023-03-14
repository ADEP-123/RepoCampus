# Programa para calcular Valor matricula estudiante
# Autor: Andres Elizalde
# Fecha: Enero 27 2023
nombre=input("Escriba el nombre del Estudiante:")
codigo=input(nombre + " escriba su codigo:")
programa=int(input("Escriba el numero que corresponda a su programa academico de la siguiente manera: \n1.Tecnico en sistemas \n2.Tecnico en desarrollo de videojuegos \n3.Tecnico en animacion digital"))
error= "No selecciono ningun dato, porfavor reinicie el programa y repita el proceso"
if programa == 1:
    tarifa = 800000
elif programa == 2:
    tarifa = 1000000
elif programa == 3:
    tarifa = 1200000
else:
    print(error)
if programa == 1:
    programal = "Tecnico en sistemas"
elif programa == 2:
    programal = "Tecnico en desarrollo de videojuegos"
elif programa == 3:
    programal = "Tecnico en animacion digital"
else:
    print(error)
Beca=int(input("Escriba el numero que corresponde al tipo de beca que tenga de la siguiente manera: \n1.Beca por rendimiento academico (50%) \n2.Beca cultural (40%) \n3.Sin Beca"))
if Beca == 1:
    Descuento = 0.5
elif Beca == 2:
    Descuento = 0.4
else:
    Descuento = 0
print ("El estudiante " ,nombre, " identificado con el codigo " ,codigo, " tiene un saldo a pagar por concepto de matricula en " ,programal, " de: $" ,int(tarifa-(tarifa*Descuento)))  