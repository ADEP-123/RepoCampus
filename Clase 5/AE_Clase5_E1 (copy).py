# Validacion de informacion 
# Autor: Andres Elizalde
# Fecha: Febrero 3 2023
while True:
    try: 
        N=int(input("Ingrese la cantidad de usuarios: "))
        break
    except ValueError: 
        print("La cantidad de usuarios debe ser numerica entera")
        

totalPagar = 0
for i in range(1,N+1):
    nombre=input("Ingrese su nombre: ")
    codigo=input(nombre + " ingrese su codigo: ")
    
    while True:
        estado=input(nombre + " ingrese su estado de la siguiente manera: \nV:Si está vigente \nS:Si está suspendido \n")
        if estado != "v" or estado != "V" or estado != "s" or estado != "S":
            print("El estado debe ser V o S")
            continue
        break
        
    while True:
        try:
            estrato=int(input(nombre + " ingrese su estrato en numeros entre 1 y 6 segun le corresponda: "))
            if estrato < 1 or estrato > 6:
                print("El estrato debe ser 1,2,3,4,5 o 6")
                continue
            break
        except ValueError:
            print("El estrato debe ser un numero entero")
            
    while True:
        try: 
            consumo=float(input(nombre + " ingrese su consumo del ultimo mes en cm³ "))
            break
        except ValueError: 
            print("El consumo del mes debe ser numerico")
            
    if estado == "v" or estado == "V":
        if estrato == 1:
            tarifa = 10000
        elif estrato == 2:
            tarifa = 20000
        elif estrato == 3:
            tarifa = 30000
        elif estrato == 4:
            tarifa = 45000
        elif estrato == 5:
            tarifa = 60000
        else:
            tarifa = 70000
        tarifa_consumo = 200*consumo
        total = tarifa + tarifa_consumo
        totalPagar += total #Es lo mismo que totalPagar = totalPagar + total
        print (nombre, " los siguientes son los datos de su factura: \nEl valor de su tarifa basica es de $: ","{:,.0f}".format(tarifa), "\nEl valor asociado a su consumo es de $: " ,"{:,.0f}".format(tarifa_consumo), "\nEl valor total a pagar es de $: " ,"{:,.0f}".format(total))
    else: print ("No es posible calcular su tarifa dado que su estado es inactivo")
  
print ("---El valor total a pagar por todos los usuarios registrados es : $" ,"{:,.0f}".format(totalPagar),"---")      