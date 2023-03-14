# Programa para calcular comision con ciclo while 
# Autor: Andres Elizalde
# Fecha: Febrero 2 2023
cedula=input("Ingrese la cedula del vendedor: ")
valVentTot = 0
valTotComision = 0
while cedula != "-1":
    nombre=input("Escriba el nombre del vendedor identificado con la cedula: " + cedula + " ")
    tipoVendedor=int(input("Escriba el numero en que el tipo de vendedor se clasifica "+ nombre+ " de la siguiente manera:\n1:Puerta a puerta\n2:Telemercadeo\n3:Ejecutivo en ventas "))
    valVent=int(input("escriba el total de ventas realizadas por el vendedor "+ nombre+ " en el ultimo mes: "))
    if tipoVendedor == 1:
        comision = valVent*0.2
    elif tipoVendedor == 2:
        comision = valVent*0.15
    else:
        comision = valVent*0.25
    valVentTot += valVent
    valTotComision += comision
    print("el valor a pagar por comision para ",nombre, " es de: $:",comision)
    cedula=input("Ingrese la cedula del vendedor: ")
print("El valor total de ventas del mes es de: $",valVentTot)
print("El valor total a pagar por comision es de: $",valTotComision)
    