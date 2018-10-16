function plus_ou_moins() {
    function jeu(){
        var result = Math.floor(Math.random() * 51);
        var compteur = 1;
        while (quest != result) {
            if (quest > result) {
                quest = prompt("C'est -");
            }
            else {
                quest = prompt("C'est +");
            } 
            compteur = compteur + 1;
	       if (quest == 'quit') {
                break;
           }
        }
        if (quest == 'quit') {
            alert("Dommage, le nombre était " + result);
        }
        else {
            alert("Bravo, vous avez trouvé le nombre secret ! C'était bien " + result + " ! Tu as reussi en " + compteur + " coups !");
        }
    }
    var quest = prompt("Rentrez un nombre (entre 1 et 100) -tapez quit pour arreter");
    if (quest != 'quit'){
        jeu()
    }
}