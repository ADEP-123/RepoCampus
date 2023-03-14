#Reto con listas facturacion PV Micro-ACME
#Creador: Andrés David Elizalde Peralta
#Fecha: 10 de Febereo 2022

N = int(input("Select by numbers the number of clients: "))

for i in range (0,N):
    M = int(input("Quantity of products to process: "))
    codProd = []
    valUni = []
    cant = []
    tIVA = []
    for j in range (0,M):
        codProd.append(input("Insert product's code: "))
        valUni.append(input("Insert the uit value of the product "+codProd[j]+" : "))
        cant.append(input("Insert the quantity of the product identify with"+codProd[j]+"that had been purchased: "))
        tIVA.append(input("Select by numbers the cain of fee in the next way: \n1- No fee \n2- Goods (5%) \n3-General (19%) "))
        
