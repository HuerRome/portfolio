

from itertools import count
from operator import le, truediv

from math import sin, cos

lista= []

for i in range(91):
    var = sin(2*i) 
    lista.append(var)

print(len(lista))

contador=0
for x in lista:
    print('numero: ',contador,'--->',lista[lista.index(x)], 'se repite', lista.count(lista[lista.index(x)]))
    contador+=1




