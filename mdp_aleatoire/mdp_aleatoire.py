#On ajoute la librairie aleatoire
from random import randint

#le 'dico' dans lequel on va venir choisir nos lettres
char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-_=+[]{};:,.<>/?" 
#le mot de passe vide
mdp = "" 

#les questions utilisateurs
nbr_char = int(input("Nombre de caractères ? \n")) 
options = input("[OPTIONS] \n# -nbr --> nombres \n# -maj --> majuscules \n# -spec --> charactères speciaux\n")

#l'option minuscule par defaut 
x =1
#message de prevention
if nbr_char > 2000:
	print('Pour des nombres trop grands, le script peut mettre du temps a générer, donc pas de panique ! ;)')

#gestion des options
#op est l'options que l'on a choisie
#une option
if "-nbr" in options:
    x = 2
    op = "nbr"
if "-maj" in options:
    x = 2
    op = "maj"
if "-spec" in options:
	x = 2
	op = "spec"
#deux options
if "-nbr" in options and "-maj" in options:
    x = 3
    op = "nbr+maj"
if "-nbr" in options and "-spec" in options:
    x = 3
    op = "nbr+spec"
if "-maj" in options and "-spec" in options:
    x = 3
    op = "maj+spec"
#trois options
if "-nbr" in options and "-maj" in options and "-spec" in options:
    x = 4

#generation du mot de passe
for i in range(nbr_char):
	#x est en fonction des options
	#Pour 0 ou 1 option
	if x== 1 or x == 2:
		opalea = randint(1, x)
		if opalea == 1: 
			lettreAlea = randint(0,25)
		if opalea == 2 and op == "nbr":
			lettreAlea = randint(52,61)
		if opalea == 2 and op == "maj":
			lettreAlea = randint(26,51)
		if opalea == 2 and op == "spec":
			lettreAlea = randint(62,88)
	#Pour deux options
	if x == 3:
		opalea = randint(1,3)
		if opalea == 1: 
			lettreAlea = randint(0,25)
		if op == "maj+spec":
			if opalea == 2:
				lettreAlea = randint(26,51)
			if opalea == 3:
				lettreAlea = randint(62,88)
		if op == "nbr+spec":
			if opalea == 2:
				lettreAlea = randint(52,61)
			if opalea == 3:
				lettreAlea = randint(62,88)
		if op == "nbr+maj":
			if opalea == 2:
				lettreAlea = randint(52,61)
			if opalea == 3:
				lettreAlea = randint(26,51)
				
	#Avec toutes les options		 
	if x == 4:
		opalea = randint(1,4)
		if opalea == 1:
			lettreAlea = randint(0,25)
		if opalea == 2:
			lettreAlea = randint(52,61)
		if opalea == 3:
			lettreAlea = randint(26,51)
		if opalea == 4:
			lettreAlea = randint(62,88)

    #on ajoute la lettre aleatoire au mot de passe
	mdp+=char[lettreAlea]

#affichage mot de passe
print(mdp)

