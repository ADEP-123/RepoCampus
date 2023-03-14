# Programa para calcular pago honorarios docentes
# Autor: Andres Elizalde
# Fecha: Febrero 01 2023

#Funcion que valida entre a y b opciones
def val_estr (etiqueta,a,b):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < a or dato > b :
                print("Elija una unica opcion entre " , a , " o " , b)
                continue
            break
        except ValueError:
            print("La eleccion debe ser escrita en numeros")
    return dato

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

N=int(input("Ingrese el numero de docentes: "))
totalPagar = 0
cantA = 0
cantB = 0
cantC = 0
for i in range(0, N):
    nombre=input("Ingrese el nombre del docente: ")
    cedula=input("Ingrese el documento de identidad de " + nombre + ": ")
    categoria=val_estr("Ingrese la categoría del docente " + nombre + " de la siguiente manera: \n1:A (Pago por hora 25000$) \n2:B (Pago por hora 35000$) \n3:C (Pago por hora 50000$) \n",1,3)

    horas=verf_Nat("Ingrese la cantidad de horas laboradas por "  + nombre + " : ")
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
    print("El valor a pagar para el docente " ,nombre, "es de : $" ,"{:,.0f}".format(pago))
print("El total a pagar para los docentes es de: $" ,"{:,.0f}".format(totalPagar), "\n La cantidad de docentes en la categorìa A es de: ",cantA, "\n La cantidad de docentes en la categorìa B es de: ",cantB, "\n La cantidad de docentes en la categorìa C es de: ",cantC,)