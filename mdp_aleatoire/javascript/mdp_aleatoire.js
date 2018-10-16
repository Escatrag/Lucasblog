function mdp_aleatoire(){
    //le 'dico' dans lequel on va venir choisir nos lettres
    var char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~!@#$%^&*()-_=+[]{};:,.<>/?";
    var lettreAlea;
    var op;
    //le mot de passe vide
    var mdp = "";
    
    //les questions utilisateurs
    var nbr_char = document.getElementById('nbr_char').value;
    var nbr = document.getElementById('nbr').checked;
    var maj = document.getElementById('maj').checked;
    var char_spec = document.getElementById('char_spec').checked;
    
    //l'option minuscule par defaut 
    var x =1;
    if (nbr_char > 2000){alert('Pour des nombres trop grands, le script peut mettre du temps a générer, donc pas de panique ! ;)');}
    
    //gestion des options
    //op est l'options que l'on a choisie
    //Une option
    if (nbr == true){x = 2;op = "nbr";}
    if (maj == true){x = 2;op = "maj";}
    if (char_spec == true){x = 2;op = "char_spec";}
    //deux options
    if ((nbr == true) && (char_spec == true)) {x = 3;op = "nbr+char_spec";}
    if ((maj == true) && (char_spec == true)) {x = 3;op = "maj+char_spec";}
    if ((nbr == true) && (maj == true)){x = 3;op = "nbr+maj";}
    //trois options
    if ((nbr == true) && (maj == true) && (char_spec == true)){x = 4;}
    
    //generation du mot de passe
    for (i=0;i<nbr_char;i++){
        //genere un nombre aleatoire en fonction des options choisies (va choisir si le caractere est min, maj ou nombre)
        if ((x == 1) || (x == 2)) {
            var opalea = Math.floor(Math.random() * (x - 1 + 1)) + 1;
            //generation des lettres aleatoires
            if (opalea == 1){lettreAlea = Math.floor(Math.random() * (25 - 0 + 1)) + 0;}
            if ((opalea == 2)&& (op == "nbr")){lettreAlea = Math.floor(Math.random() * (61 - 52 + 1)) + 52;}
            if ((opalea == 2) && (op == "maj")){lettreAlea = Math.floor(Math.random() * (51 - 26 + 1)) + 26;}
            if ((opalea == 2) && (op == "char_spec")){lettreAlea = Math.floor(Math.random() * (88 - 62 + 1)) + 62;}
        }
        if (x == 3){
            var opalea = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            
            if (opalea == 1){lettreAlea = Math.floor(Math.random() * (25 - 0 + 1)) + 0;}
            
            if (op == "nbr+char_spec") {
                if (opalea == 2){lettreAlea = Math.floor(Math.random() * (61 - 52 + 1)) + 52;}
                if (opalea == 3){lettreAlea = Math.floor(Math.random() * (88 - 62 + 1)) + 62;}
            }
            if (op == "nbr+maj"){
                if (opalea == 2){lettreAlea = Math.floor(Math.random() * (51 - 26 + 1)) + 26;}
                if (opalea == 3){lettreAlea = Math.floor(Math.random() * (88 - 62 + 1)) + 62;}
            }
            if (op == "maj+char_spec"){
                if (opalea == 2){lettreAlea = Math.floor(Math.random() * (51 - 26 + 1)) + 26;}
                if (opalea == 3){lettreAlea = Math.floor(Math.random() * (88 - 62 + 1)) + 62;}
            }
        }
        if (x == 4){
            var opalea = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
            if (opalea == 1){lettreAlea = Math.floor(Math.random() * (25 - 0 + 1)) + 0;}
            if (opalea == 2){lettreAlea = Math.floor(Math.random() * (61 - 52 + 1)) + 52;}
            if (opalea == 3){lettreAlea = Math.floor(Math.random() * (51 - 26 + 1)) + 26;}
            if (opalea == 4){lettreAlea = Math.floor(Math.random() * (88 - 62 + 1)) + 62;}
        }
        //on ajoute la lettre aleatoire au mot de passe
        mdp+=char[lettreAlea];
    }
    //affichage mot de passe
    document.getElementById("mdp_gen").innerHTML = "Le mot de passe : " + mdp;
}