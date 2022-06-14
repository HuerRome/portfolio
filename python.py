

'''
Captura la frase del teclado y luego transformala en minuscula, mostrar ambas cadenas.
por ejemplo de la prueba las siguientes cadenas: SI , COMPRENDO LO QUE DICES.
'''


'''
1.- capturando frase input se utiliza para pedir un dato
2.- Ahora mostramos ambas cadenas tanto en minuscula como en mayuscula
3.- Ahora mostramos (imprimos por pantalla) el resultado
'''
'''
Frase = input('Ingrese una frase por favor: ')

FraseMayuscula = Frase.upper()
FraseMinuscula = Frase.lower()


print('La frase en mayuscula es: ', FraseMayuscula)
print('La frase en minuscula es: ', FraseMinuscula)
'''

'''
#de la siguiente cadena indique:
#"Se suspende los partidos de fútbol por 10 días, en vez de fútbol haremos gimnacia funcional en casa"
#1. Cantidad de letras de la cadena 
#2. Cantidad de veces que se repite la letra "e"
#3. Cantidad de veces que se repite la palabra fútbol
#4. Reemplazar fútbol por voley

Cadena = 'Se suspende los partidos de fútbol por 10 días, en vez de fútbol haremos gimnacia funcional en casa'
ListaPalabras = Cadena.split()

#Punto 1. 
for palabra in ListaPalabras:
    ListaLetras= list(palabra)

    print(f'Palabra numero: {ListaPalabras.index(palabra)+1}')
    print(f'--> Cantidad de letras: {len(ListaLetras)}')

#Punto 2.
contador = 0
for palabra in ListaPalabras:
    for letra in palabra:
        if(letra == 'e' or letra == 'E'):
            contador+=1

print('La letra e se repite', contador,'veces')

#Punto 3.
futbol = ListaPalabras.count('fútbol')
print(f'fútbol se repite {futbol} veces')

#Punto 4.
Cambio = Cadena.replace('fútbol','voley')

resultado = print(Cambio)'''



#problema 15 
'''
ingrese una frase por teclado, indique:
Se suspende los partidos de fútbol por 10 días, en vez de fútbol haremos gimnacia funcional en casa
'''
#punto 3
contraseña = 'soy_la_contraseña'
contador = 0 

while True:
    pedir = input("Por favor ingrese una contraseña: ")
    contador+=1

    if pedir == contraseña:
        print("Contraseña correcta :) Bienvenido/a")
        break
    elif contador < 4:
        #No colocamos un break (romper) porque el usuario aun no coloco la contraseña correcta
        print("Ingreso una contraseña incorrecta. Intente de nuevo (máximo 4 veces)... ")

    else:
        print("Ingreso la contraseña incorrecta más de 4 veces, Se cerrara el programa\n Cerrando programa...")
        break

#punto 4
numero_personas = int(input("\nIngrese el numero de personas a evaluar: "))
contador = 0
edades = 0 
promedio_edad_mujer = 0
porcentaje_varon= 0
porcentaje_mujer = 0

while contador < numero_personas:
    contador+=1
    sexo = input("Ingrese el sexo de la persona: ")
    edad = int(input("Ingrese la edad de la persona: "))
    #Evaluamos numero de varones y mujeres
    if sexo == "mujer" or sexo == "Mujer":
        porcentaje_mujer+=1
        edades+=edad
        promedio_edad_mujer+=edad
    else:
        edades+=edad
        porcentaje_varon+=1


'''Para calcular porcentaje usamos la rregla de tres simple'''
#promedio edad
personas = porcentaje_mujer + porcentaje_varon
promedio_edad_total = edades/personas
print(f"El promedio de edad es: {promedio_edad_total}")

#promedio edad de mujeres
promedio_edad_mujeres = promedio_edad_mujer/porcentaje_mujer
print(f"El promedio de edad de mujeres es: {promedio_edad_mujeres}")

#porcentaje final
mujer = porcentaje_mujer/personas*100
print(f"El porcentaje de mujeres es: {mujer}%")

hombre = porcentaje_varon/personas*100
print(f"El porcentaje de hombres es: {hombre}%")