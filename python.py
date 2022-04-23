

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
cadena = 'Se suspende los partidos de fútbol por 10 días, en vez de fútbol haremos gimnacia funcional en casa'
def principal():
    #punto 1
    pedirFrase = input('Por favor ingrese una frase: ')
    listaDePalabras = pedirFrase.split()
    contar1 = listaDePalabras.count('fútbol')
    contar2 = listaDePalabras.count('Fútbol')

    if contar1 > 1 or contar2 > 1:
        print('La palabra Fútbol se repite más de 1 vez.')

    #punto 2
    for palabra in listaDePalabras:
        contador = 0
        for letra in palabra:
            contador+=1
        if contador > 10:
            print('La palabra',palabra,'SI supero el limite de caracteres')
            palabraCortada = palabra[0:10]

            print('La palabra',palabra,'cortada hasta el decimo caracter es',palabraCortada)
            
principal()





