# Programa para insertar nombres, almacenarlos en lista y cantidad de palabras de cada nombre
# Autor: Andres Elizalde
# Fecha: Febrero 7 2023

nombres=[]
cantPal=[]
nombre=input("Ingrese el nombre de cada trabajador uno a uno, para finalizar escriba FIN: ")
while nombre.lower() != "fin":
    nombres.append(nombre)
    cantidad_palabras=len(nombre.split())
    cantPal.append(cantidad_palabras)
    nombre=input("Ingrese el nombre del siguiente trabajador, para finalizar escriba FIN: ")
print("La lista de nombres ingresada es: ",nombres, "\nLa cantidad de palabras en cada nombre es: ",cantPal)
