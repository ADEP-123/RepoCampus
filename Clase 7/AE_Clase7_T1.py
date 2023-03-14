# Programa para determinar pares e impares de una lista
# Autor: Andres Elizalde
# Fecha: Febrero 7 2023

#Funcion de datos numericos enteros
def verf_Ent (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if (dato - int(dato)) !=0 :
                print("El dato debe ser un entero")
                continue
            break
        except ValueError:
            print("El dato ingresado debe ser numerico entero")
    return dato

lista_num=[]
lista_par=[]
lista_impar=[]
numero=verf_Ent("Ingrese el numero entero uno a la vez: ")

while numero != 99999:
    lista_num.append(numero)
    numero=verf_Ent("Ingrese el numero entero uno a la vez: ")
    
for i in lista_num:
    if i%2 == 0:
        lista_par.append(i)
    else:
        lista_impar.append(i)
        
print("La lista total de numeros ingresada es: ",lista_num,"la cual consta de ",len(lista_num)," numeros de los cuales " ,len(lista_par)," son pares, los cuales son: " ,lista_par, " y " ,len(lista_impar), " son impares, los cuales son: ",lista_impar)