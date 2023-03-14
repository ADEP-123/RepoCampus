# Programa para calcular si recibe o no subsidio un trabajador segun su salario
# Autor: Andres Elizalde
# Fecha: Enero 31 2023
nombre=input("Ingrese el nombre del trabajador:")
salario=int(input("Ingrese el salario del trabajador:"))
if salario <= 1200000 :
    print("Para el trabajador " ,nombre, " dado que su salario es menor o igual a $1200000 ($" ,salario, ") su subsidio corresponde a: $120000 dando un salario total de $" ,salario+120000, ".")
else :
    print("Para el trabajador " ,nombre, " dado que su salario es mayor a $1200000 ($" ,salario, ") no tiene subsidio dando un salario total de $" ,salario, ".")