# Programa para calcular cantidad de numeros pares e impares de una lista   
# Autor: Andres Elizalde
# Fecha: Febrero 2 2023
num=int(input("Ingrese la lista de numeros uno a uno, para finalizar ingrese el -1 "))
conPar = 0
conImpar = 0
while num != -1:
    if num % 2 == 0:
        print("El numero ",num, " es PAR")
        conPar += 1
    else:
        print("El numero ",num, " es IMPAR")
        conImpar += 1
    print("La cantidad de numeros pares que lleva es: " ,conPar)
    print("La cantidad de numeros impares que lleva es: " ,conImpar)
    num=int(input("Ingrese el siguiente numero entero "))

print( "La cantidad total de numeros pares es: " , conPar )
print( "La cantidad total de numeros impares es: " , conImpar)