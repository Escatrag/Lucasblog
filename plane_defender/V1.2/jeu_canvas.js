window.onload = function() {
    //On recupère le canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    
    //BOMBES
    //On définit ce qu'est la bombe + son image
    var bombes = new Image();
    bombes.src = "bombe.png";
    var animation, animationActiveFrame;
    animationActiveFrame = false;
    //les tailles et positions des bombes
    var positions_bombes = [];
    bombeX = 800;
    var dim_bombe = {w:50, h:41}
    var vit_bombe;
    
    //PLAYER
    //On définit la position du joueur + sa taille
    var joueurX, joueurY;
    joueurX = 250; joueurY = 260;
    var dim_joueur = {w:128, h:64}
    var player = new Image();
    player.src = "vaisseau.png";
    var first_screen_player = false;
    var score;
    var best_score;
    best_score = 0;
    var vit_joueur;
    
    //SOL
    var solX;
    solX = 0;
    var sol = new Image();
    sol.src = "ciel0.png";
    var partie_visible_sol;
    var debut_jeu = false;
    
    //FONCTIONS BOMBES
    function creation_bombes() {
        positions_bombes = [];
        bombeX = 800;
        //on boucle tant que le nombre de bombe n'est pas atteint
        for (i=0; i<3; i++) {
            //on genere une position Y aleatoire
            bombeY = Math.floor(Math.random() * 51)*7;
            //Qu'on ajoute a la liste des positions
            positions_bombes[i] = bombeY;
            //dessin des bombes au positions voulues
            ctx.drawImage(bombes, bombeX, bombeY);
        }
    }
    
    function animation_bombe(){
        animationActiveFrame = true;
        //dessin des bombes
        ctx.clearRect(0,0, canvas.width, canvas.height);
        //On redessine le sol
        fonction_sol();
        //on redessine le joueur
        positions_joueur();
        //on redessine les bombes
        repopBombes();
        //on affiche le score
        score_aff();
        //si les bombes sortent de l'ecran
        if (bombeX <= 0) {
            //on relance une série
            ctx.clearRect(bombeX, 0, 0, canvas.height);
            lancement_bombe();
        }
        else {
            //on regarde si il y a collision
            collision();
            bombeX -= vit_bombe;
        }
        animationActiveFrame = false;
    }
    
    function repopBombes() {
        //chaque fois que le canvas est effacé, on redessine les bombes
        for (e=0; e<3; e++) {
            ctx.drawImage(bombes, bombeX, positions_bombes[e]);
        }
    }
    
    function lancement_bombe() {
        vit_bombe += 1;
        score +=1;
        vit_joueur += 1;
        //alors on (re)lance une série de bombes
        creation_bombes();
        //puis on les fait bouger
        if (animationActiveFrame == false) {
            animation = setInterval(animation_bombe, 16);
        }
    }
    //FONCTION VAISSEAU
    function vaisseau() {
        //Ecoute des touches
        document.onkeydown = function(e){
            e.defaultPrevented;
            if (e) {        
                //On nettoie le canvas
                ctx.clearRect(0,0, canvas.width, canvas.height);
                //fonction du défilement du sol
                fonction_sol();
                //fonction affichage du score
                score_aff();
                //fonction repop des bombes
                repopBombes();
                //gestion touches gauche/droite
                if (e.keyCode === 39) {
                    joueurX += vit_joueur;
                }
                else if(e.keyCode === 37) {
                    joueurX -= vit_joueur;
                }

                //gestion touches haut/bas
                if (e.keyCode === 40) {
                    joueurY += vit_joueur;
                }
                else if (e.keyCode === 38) {
                    joueurY -= vit_joueur;
                }
                ctx.drawImage(player, joueurX, joueurY);
            }
        }
    }
    
    function positions_joueur() {
        //on redessine le joueur
        ctx.drawImage(player, joueurX, joueurY);
    }
    
    //AUTRES
    function score_aff() {
        var text = "Score : " + score;
        ctx.fillStyle = "red";
        ctx.font = "25px Arial";
        ctx.fillText(text, 0, canvas.height);
    }
    
    function collision() {
        //On regarde si il y a collision
        for (e= 0; e<3; e++) {
            if (joueurX < bombeX + dim_bombe.w &&
            joueurX +  dim_joueur.w > bombeX &&
            joueurY < positions_bombes[e] + dim_bombe.h &&
            dim_joueur.h + joueurY > positions_bombes[e]) {
                //on lance la fonction mort
                mort();
                //et on arrete le mouvement des bombes
                clearInterval(animation);
            }
        }
    }

    //FONCTIONS LANCEMENT + MORT
    function lancement_Jeu() {
        var text = "Pour jouer, appuyez sur Entrée puis sur les flèches du clavier";
        ctx.fillStyle = "red";
        ctx.font = "22px Arial";
        ctx.fillText(text, 50, 100);
        
    }
    
    function animateFirstScreen(){
        //animation du vaisseau + fond qui bouge
        //on verouille la frame
        animationActiveFrame = true;
        //on verifie si on a appuyé sur enter
        if (debut_jeu == true){
            clearInterval(animation);
            jeu();
        }
        else {
        ctx.clearRect(0, 240, canvas.width, canvas.height);
        fonction_sol();
        //gestion image joueur 
        if(first_screen_player == false) {
            joueurY -=2;
            if (joueurY == 240) {
    	       first_screen_player = true;
            }
	    }
        
        if (first_screen_player == true) {
            joueurY +=2;
            if (joueurY == 290) {
    	       first_screen_player = false;
            }
	    }
        
        //gestion lancement jeu
        //on détecte la touche 'Entrée'
        document.onkeydown = function(e) {
            e.defaultPrevented;
            if (e) {
                if (e.keyCode === 13) {
                    debut_jeu = true;
                }
            }
        }
        ctx.drawImage(player, joueurX, joueurY);
        //on dévérouille la frame
        animationActiveFrame = false;
        }
    }
    
    //fonction de mort + recommencer
    function mort() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var textmort = "Vous êtes mort. Appuyez sur Entrée pour recommencer";
        ctx.fillStyle = "red";
        ctx.font = "23px Arial";
        ctx.fillText(textmort, 100, 100);
        ctx.fillText("Score: ",300, 200);
        ctx.fillText(score, 380, 200);
        //on redessine le sol avant pour pouvoir écrire dessus
        ctx.drawImage(sol,0, 280);
        if (score > best_score) {
            best_score = score;
        }
        ctx.fillText("Meilleur score: ", 250, 250);
        ctx.fillText(best_score, 420, 250);
        //on détecte la touche 'Entrée'
        document.onkeydown = function(e) {
            e.defaultPrevented;
            if (e) {
                if (e.keyCode === 13) {
                    jeu();
                }
            }
        }
    }
    
    //GESTION DECORS
    function fonction_sol() {
        partie_visible_sol = solX + sol.width;
        ctx.drawImage(sol, solX, 280);
        //gestion défilement du sol
        solX -=2;
        if (partie_visible_sol <= canvas.width){
            ctx.drawImage(sol, 0+partie_visible_sol, 280);
        }
        if (partie_visible_sol <= 0) {solX = 0;}
    }
    
    //COMPILATION 
    function jeu() {
        //(re)initialisation des positions et des ressources
        joueurX = 5; joueurY = 200; animationActiveFrame = false; vit_bombe = 3; score = 0; vit_joueur = 4;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lancement_bombe();
        //affichage joueur
        ctx.drawImage(player, joueurX, joueurY);
        positions_joueur();
        vaisseau();
    }
    
    //Lancement du jeu
    lancement_Jeu();
    
    if (animationActiveFrame == false) {
        animation = setInterval(animateFirstScreen, 30);
    }

}