#Funciones

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
            if dato < 0:
                print("#"*15,"!!!ERROR!!!","#"*15,"El dato debe ser mayor o igual 0")
                continue
            break
        except ValueError:
            print("#"*15,"!!!ERROR!!!","#"*15,"El dato ingresado debe ser numerico entero")
    return dato

#Fin Funciones

nombre = input("Bienvenido, ingrese el nombre del empleado, para finalizar escriba la palabra fin: ")
informe = [["Nombre","Sal bruto $COL","Nomina neta (+25%) $COL"]]
nomnetTot= 0

while nombre.lower() != "fin":
    nomnet = 0
    datos = []
    nomina = verf_Nat("Ingrese el valor en numeros del salario bruto del empleado: $")
    nomnet = int(nomina + nomina*0.25)
    nomnetTot += nomnet
    datos.append(nombre)
    datos.append("$"+"{:,.0f}".format(nomina))
    datos.append("$"+"{:,.0f}".format(nomnet))
    informe.append(datos)
    nombre = input("Ingrese el nombre del siguiente empleado, para finalizar escriba la palabra fin: ")
promnomnet = int(nomnetTot/(len(informe)-1))
print("\nEl siguiente es el informe de nomina:")
imprimirMatriz(informe)
print("Promedio de la nomina neta: $" , "{:,.0f}".format(promnomnet))



