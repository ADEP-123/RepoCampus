# Autor: Andres Elizalde
# Fecha: Febrero 14 2023
# programa gestion facturas

factura1={1:5000, 2:30000, 3:75000}


n=input("Desea Añadir una nueva factura? si o no").lower()
while n !="no":
    
        key=int(input("Digite el codigo de la nueva factura: "))
        value=int(input("Ingrese el costo de la factura: "))
        factura1[key]=value
        n=input("Desea Añadir una nueva factura? si o no")
        
pago_factura=input("Desea pagar una factura? ").lower()
while pago_factura !="no":
       
    if  pago_factura=="si":
        
        for j,k in factura1.items():
            print(j,k)
        cod_f=int(input("Digite el codigo de la factura que desea pagar:"))
        del factura1 [cod_f]
        pago_factura=input("Desea pagar una factura? ").lower()
    else:
        pago_factura=="no"
        for j,k in factura1.items():
            print(j,k)
        
        
        
        

print(factura1)
        
                
       
            


        
