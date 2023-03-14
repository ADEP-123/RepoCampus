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

num_vend=int(input("Ingrese el numero de vendedores: "))
valVentTot = 0
valTotComision = 0

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

for i in range (0,num_vend):
    comisionVend = 0
    valVentTotVend = 0
    cedula=input("Ingrese la cedula del vendedor: ")
    nombre=input("Escriba el nombre del vendedor identificado con la cedula: " + cedula + " ")
    tipoVendedor=val_estr("Escriba el numero en que el tipo de vendedor se clasifica " + nombre + " de la siguiente manera:\n1:Puerta a puerta\n2:Telemercadeo\n3:Ejecutivo en ventas ",1,3)
    cantidadVent=verf_Nat("Ingrese la cantidad de ventas realizadas por el vendedor " + nombre + " ")
    for i in range (0,cantidadVent):
        nomClient=input("Ingrese el nombre del cliente: ")
        codClient=input("Ingrese el codigo del cliente: ")
        tipVent=val_estr("Escriba el tipo de venta de la siguiente manera:\n1:Contado \n2:Credito ",1,2)
        valVent=verf_Nat("Escriba el valor de la venta: ")
        if tipVent==1:
            if tipoVendedor == 1:
                comision = valVent*0.25
            elif tipoVendedor == 2:
                comision = valVent*0.15
            else:
                comision = valVent*0.20
        else:
            if tipoVendedor == 1:
                comision = valVent*0.20
            elif tipoVendedor == 2:
                comision = valVent*0.10
            else:
                comision = valVent*0.15
        valVentTotVend += valVent
        comisionVend += comision
    valVentTot += valVentTotVend
    valTotComision += comisionVend
    
    print("el valor a pagar por comision para ",nombre, " es de: $:","{:,.0f}".format(comisionVend))
print("El valor total de ventas del mes es de: $","{:,.0f}".format(valVentTot))
print("El valor total a pagar por comision es de: $","{:,.0f}".format(valTotComision))
    