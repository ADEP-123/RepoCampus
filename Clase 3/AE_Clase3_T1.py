# Programa para calcular pago conductores y pago total
# Autor: Andres Elizalde
# Fecha: Febrero 01 2023
N=int(input("Ingrese el numero de conductores: "))
totalConductores = 0
for i in range (1 , N+1):
    nombre=input("Ingrese el nombre del conductor: ")
    cedula=input("Ingrese la cedula de " + nombre +  ":")
    clase=int(input("Ingrese la clase de conductor de " + nombre +  " de la siguiente manera: \n1:Experto \n2:Novato \n"))
    pasajes=int(input("Ingrese la cantidad recaudada por "+ nombre +  " por concepto de pasajes: $"))
    encomiendas=int(input("Ingrese la cantidad recaudada por "+ nombre +  " por concepto de encomiendas: $"))
    if clase == 1:
        pagoPasajes = pasajes*0.3
        pagoEncomiendas = encomiendas*0.2
    else:
        pagoPasajes = pasajes*0.2
        pagoEncomiendas = encomiendas*0.15
    totalAPagar = pagoPasajes + pagoEncomiendas
    totalConductores += totalAPagar
    print("El total a pagar para el conductor " ,nombre, " es de: $" ,totalAPagar)
print("El total a pagar pagar para todos los conductores registrados es de: $",totalConductores)
