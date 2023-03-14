# Programa para calcular la nota definitiva de un estudiante
# Autor: Andres Elizalde
# Fecha: Enero 27 2023
nombre=input("Ingrese el nombre del estudiante:")
nota1=float(input("Ingrese la Nota1 del estudiante:"))
nota2=float(input("Ingrese la Nota2 del estudiante:"))
nota3=float(input("Ingrese la Nota3 del estudiante:"))
notaing=float(input("Ingrese la Nota de ingles del estudiante:"))
promedio=(nota1*0.20)+(nota2*0.25)+(nota3*0.35)+(notaing*0.20)
print("La nota de " , nombre , " es " , promedio)