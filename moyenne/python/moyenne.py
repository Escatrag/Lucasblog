#initialisation variables
nbr_note_dep = 0
moyenne = moyenne2 = moyenne3 = 0

#savoir combien de notes on a
nbr_note = input("Combien de notes ? ")

#boucle pour calculer les notes
while nbr_note_dep < int(nbr_note) :
    note = float(input("Note ? "))
    
    #si la note est + grande que 20
    if note > 20 :
        sur_cmb_note = int(input("Votre note est trop grande. Indiquez sur combien elle est "))
    
        #quand la note est plus grande que le denominateur
        while sur_cmb_note < note :
            sur_cmb_note = input("Veuillez entrez un nombre correct AU DESSUS de votre note ")
    
        #conversion sur 20
        note = note / sur_cmb_note * 20

    #partie coef
    coef = float(input("Coef ? "))

    #quand le coef est 0
    while coef <= 0 :
        coef = input("Un coef sur " + str(coef) + " n'est pas possible")
    
    #calcul de la moyenne
    moyenne = float(note) * float(coef) + moyenne
    moyenne2 = float(coef) + moyenne2
    moyenne3 = moyenne / moyenne2
    nbr_note_dep += 1

#affichage moyenne
print("Votre moyenne est de " + str(moyenne3) + " sur 20")
