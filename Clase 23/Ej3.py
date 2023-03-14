texto=input("Ingrese el texto que desee ")

lstPalabras = texto.strip().lower().split(" ")
print (lstPalabras)

print("La longitud de la ultima palabra es" , len(lstPalabras[len(lstPalabras)-1]))
