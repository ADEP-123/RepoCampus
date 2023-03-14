#Sistema de caja con diccionarios
# Autor: Andres Elizalde
# Fecha: Febrero 13 2023

#Funcion para imprimir matriz
def imprimirMatriz(m):
    for fila in range(0,len(m)):
        for colu in range(0,len(m[fila])):
            print(m[fila][colu],end="\t")
        print("")
        
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

#Funcion imprimir un diccionario de forma elegante
def imprdiccionario(dicc):
    for k in dicc:
        print(k , "==>" , dicc[k])     

#Listas de articulos y valores:
articulos = {1:"Lapiz   ",2:"Cuadernos",3:"Borrador",4:"Calculadora",5:"Escuadra"}
valores={1:2500,2:3800,3:1200,4:35000,5:3700}


N=verf_Nat("Ingrese la cantidad de articulos a procesar: ")
factura = [["Articulo","Cant","ValUni","Valtot"]]
totalPagar = 0

for i in range(0,N):
    prop_art = []
    while True:
        try:
            print("Ingrese el codigo del articulo de la siguiente lista: ")
            imprdiccionario(articulos)
            codigo=int(input())
            if codigo > 5 or codigo < 1:
                print("#"*10,"!!!ERROR!!!","#"*10,"El codigo ingresado no existe en la lista, porfavor: ")
                continue
            else:
                print("\nEl articulo seleccionado es: ",articulos.get(codigo).strip(),"\n")
                break
        except ValueError:
            print("#"*10,"!!!ERROR!!!","#"*10,"El dato ingresado debe ser numerico entero")
            
    cantidad = verf_Nat("Ingrese la cantidad (en numeros) de "+articulos.get(codigo).strip()+" a comprar: ")
    valorTot = cantidad*valores.get(codigo)
    prop_art.append(articulos.get(codigo))
    prop_art.append(cantidad) 
    prop_art.append("$"+"{:,.0f}".format(valores.get(codigo)))
    prop_art.append("$"+"{:,.0f}".format(valorTot))
    factura.append(prop_art)
    totalPagar += valorTot
    
print("\n","#"*10,"Factura #00001","#"*10,"\n")
imprimirMatriz(factura)
print("Total a pagar: $","{:,.0f}".format(totalPagar))