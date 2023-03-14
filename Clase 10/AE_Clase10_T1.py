####La institución educativa “SamEduca” cuenta con N docentes, conociendo de cada uno de ellos su número de cédula, nombre, categoría y números de horas laboradas en el mes. Se pide realizar un programa que calcule el valor de los honorarios de cada docente y el valor total a pagar por concepto de honorarios. Para este proceso, nos suministran el diccionario donde se define el valor de la hora para cada categoría,
# Autor: Andres Elizalde
# Fecha: Febrero 13 2023

#Funcion de datos numericos naturales
def verf_Nat (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < 1:
                print("El dato debe ser mayor o igual 0")
                continue
            break
        except ValueError:
            print("El dato ingresado debe ser numerico entero")
    return dato

#Funcion para verificar entre a o b opciones
def ver_ab (etiqueta,a,b):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < a or dato > b :
                print("Elija una unica opcion entre " , a , " o " , b)
                continue
            break
        except ValueError:
            print("La eleccion debe ser escrita en numeros")
    return dato

N = verf_Nat("Ingrese el numero de docentes a procesar: ")
total_honorarios=0
diccionario_categoria = {1:25000 , 2:30000 , 3:40000 , 4:45000 , 5:60000}

for i in range (0,N):
    cedula=verf_Nat("Ingrese el numero de cedula del docente: ")
    nombre=input("Ingrese el nombre del docente: ")
    categoria=ver_ab("Escriba la categoria en numeros (de 1 a 5) del docente "+nombre+": ", 1, 5)
    horas=verf_Nat("Ingrese la cantidad de horas laboradas por "+nombre+" en numeros: ")
    
    honorarios = diccionario_categoria[categoria] * horas
    total_honorarios += honorarios
    
    print("="*30,"\n","El docente ",nombre," identificado con la cedula ",cedula," tiene un saldo a favor por concepto de honorarios de: $","{:,.0f}".format(honorarios),"\n")
    
print("="*15,"Informe Final","="*15,"\nEl total a pagar por concepto de honorarios para los ",N," docentes es de: $","{:,.0f}".format(total_honorarios))