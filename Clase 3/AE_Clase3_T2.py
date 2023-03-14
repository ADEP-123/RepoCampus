# Programa para calcular pago honorarios docentes
# Autor: Andres Elizalde
# Fecha: Febrero 01 2023
N=int(input("Ingrese el numero de docentes"))
totalPagar = 0
cantA = 0
cantB = 0
cantC = 0
for i in range(1, N+1):
    nombre=input("Ingrese el nombre del docente: ")
    cedula=input("Ingrese el documento de identidad de " + nombre + ": ")
    categoria= int(input("Ingrese la categoría del docente " + nombre + " de la siguiente manera: \n1:A (Pago por hora 25000$) \n2:B (Pago por hora 35000$) \n3:C (Pago por hora 50000$) \n"))
    horas=int(input("Ingrese la cantidad de horas laboradas por "  + nombre + " : "))
    if categoria == 1:
        pago = horas * 25000
        cantA = cantA + 1
    elif categoria == 2:
        pago = horas * 35000
        cantB = cantA +1
    else:
        pago = horas * 50000
        cantC = cantC +1
    totalPagar += pago
    print("El valor a pagar para el docente " ,nombre, "es de : $" ,pago)
print("El total a pagar para los docentes es de: $" ,totalPagar, "\n La cantidad de docentes en la categorìa A es de: ",cantA, "\n La cantidad de docentes en la categorìa B es de: ",cantB, "\n La cantidad de docentes en la categorìa C es de: ",cantC,)