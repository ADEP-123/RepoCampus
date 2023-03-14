# clase matrices
# Autor: Andres Elizalde
# Fecha: Febrero 10 2023
#Funcion para imprimir matriz
def imprimirMatriz(m):
    for fila in range(0,len(m)):
        for colu in range(0,len(m[fila])):
            print(m[fila][colu],end="\t")
        print("")

#Creacion de una matriz a eleccion del usuario
mat = []
fil = int(input("Cuantas filas? "))
col = int(input("Cuantas columnas? "))

for h in range(fil):
    lstFil = []
    for k in range(col):
        dato = input(f"Ingrese un dato para mat [{h+1},{k+1}]: ")#F string, f al incio permite meter variables con string
        lstFil.append(dato)
    mat.append(lstFil)

imprimirMatriz(mat)

numeroInteres = input("Ingrese el valor del dato a encontrar: ")
for i in range(0,fil):
    for j in range(0,col):
        if mat[i][j] == numeroInteres:
            print("La coordenada de ",numeroInteres," es: ",i,j)
            

datL = []            
M = int(input("Cantidad personas"))
for i in range (0,M):
    datos = []
    nombre = input ("Ingrese el nombre del cliente: ")
    datos.append(nombre)
    edad = int(input("Ingrese la edad del cliente: "))
    datos.append(edad)
    datL.append(datos)
imprimirMatriz(datL)