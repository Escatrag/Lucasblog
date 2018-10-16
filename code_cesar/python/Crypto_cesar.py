#variables
lettres = "abcdefghijklmnopqrstuvwxyz"
espaces = []
def crypto():
    monMot = input("Rentrez un mot : ")
    monMot = monMot.lower()
    fin = len(monMot)
    pas = input("Rentrez un pas : ")
    pas = int(pas)
    chaineCryptee = ""
    aff= 0
    aff2 = 0

    choix = input("""1)Crypter
2)Décrypter \n""")
    
    if choix == '1' or choix == 'crypter' or choix == 'Crypter':
        choix = '1'
    else:
        choix = '2'
    
    #reduire le pas
    while pas>26:
        pas-=26
        
    while 1:
        #affichage final
        if fin == 0:
            if choix == '1':
                print("Chaine cryptée :")
            else:
                print("Chaine décryptée :")
            print(chaineCryptee)
            crypto()
            
        #comparer les lettres
        elif monMot[aff] == lettres[aff2]:
            if choix == '1':
                if aff2 + pas > 25:
                    aff2 -= 26
                chaineCryptee += lettres[aff2 + pas]
            else:
                if aff2 + pas < 0:
                    aff2 += 26
                chaineCryptee += lettres[aff2 - pas]
            aff += 1
            aff2 = 0
            fin -=1
        #sinon, regarder la lettre d'apres
        else:
            aff2 += 1

#premier lancement
crypto()  


            
        
