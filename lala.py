




electrodomesticos= {}
indumentaria= {}
alimentos= {}
perfumeria= {}
vendedores= {}

def Vendedor():   
    for i in range(4):
        nombre= input("Ingrese el nombre del vendedor/ra: ")
        area= input("Ingrese el area al que se dedica el vendedor/ra: ")
        dinero= float(input("Ingrese la cantidad de reporte del vendedor/ra: "))

        if area == "electrodomesticos" or area == "Electrodomesticos":
            electrodomesticos[nombre] = dinero
            vendedores[nombre] = dinero
        elif area == "indumentaria" or area == "Indumentaria":
            indumentaria[nombre] = dinero
            vendedores[nombre] = dinero
        elif area == "alimentos" or area == "Alimentos":
            alimentos[nombre] = dinero
            vendedores[nombre] = dinero
        elif area == "perfumeria" or area == "Perfumeria":
            perfumeria[nombre] = dinero
            vendedores[nombre] = dinero
        else:
            print("El area que ingreso no se encuentra en nuestros registros.")

def Principal():
    print("\nDe que sector quiere saber el reporte?")
    print("1.- Electrodomesticos")
    print("2.- Indumentaria")
    print("3.- Alimentos")
    print("4.- Perfumeria")
    print("5.- Salir")
    x=True
    while x == True:
        try:
            opcion=int(input("Ingrese una opcion: "))
            if opcion > 0 or opcion < 6:
                x= False
                if opcion == 1:
                    for clave in electrodomesticos:
                        print(f"Nombre: {clave}\nDinero recaudado: {electrodomesticos[clave]}$")
                        input("Apriete cualquier letra para volver al menu: ")
                        Principal()
                elif opcion == 2:
                    for clave in indumentaria:
                        print(f"Nombre: {clave}\nDinero recaudado: {electrodomesticos[clave]}$")
                        input("Apriete cualquier letra para volver al menu: ")
                        Principal()              
                elif opcion == 3:
                    for clave in alimentos:
                        print(f"Nombre: {clave}\nDinero recaudado: {electrodomesticos[clave]}$")
                        input("Apriete cualquier letra para volver al menu: ")
                        Principal()
                elif opcion == 4:
                    for clave in perfumeria:
                        print(f"Nombre: {clave}\nDinero recaudado: {electrodomesticos[clave]}$")
                        input("Apriete cualquier letra para volver al menu: ")
                        Principal()
                else:
                    print("Usted eligio la opcion salir... Hasta luego :)")
                    break
            else:
                print("Ingreso una opcion que se encuentra en el menu. Intente de nuevo")
        except Exception as e:
            print("Ocurrio un error! de tipo --->", type(e).__name__)


#Por ultimo llamamos a las funciones
Vendedor()
Principal()