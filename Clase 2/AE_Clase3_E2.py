# Programa para calcular calificacion cuantitativa  de estudiante segun clasificacion cuantitativa
# Autor: Andres Elizalde
# Fecha: Enero 31 2023
nombre=input("Ingrese el nombre del estudiante:")
calificacion_cuant=int(input("Ingrese la clasificacion del estudiante en numeros:"))
if calificacion_cuant <= 59:
    print("El estudiante " ,nombre, "obtuvo una nota cuantitativa de: " ,calificacion_cuant, "correspondiente a una nota cuantitativa de D, que porqueria 😒")
else :
    if calificacion_cuant <=79 :
        print("El estudiante " ,nombre, "obtuvo una nota cuantitativa de: " ,calificacion_cuant, "correspondiente a una nota cuantitativa de C, esfuerzate mas 😊")
    else:
        if calificacion_cuant <=89 :
            print("El estudiante " ,nombre, "obtuvo una nota cuantitativa de: " ,calificacion_cuant, "correspondiente a una nota cuantitativa de B, sigue esforzandote 👌")
        else:
            print("El estudiante " ,nombre, "obtuvo una nota cuantitativa de: " ,calificacion_cuant, "correspondiente a una nota cuantitativa de A, felicitaciones !!😎")