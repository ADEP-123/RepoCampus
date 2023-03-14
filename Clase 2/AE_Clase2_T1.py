# Programa para calcular tarifa energia electrica por estrato
# Autor: Andres Elizalde
# Fecha: Enero 31 2023
nombre=input("Ingrese el nombre del ciudadano:")
estrato=int(input(nombre + " Ingrese su estrato de 1 a 5:"))
if estrato < 2:
    tarifa = 10000
elif estrato < 3:
    tarifa = 15000
elif estrato < 4:
    tarifa = 30000
elif estrato < 5:
    tarifa = 50000
else:
    tarifa = 60000
print (nombre, " usted tiene una tarifa basica de energia de: $" ,tarifa)
    