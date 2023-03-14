# clase diccionarios
# Autor: Andres Elizalde
# Fecha: Febrero 13 2023
####Permite crear modificar dos diccionarios al tiempo al igualarlos
def imprimirDic(d):
    d2 = d
    d2["Ciudad"] = ["Bucaramanga"]
    print("d2["'Ciudad'"]=", d2["Ciudad"])
    print("d["'Ciudad'"]=", d["Ciudad"])
    
##Permite igualar dos diccionarios crear una copia del segundo y solo modificar el segundo, no la copia ni el primero
def imprimirDic(d):
    d = d2.copy()
    d2["Ciudad"] = ["Bucaramanga"]
    print("d2["'Ciudad'"]=", d2["Ciudad"])
    print("d["'Ciudad'"]=", d["Ciudad"])

##########DICCIONARIOS
####Permite ordenar datos a traves de la clave y realizar una busqueda eficiente
####Tiene dos componentes importantes, la clave y el valor de la clave
####Los diccionarios se definen con llaves de la siguiente manera:
##{"Clave":"Valor"}

d1={"Nombre":"Sara","Edad":27,"Documento":1003882}
print(d1)

##Otra forma de hacerlo es mediante la funcion dict de la siguiente manera:
##dict(clave=valor)

d2=dict(Nombre="Sara",Edad=27,Documento=1003882)
print(d2)

####Se accede al elemento a traves de la funcion get
print(d2.get("Edad"))
##Otra forma de accceder a un valor en el diccionario es dicc.["clave"]:
print(d2["Edad"])
#print(d2["Sexo"]) #----> Da error al no existir la clave
print(d2.get("Sexo")) #----> Da none al no existir la clave
print(d2.get("Sexo","otro")) #----> Da otro, es decir el valor que pedimos ya que no existe la clave

####Como saber que claves hay dentro del diccionario

print("Sexo" in d2) #--> Como la llave no existe dice "false"
print("Edad" in d2) #--> Como la llave existe dice "true"

####Para cambiar el valor de alguna clave se hace de la siguiente manera dicc["Clave"]=El valor que queremos
d2["Edad"]=17
print(d2)

####Para crear una clave se hace igual que para cambiar el valor de alguna clave
d2["Sexo"]="F"
print(d2)

####Para eliminar utilizamos la funcion del de la siguiente manera del dicc[clave]
del d2["Sexo"]
print(d2)

####Como impirmir una lista con las claves de un diccionario, para eso se usa la funcion keys de la siguiente manera dicc.keys()
print(d2.keys())

####Como imprimir una lista con los valores de un diccionario, para eso se usa la funcion values de la siguiente manera: dicc.values()
print(d2.values())

####Como imprimier la clave y el valor de un diccionario en lista de tublas, para eso se usa la funcion items de la siguiente manera: dicc.items()
print(d2.items())

####Iterar
for k in d2:
    print(k , "==>" , d2[k])
for k,v in d2.items():
    print(k, "==>" ,v)

###Como limpiar un diccionario: con la funcion clear o con d2={}
#d2={}
#print(d2)
#d2.clear()
#print(d2)


