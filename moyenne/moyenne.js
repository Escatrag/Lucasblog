//initialisations variables
var note, coef, moyenne, moyenne2, moyenne3
var nbr_note_dep = 0
moyenne = moyenne2 = 0
var sur_cmb_note = 0
//savoir combien de notes on a
var nbr_note = parseInt(prompt("Entrez votre nombre de notes (Les nombres décimaux seront arrondis a l'unité inferieure)"))

/*if (typeof(nbr_note) != 'number') {
    nbr_note = prompt("Entrez un nombre entier")
}*/

//boucle pour calculer les notes
while (nbr_note_dep < nbr_note) {
    note = parseFloat(prompt("Note"))
    
    //si la note est + grande que 20
    if (note > 20) {
        sur_cmb_note = parseFloat(prompt("Votre note est trop grande. Indiquez sur combien elle est"))
	
	//quand la note est plus grande que le denominateur
        while (sur_cmb_note < note) {
            sur_cmb_note = prompt("Veuillez entrez un nombre correct EN DESSSOUS de votre note")
        }
	//conversion sur 20
        note = note / sur_cmb_note * 20
    }
    
    //Partie coef
    coef = parseFloat(prompt("Coef ?"))
    
    //quand le coef est 0
    while (coef <= 0) {
        coef = parseFloat(prompt("Un coef sur " + coef + " n'est pas possible"))
    }

    //calcul de la moyenne
    moyenne += note * coef
    moyenne2 += coef 
    moyenne3 = moyenne / moyenne2
    nbr_note_dep = nbr_note_dep + 1
}
//affichage moyenne
confirm("Votre moyenne est de " + moyenne3 + "/20")
