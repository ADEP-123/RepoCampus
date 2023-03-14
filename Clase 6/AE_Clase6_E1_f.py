# Programa para calcular recibo telefono con funciones
# Autor: Andres Elizalde
# Fecha: Febrero 6 2023


######################################################## 1.La funcion ###########################################################
def facturacion (estrato,impulsos):
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
    val_puls = impulsos*100
    tot_pagar_ind = tarBas + val_puls
    return tot_pagar_ind,tarBas,val_puls

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

#Funcion valida estrato
def val_estr (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < 0 or dato > 5:
                print("El estrato debe ser entre 1 y 5")
                continue
            break
        except ValueError:
            print("El dato debe ser ecrito en numeros")
    return dato
#################################################################################################################################

################################################## 2.Programa principal #########################################################
numAbon=verf_Nat("Ingrese el numero de abonados (en numeros): ")
tot_pagar = 0

for i in range(0,numAbon):
    nombre=input("Ingrese el nombre del abonado: ")
    estrato=val_estr("Ingrese el estrato de "+ nombre +" de 1 a 5: ")
    impulsos=verf_Nat("Ingrese la cantidad e impulsos de "+ nombre +" en numeros: ")
    ############################################## Llamado a la funcion #########################################################
    tot_pagar_ind,tarBas,val_puls = facturacion (estrato,impulsos) #No importa como se llamen las variables, las tira en el orden de el return
    tot_pagar += tot_pagar_ind
    #############################################################################################################################
    print(nombre , "Su total a pagar es de: $" ,"{:,.0f}".format(tot_pagar_ind), " compuesto de la siguiente manera: \n  -Valor a pagar por concepto de tarifa basica: $","{:,.0f}".format(tarBas), "\n  -Valor a pagar por concepto de pulsos: $" ,"{:,.0f}".format(val_puls))
    
print("El valor a pagar entre todos los abonados es de: $" ,"{:,.0f}".format(tot_pagar))
    
#################################################################################################################################
