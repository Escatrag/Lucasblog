from random import randint

while 1:
    compteur = 1
    nombre_gen = randint(0, 100)
    
    rep = int(input("Rentrez un nombre (entre 0 et 100) \n"))

    while rep != nombre_gen:
        if rep == 4242:
            break
        
        if rep < nombre_gen:
            rep = int(input("C'est + \n"))
        else:
            rep = int(input("C'est - \n"))

        compteur += 1
        
    print("Bravo, le nombre était bien " + str(nombre_gen))
    print("Tu as reussi en " + str(compteur) + " coups")
    rec = input("Recommencer ? Y/N \n")
    if rec == "Y" or rec == "y":
        continue
    else:
        break
        
