a = []
N = int(input("Ingrese la cantidad de integrantes "))
grupo1 = []
grupo2 = []
for i in range (0,N):
    a.append(input("Ingrese el peso del integrante "))
print(a)
for i in range (0,len(a)):
    if i % 2 == 0:
        grupo1.append(int(a[i]))
    else:
        grupo2.append(int(a[i]))
print(grupo1)
print(grupo2)

pesostot = []
pesog1 = 0
pesog2 = 0
for i in range (0,len(grupo1)):
    pesog1 += int(grupo1[i])
    
for i in range (0,len(grupo2)):
    pesog2 += int(grupo2[i])

pesostot.append(pesog1)
pesostot.append(pesog2)

print(pesostot)