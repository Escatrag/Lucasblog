function codedecesar(choix) {
	//variables 
	var lettres = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
	var chaineCryptee = "";
	var aff, aff2;
	var monMot = document.getElementById("messtelquel").value; //("Rentrez un mot :")
	var pas = document.getElementById("pas").value; //("Rentrez un pas :")
    var fin = monMot.length;
    aff = aff2 = 0;
    pas = parseInt(pas);
    monMot = monMot.toLowerCase();
    monMot = monMot.replace(/ /g, "");

    //reduire le pas
    while (pas > 26) {
        pas -= 26;
    }
    
    while (1 === 1) {
        //affichage final
        if (fin == 0){
            break;
        }
        //comparer les lettres
        else if (monMot[aff] == lettres[aff2]) {
			if(choix == 1) {
            	if (aff2 + pas > 25) {
                	aff2 -= 26;
            	}
           		chaineCryptee += lettres[aff2 + pas];
            }
			else if (choix == 2) {
				if (aff2 - pas < 0){
                	aff2 += 26;
            	}
            	chaineCryptee += lettres[aff2 - pas];
            }
            aff += 1;
            aff2 = 0;
            fin -=1;
        }
        //sinon, regarder la lettre d'apres
        else{
            aff2 += 1;
        }
    }
    document.getElementById("messtransforme").value = "";
    if (choix == 1) {
        document.getElementById("messtransforme").value = "Chaine cryptée : " + chaineCryptee;
    }
    else {
        document.getElementById("messtransforme").value = "Chaine décryptée : " + chaineCryptee;
    }
    
}