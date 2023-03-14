# Ejercicio diccionario de datos por id diccionario de diccionarios
# Autor: Andres Elizalde
# Fecha: Febrero 13 2023
id=int(input("Ingrese su id en numeros enteros: "))
personas = {}

while id >= 0:
    datos = {}
    datos["nombre"] = input("Ingrese el nombre: ")
    datos["apellido"] = input("Ingrese el apellido ")
    datos["fec_nac"] = input("Ingrese la fecha de nacimiento: ")
    
    personas[id] = datos
    
    id = int(input("\nIngrese su id de la siguiente persona, para finalizar ingrese un numero negativo: "))

print("\n","="*30,"\n")
for k in personas:
    print("ID: ",k)
    print("NOMBRE: ",personas[k]["nombre"])
    print("APPELLOIDO: ",personas[k]["apellido"])
    print("FECHA DE NACIMIENTO",personas[k]["fec_nac"])
    print("\n","="*30,"\n")


# for k in personas:
#     print("ID: ",personas["id"])
#     print("NOMBRE: ",personas["nombre"])
#     print("APPELLOIDO: ",personas["apellido"])
#     print("FECHA DE NACIMIENTO",personas["fec_nac"])