# clase matrices
# Autor: Andres Elizalde
# Fecha: Febrero 10 2023
##########Estructuras de datos##########
####Listas:
##hay listas de n dimensiones, conocidas como matrices, se numeran por filas y por columnas (en ese orden)
#0[ ][ ][ ][ ]
#1[ ][ ][ ][ ]
#2[ ][ ][ ][ ]
#3[ ][ ][ ][ ]
#- 0  1  2  3
#Para llamar alguno de sus datos, se llaman de la siguiente manera M[fila][columna]

mat = [[3,4,7],
       [2,8,10],
       [1,5,6],
       [13,15,17]]
#Impresion
print("mat[2,2]= ",mat[2][2])

#Modificación por el usuario
#mat[1][0] = int(input("Ingrese un numero: "))
print("mat[1,0]= ", mat[1][0])

#Imprimir
#print(len(mat))

#Funcion imprimir matriz
def imprimirMatriz(m):
    for fila in range(0,len(mat)):
        for colu in range(0,len(mat[fila])):
            print(mat[fila][colu],end="\t")
        print("")
