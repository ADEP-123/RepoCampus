# Programa para calcular recibo telefono
# Autor: Andres Elizalde
# Fecha: Febrero 6 2023
numAbon=int(input("Ingrese el numero de abonados a calcular: "))
tot_pagar = 0
for i in range (1, numAbon+1):
    nombre=input("Ingrese el nombre del abonado: ")
    
    while True:
        try:
            estrato=int(input("Ingrese el estrato de " + nombre + " en numeros entre 1 y 5 segun le corresponda: "))
            if estrato < 1 or estrato > 5:
                print("El estrato debe ser 1,2,3,4 o 5")
                continue
            break
        except ValueError:
            print("El estrato debe ser un numero entero")

    while True:
        try:
            impulsos=int(input("Ingrese la cantidad de impulsos en numeros de " + nombre + ": "))
            if impulsos < 0:
                print("La cantidad de impulsos debe ser 0 o mayor")
                continue
            break
        except ValueError:
            print("La cantidad de impulsos debe escribirse en numeros")
    val_puls = impulsos*100
    
    if estrato == 1:
        tarBas = 10000
    elif estrato == 2:
        tarBas = 15000
    elif estrato == 3:
        tarBas = 20000
    elif estrato == 4:
        tarBas = 25000
    else:
        tarBas = 30000
    tot_pagar_ind = tarBas + val_puls
    tot_pagar += tot_pagar_ind
    print(nombre , "Su total a pagar es de: $" ,"{:,.0f}".format(tot_pagar_ind), " compuesto de la siguiente manera: \n-Valor a pagar por concepto de tarifa basica: $","{:,.0f}".format(tarBas), "\n-Valor a pagar por concepto de pulsos: $" ,"{:,.0f}".format(val_puls))
print("El valor a pagar entre todos los abonados es de: $" ,"{:,.0f}".format(tot_pagar))