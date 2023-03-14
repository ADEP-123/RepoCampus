Palabra=input("Ingrese La palabra: ").lower()
LetrasA=[]
for i in range (0,len(Palabra)):
    LetrasA.append(Palabra[len(Palabra)-(i+1)])    
print (LetrasA)

if "".join(LetrasA) == Palabra:
    print("Si es palindrome")
else:
    print("No es palindrome")


VecesLetra = []
pospal = 0

for i in LetrasA:
    VecesLetra.append(int(LetrasA.count(i)))
print (VecesLetra)


for i in range (0,len(VecesLetra)):
    if VecesLetra[i] % 2 == 0:
        pospal += 0
    else:
        pospal += 1

if len(Palabra) % 2 == 0:
    if pospal == 0:
        print("Puede ser palindromo")
    else:
        print("No puede ser palindromo")
else:
    if pospal == 1:
        print("Puede ser palindromo")
    else:
        print("No puede ser palindromo")