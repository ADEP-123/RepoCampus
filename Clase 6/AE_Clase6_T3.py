# Programa para calcular tarifa energia electrica por estrato
# Autor: Andres Elizalde
# Fecha: Enero 31 2023

#Validacion estrato
def val_estr (etiqueta):
    while True:
        try:
            dato=int(input(etiqueta))
            if dato < 0 or dato > 5:
                print("El estrato debe ser entre 1 y 5")
                continue
            break
        except ValueError:
            print("El dato debe ser ecrito en numeros")
    return dato

nombre=input("Ingrese el nombre del ciudadano:")
estrato=val_estr(nombre + " Ingrese su estrato de 1 a 5:")
if estrato < 2:
    tarifa = 10000
elif estrato < 3:
    tarifa = 15000
elif estrato < 4:
    tarifa = 30000
elif estrato < 5:
    tarifa = 50000
else:
    tarifa = 60000
print (nombre, " usted tiene una tarifa basica de energia de: $" ,"{:,.0f}".format(tarifa))
    