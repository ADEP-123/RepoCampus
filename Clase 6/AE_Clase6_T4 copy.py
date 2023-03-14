# Programa para calcular pago conductores y pago total
# Autor: Andres Elizalde
# Fecha: Febrero 01 2023

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

#Funcion que valida entre dos opciones
def val_estr (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato != 1 and dato != 2 :
                print("Elija una unica opcion (1 o 2)")
                continue
            break
        except ValueError:
            print("La eleccion debe ser escrita en numeros")
    return dato

N=verf_Nat("Ingrese el numero de conductores: ")
totalConductores = 0
for i in range (0 , N):
    nombre=input("Ingrese el nombre del conductor: ")
    cedula=input("Ingrese la cedula de " + nombre +  ":")
    clase=val_estr("Ingrese la clase de conductor de " + nombre +  " de la siguiente manera: \n1:Experto \n2:Novato \n")
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
