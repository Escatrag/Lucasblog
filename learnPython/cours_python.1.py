#Utilisé pour lancer les script bash
import os
import sys

#Les cours
def cours(choixCours):
	if choixCours == 1:
		print("===Le python en lui même===")
		print("Le python est un langage de haut niveau, crée par Guido Van Rossum a le fin des années 80. \nIl fonctionne sur une grande partie des machines, Windows, Mac et Linux, et est integré d'ailleurs par défaut sur Mac et Linux.\nLe python est un langage simple a utiliser et est un bon langage pour commencer la programmation et en comprendre la logique.")
	if choixCours == 2:
		print("===Lancer un script python===")
		print("Que vous soyez sur Mac, Windows ou Linux, la technique n'est pas la même. Sur Linux et Mac, il suffit de taper la commande 'python votre-script.py'.\nToutefois, certains script ne sont pas compatibles car les versions de python evoluent.\nIl faut alors installer une autre version de python, comme la 3 par exemple et taper 'python3 votre-script.py'.\nSur Windows, il est imperatif d'installer un interpreteur python disponible sur le site officiel de python: https://www.python.org/.\nEnsuite, selectionner son script, faire un clic droit et ouvrir avec Python, puis F3 ou simplement double cliquer dessus.\nLe script est alors executé.\nLes differences entre python 2.7 et python 3 sont importantes, alors verifiez bien la version de python que vous avez.")
	if choixCours == 3:
		print("===Afficher du texte===")
		print("Afficher du texte va permettre de voir le bon deroulement de votre script mais également de pouvoir communiquer avec votre programme.\nSi vous ne savez pas quelle donnée est attendue, comment pouvez vous rentrer les données voulues ?\nAfficher du texte est donc une fonction essentielle, qui peut-être mise en oeuvre simplement avec 'print()'.\nPar exemple, si je veux afficher 'Hello World' on tapera:\nprint(\"Hello World\")\nEt etc, tant que le texte est entre quillemets !\nSinon, python retournera une erreur !\nC'est normal, car on cherche à afficher du texte, et pas une variable !\nEn effet, pour afficher des variables, il faut ecrire sans guillements.\nPar exemple, on crée notre variable (nous verrons plus tard ce que c'est):\nabc=\"123abdx\"\nprint(abc)\nLe résultat sera alors\n123abdx\nCela marche également avec tous les types de données.\nPython va afficher le contenu de abc (en l'occurence 123abdx).\n-En lien: l'exercice 1-") 
	if choixCours == 4:
		print("===Les variables===")
		print("C'est une lettre un mot qui va contenir un type de donnée, n'importe quel type.\nPar exemple, on peut crée une variable 'hello' qui contient la valeur '13'.\nOn va alors la déclarer en faisant:\nhello = 13\nPython va alors retenir que la variable hello vaut 13.\nMais les variables ne contiennent pas que des nombres entier !\nElles peuvent contenir du texte, des nombres a virgule, des listes -nous verrons plus tard ce que c'est- ,des boolean (c'est a dire que la variable sera égale a True ou False).\nIl y en a d'autre, mais restons dans le simple pour le moment.\nPour du texte, on dit:\nhello = \"hello\"\nPour des nombres a virgules, c'est:\nhello = 4.2\nLe point est important, car si l'on met une virgule, cela ne donne pas le même resultat.\nLes listes sont un type spécial de donnée.\nUne liste se déclare en faisant:\nhello = [\"h\",\"e\",\"l\",\"l\",\"o\"]\nMais comment accéder a un element de la liste étant donné que taper print(hello) me renvoie ['h', 'e', 'l', 'l', 'o'] ?\nOn fait alors print(hello[0]), qui va afficher 'h', soit le 1er élément de la liste.\nSi l'on fait print(hello[1]), le résultat sera 'e' etc...\nNotre liste a une longueur de 5, mais le maximum que l'on puisse afrficher est print(hello[4]), car le premier element de la liste est l'élément [0] et non [1]\nSi l'on cherche a afficher un caractère qui n'existe pas dans la chaine, par exemple print(hello[5]), on obtient alors une erreur, car le dernier caractère que l'on peut afficher est 'o', qui s'affiche avec print(hello[4]).\nUne boolean est une variable qui est égale a True ou a False, et on la déclare en faisant: \nhello = True' ou 'hello = False\nC'est très pratique pour les conditions binaires.\nIl est important de noter que les noms de variables ne peuvent pas être des nombre ou des caractères speciaux, sinon Python retourne une erreur.Une autre \"règle\" (plutot une convention) est que les variables ne commencent jamais par une majuscule ou un nombre.\n-En lien: l'exercice 2-")
	if choixCours == 5:
		print("===Les operateurs===")
		print("Les operateurs sont les operations que l'on peut faire sur les nombres.\nPar exemple:\nprint(3+2)\nprint(3-2)\nprint(3*2)\nprint(6/2)\nretourne 5,1,6 ou bien 3.\nOu encore avec des variables:\na=7\nb=4\nprint(a + b)\nretourne 11 etc...\nOn peut également faire des opérations sur les variables telles que:\na= 2+3\nb=a+5\nprint(b)\nqui retournera 10.\n<COURS A FINIR>")
	if choixCours == 6:
		print("===Les commentaires===")
		print("Pas encore écrit")
	if choixCours == 7:
		print("===Communiquer avec son programme===")
		print("Pas encore écrit")
	coursSuivant(choixCours)
