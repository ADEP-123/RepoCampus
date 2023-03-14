#Escribir un programa que guarde en un diccionario los precios de las frutas de las tablas dadas 
# Autor: Andres Elizalde
# Fecha: Febrero 13 2023

#Funcion de datos numericos naturales
def verf_Nat (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < 1:
                print("#"*15,"!!!ERROR!!!","#"*15,"El dato debe ser mayor o igual 0")
                continue
            break
        except ValueError:
            print("#"*15,"!!!ERROR!!!","#"*15,"El dato ingresado debe ser numerico entero")
    return dato


frutas = {"platano":1.35,"manzana":0.80,"pera":0.85,"naranja":0.70}


while True:
    queFruta = input("ingrese la fruta que desea entre la siguiente lista: \n-Platano \n-Manzana \n-Pera \n-Naranja \n")
    if frutas.get(queFruta.lower()) == None:
        print("#"*15,"!!!ERROR!!!","#"*15,"La fruta ingresada no existe en la lista, porfavor: ")
        continue
    else:
        peso = verf_Nat("Ingrese la cantidad en kilos de "+ queFruta +" que va a comprar: ")
        valor = frutas.get(queFruta.lower()) * peso
        break
print("El valor a pagar por ",peso,"kg de ",queFruta," es de : $","{:,.0f}".format(valor))