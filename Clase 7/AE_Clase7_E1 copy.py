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

cont_voc=0    
for i in lista_letras:
    
    if i == "a" or i == "A":
        cont_a += 1
    elif i  == "e" or i == "E":
        cont_e += 1
    elif i  == "i" or i == "I":
        cont_i += 1
    elif i  == "o" or i == "O":
        cont_o += 1
    elif i == "u" or i == "U":
        cont_u += 1
cont_voc = cont_a + cont_e + cont_i + cont_o + cont_u
print("La cantidad de vocales son: \n-a:",cont_a,"\n-e:",cont_e,"\n-i:",cont_i,"\n-o:",cont_o,"\n-u:",cont_u,)
print(cont_voc)