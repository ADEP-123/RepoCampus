# Programa para calcular cantidad vocales
# Autor: Andres Elizalde
# Fecha: Febrero 7 2023

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

N=verf_Nat("Ingrese la cantidad de letras de la lista: ")
lista_letras=[]
cont_a = 0
cont_e = 0
cont_i = 0
cont_o = 0
cont_u = 0

for i in range(0,N):
    letra=input("Ingrese las letras una a una: ")
    lista_letras.append(letra)
    
for i in range(0,len(lista_letras)):
    
    if lista_letras[i] == "a" or lista_letras[i] == "e" or lista_letras[i] == "i" or lista_letras[i] == "o" or lista_letras[i] == "u":
        if lista_letras[i] == "a":
            cont_a += 1
        elif lista_letras[i]  == "e":
            cont_e += 1
        elif lista_letras[i]  == "i":
            cont_i += 1
        elif lista_letras[i]  == "o":
            cont_o += 1
        else:
            cont_u += 1
print("La cantidad de vocales son: \n-a:",cont_a,"\n-e:",cont_e,"\n-i:",cont_i,"\n-o:",cont_o,"\n-u:",cont_u,)