# Programa para calcular el area de un triangulo
# Autor: Andres Elizalde
# Fecha: Enero 27 2023
base=float(input("Ingrese la Base en numeros:"))
altura=float(input("Ingrese la Altura en numeros:"))
unidades=input("Ingrese las unidades en letras:")
area=(base * altura)/2
print("El area del triangulo es " "\033[1m" , area , " " + unidades + "\033[0m")