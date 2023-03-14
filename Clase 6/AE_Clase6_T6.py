# Programa para calcular comision con ciclo while 
# Autor: Andres Elizalde
# Fecha: Febrero 2 2023

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

cedula=input("Ingrese la cedula del vendedor: ")
valVentTot = 0
valTotComision = 0
while cedula != "-1":
    nombre=input("Escriba el nombre del vendedor identificado con la cedula: " + cedula + " ")
    tipoVendedor=val_estr("Escriba el numero en que el tipo de vendedor se clasifica "+ nombre+ " de la siguiente manera:\n1:Puerta a puerta\n2:Telemercadeo\n3:Ejecutivo en ventas ",1,3)
    valVent=verf_Nat("Escriba el total de ventas realizadas por el vendedor "+ nombre+ " en el ultimo mes: ")
    if tipoVendedor == 1:
        comision = valVent*0.2
    elif tipoVendedor == 2:
        comision = valVent*0.15
    else:
        comision = valVent*0.25
    valVentTot += valVent
    valTotComision += comision
    print("el valor a pagar por comision para " ,nombre, " es de: $:","{:,.0f}".format(comision))
    cedula=input("Ingrese la cedula del vendedor: ")
print("El valor total de ventas del mes es de: $","{:,.0f}".format(valVentTot))
print("El valor total a pagar por comision es de: $","{:,.0f}".format(valTotComision))
    