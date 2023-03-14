# RETO:PROGRAMA DE SISTEMA DE VENTAS "ACME"
# Autor: Andres Elizalde
# Fecha: Febrero 8 2023

#Funcion de datos numericos naturales
def verf_Nat (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < 1:
                print("El dato debe ser mayor o igual 0")
                continue
            break
        except ValueError:
            print("El dato ingresado debe ser numerico entero")
    return dato

#Funcion que valida entre femenino o masculino
def val_estr (etiqueta):
    while True:
        try:
            dato=input(etiqueta)
            if dato.lower() != "f" and dato.lower() != "m" :
                print("Elija una unica opcion (F o M)")
                continue
            break
        except ValueError:
            print("La eleccion debe ser F si es femenino o M si es masculino")
    return dato

#Funcion valores mayores a 0 no enteros
def verf_natNoEnt (etiqueta):
    while True:
        try:
            dato=float(input(etiqueta))
            if dato < 0:
                print("El dato debe ser mayor que 0")
                continue
            break
        except ValueError:
            print("El dato ingresado debe ser numerico ")
    return dato

#Funcion para verificar entre a o b opciones
def ver_ab (etiqueta,a,b):
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

N=verf_Nat("Ingrese la cantidad (en numeros) de clientes:  ")
cantMuj=0
cantHom=0
valorTotventProd=0
valorTotventIVA=0
valorVentProdSinIVA=0
valorProductoL = []
valorIVAL= []
valorFinProductoL = []
for i in range(0,N):
    valorTotProd=0
    valorTotIVA=0
    cedula = input("Ingrese la cedula del cliente: ")
    nombre = input("Ingrese el nombre del cliente: ")
    sexo = val_estr("Ingrese el sexo del cliente de la siguiente manera; F para femenino o M para masculino: ")
    if sexo.lower() == "m":
        cantHom += 1
    else:
        cantMuj += 1
    M = verf_Nat("Ingrese la cantidad de productos a procesar: ")
    for i in range(0,M):
        codigoP = input("Ingrese el codigo del producto: ")
        valorP = verf_natNoEnt("Ingrese el valor unitario del producto: $")
        cantidadP = verf_Nat("Ingrese la cantidad comprada del producto "+ codigoP+ ": ")
        tipoIVA = ver_ab("Ingrese el numero de tipo de iva que corresponda al producto de la siguiente manera: \n1.Excento de iva \n2.Bienes(IVA del 5%) \n3.General(IVA del 19%) ",1,3)
        valorProducto=cantidadP*valorP
        valorProductoL.append(valorProducto)
        if tipoIVA == 1:
            valorIVA = 0
            valorVentProdSinIVA += valorProducto
        elif tipoIVA == 2:
            valorIVA = valorProducto * 0.05
        else:
            valorIVA = valorProducto * 0.19
        valorIVAL.append(valorIVA)
        valorFinProducto = valorProducto + valorIVA
        valorFinProductoL.append(valorFinProducto)
        print("El costo del producto en total es: $","{:,.0f}".format(valorFinProducto)," que corresponde a: \n-Valor asociado al producto: $","{:,.0f}".format(valorProducto)," \n-Valor asociado al IVA: $","{:,.0f}".format(valorIVA))
        valorTotProd += valorFinProducto
        valorTotIVA += valorIVA 
        valorTotventProd += valorTotProd
        valorTotventIVA += valorTotIVA
    print("El valor total a pagar de la compra de ",nombre, "es: $","{:,.0f}".format(valorTotProd),"del cual corresponde un total de IVA de: $","{:,.0f}".format(valorTotIVA))
print("Informe final: \n--Cantidad clientes: ",N,"\n-Cantidad de clientes mujeres:",cantMuj,"\n-Cantidad de clientes hombres: ",cantHom,"\n--Valor asociado a ventas de todos los productos (incluye IVA): $","{:,.0f}".format(valorTotventProd),"\n--Valor total asociado a IVA:  $","{:,.0f}".format(valorTotventIVA),"\n--Valor asociado a ventas de los productos sin IVA: $","{:,.0f}".format(valorVentProdSinIVA))

     
    
