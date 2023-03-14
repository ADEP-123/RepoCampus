# Programa para calcular comision con ciclo while 
# Autor: Andres Elizalde
# Fecha: Febrero 2 2023
cedula=input("Ingrese la cedula del vendedor: ")
valVentTot = 0
valTotComision = 0
while cedula != "-1":
    comisionVend = 0
    valVentTotVend = 0
    nombre=input("Escriba el nombre del vendedor identificado con la cedula: " + cedula + " ")
    tipoVendedor=int(input("Escriba el numero en que el tipo de vendedor se clasifica " + nombre + " de la siguiente manera:\n1:Puerta a puerta\n2:Telemercadeo\n3:Ejecutivo en ventas "))
    cantidadVent=int(input("Ingrese la cantidad de ventas realizadas por el vendedor " + nombre + " "))
    for i in range (1,cantidadVent+1):
        nomClient=input("Ingrese el nombre del cliente: ")
        codClient=input("Ingrese el codigo del cliente: ")
        tipVent=int(input("Escriba el tipo de venta de la siguiente manera:\n1:Contado \n2:Credito "))
        valVent=int(input("Escriba el valor de la venta: "))
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
    cedula=input("Ingrese la cedula del vendedor: ")
print("El valor total de ventas del mes es de: $","{:,.0f}".format(valVentTot))
print("El valor total a pagar por comision es de: $","{:,.0f}".format(valTotComision))
    