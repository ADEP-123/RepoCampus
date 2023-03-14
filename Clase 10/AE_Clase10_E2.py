# clase diccionarios
# Autor: Andres Elizalde
# Fecha: Febrero 13 2023
#Contar el numero de veces que una palabra aparece dentro de un texto
texto = input("Ingrese un texto: ")
dpalabras = {}
lstPalabras = texto.strip().lower().split(" ")

##Strip quita los espacios al inicio y al final de una frase y el Split("patron") separa un texto segun el patron
#Ej, Texto= La razon de la; texto.split(" ")="la" , "razon" , "de" , "la"

for pal in lstPalabras:
    # if pal in dpalabras:
    #     dpalabras[pal] += 1
    # else:
    #     dpalabras[pal] = 1
    dpalabras[pal] = dpalabras.get(pal, 0) + 1
for k in sorted(dpalabras):
    print(k, " -- veces -- ",dpalabras[k])