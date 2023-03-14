# Ejercicio diccionario de datos por id lista de diccionarios
# Autor: Andres Elizalde
# Fecha: Febrero 13 2023
id=int(input("Ingrese su id en numeros enteros: "))
personas = {}
lstpersonas = []

while id >= 0:
    personas = {}
    personas["id"] = id
    personas["nombre"] = input("Ingrese el nombre: ")
    personas["apellido"] = input("Ingrese el apellido ")
    personas["fec_nac"] = input("Ingrese la fecha de nacimiento: ")
    
    lstpersonas.append(personas)
    
    id = int(input("\nIngrese su id de la siguiente persona, para finalizar ingrese un numero negativo: "))

print("\n","="*30,"\n")
for d in lstpersonas:
    print("ID: ",d["id"])
    print("NOMBRE: ",d["nombre"])
    print("APPELLOIDO: ",d["apellido"])
    print("FECHA DE NACIMIENTO",d["fec_nac"])


# for k in personas:
#     print("ID: ",personas["id"])
#     print("NOMBRE: ",personas["nombre"])
#     print("APPELLOIDO: ",personas["apellido"])
#     print("FECHA DE NACIMIENTO",personas["fec_nac"])