#Exercices + correction	
def exercices(choixExo):
	if choixExo == 1:
		print("Ecrire un 'Hello world'")
		exo1 = input()
		if 'print("' in exo1 and  '")' in exo1:
			print("Exercice Reussi !")
		else: 
			print("Dommage, reesaie !")
	if choixExo == 2:
		print("Enregistrer son nom dans une variable, puis afficher cette variable sur la ligne suivante")
		exo2l1 = input()
		exo2l2 = input()
		if '=' in exo2l1 and '"' in exo2l1 and  '"' in exo2l1 and 'print(' in exo2l2 and  ')' in exo2l2:
			print("Exercice Reussi !")
		else:
			print("Dommage, reesaie !")
		
	exoSuivant(choixExo)
#Fonctions Afficher cours suivant cours et exos
def coursSuivant(choixCours):
	choixCoursSuivant = input("\nLancer le cours suivant ? Y/N ")
	if choixCoursSuivant == "Y" or choixCoursSuivant == "y":
		choixCours +=1
		cours(choixCours)
	else:
		coursMenu()
def exoSuivant(choixExo):
	choixExoSuivant = input("\nLancer l'exo suivant ? Y/N ")
	if choixExoSuivant == "Y" or choixExoSuivant == "y":
		choixExo +=1
		exercices(choixExo)
	else:
		exercicesMenu()
#choix des Cours
def coursMenu():
	print("Choisir le numero du cours")
	print("(0) Revenir au menu précédent")
	print("(1) Le python en lui même")
	print("(2) Lancer un script python")
	print("(3) Afficher du texte")
	print("(4) La base de la programmation, les variables")
	print("(5) Les operateurs")
	print("(6) Les commentaires")
	print("(7) Communiquer avec son programme")
	choixCours = input("Le numero du cours : ")
	while 1:
		if choixCours.isdigit() == False:
			print("Rentrez un VRAI nombre")
			choixCours = input("Le numero du cours : ")
		else:
			break
	choixCours = int(choixCours)
	if choixCours == 0:
		menu()
	else:	
		cours(choixCours)
#Choix des exercices
def exercicesMenu():
	print("Choisir le numero de l'exercice (du plus facile au plus dur)")
	print("(0) Revenir au menu précédent")
	print("(1) Hello World")
	print("(2) Comment tu t'appelles ?")
	choixExo = input("Le numero de l'exercice : ")
	while 1:
		if choixExo.isdigit() == False:
			print("Rentrez un VRAI nombre")
			choixExo = input("Le numero de l'exercice : ")
		else:
			break
	choixExo = int(choixExo)
	if choixExo == 0:
		menu()
	else:
		exercices(choixExo)
#Menu principal
def menu():
	if updateVerifiee == False:
		verifUpdate = open("update.txt", "w")
		verifUpdate.write("1")
		verifUpdate.close()
	print("========== Les bases de Python, avec Python==========")
	print("Pour acceder a une partie, tapez simplement le nom ou le numero de la partie a laquelle vous souhaitez acceder\n")
	print("1) Cours")
	print("2) Exercices")
	print("3) Lancer l'interpreteur python - taper lancer (Ne marche pas sur Windows)")
	print("4) A propos - taper about")
	print("5) Quitter\n")
	while 1:
		choixMenu = input("Nom de la partie: ")
		if choixMenu == 'Cours' or choixMenu == 'cours' or choixMenu == "1":
			coursMenu()
			break
		elif choixMenu == 'Exercices' or choixMenu == 'exercices'or choixMenu == "2":
			exercicesMenu()
			break
		elif choixMenu == 'lancer' or choixMenu == 'Lancer'or choixMenu == "3":
			print("Taper exit() pour quitter le terminal\n")
			os.system('python3')
			break
		elif choixMenu == "about"or choixMenu == "4":
			print("Crée, pensé, codé, par Luca")
			print("Vous pouvez m'envoyer vos scripts a l'adresse escatrag@gmail.com pour correction")
			print("Le code de ce programme est libre pour permettre l'exploration du code")
			print("Ce programme est libre d'être modifié, partagé, amelioré mais non vendu")
			input("Appuyez sur Entrée pour continuer...")
			menu()
			break
		elif choixMenu == 'Quitter' or choixMenu == 'quitter' or choixMenu == "5":
			quit()
			break
		else :
			choixMenu = input("Rentrez un choix\n")
		

#verification mise a jour
def maj():
	if os.name == "posix":
		os.system('./checkUpdate.sh')
	elif os.name == "nt":
		os.system('checkUpdate.bat')
		print("Windows étant une tanée pour les scripts batch, veuillez regarder les mises a jour ici :\nhttp://lucasblog.net23.net/cours_python/\nUn script reglant tout ca viendra (j'espère)")
		menu()
	else:
		print("La verification des mises à jour a échoué")
		menu()

#Premier lancement
verifUpdate = open("update.txt", "r")
verifUpdate2 = verifUpdate.read()
verifUpdate.close()
if verifUpdate2 == "1":
	updateVerifiee = True
	maj()
else:
	updateVerifiee = False
	menu()
