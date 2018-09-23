window.onload = function() {
    //On recupère le canvas
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext('2d');
    
    //BOMBES
    //On définit l'état de chargement des images
    var bombes_chargement;
    bombes_chargement = false;
    //On définit ce qu'est la bombe + son image
    var bombes = new Image();
    bombes.src = "bombe.png";
    bombes.onload = function() {bombes_chargement = true;}
    var animation, animationActiveFrame;
    animationActiveFrame = false;
    //les tailles et positions des bombes
    var positions_bombes = [];
    bombeX = 800;
    var dim_bombe = {w:50, h:41}
    var vit_bombe = 3;
    
    //PLAYER
    //On définit la position du joueur + sa taille
    var joueurX, joueurY;
    joueurX = 5; joueurY = 200;
    var dim_joueur = {w:128, h:64}
    //On définit l'état de chargement des images
    var player_chargement;
    player_chargement = false;
    //Variables joueur
    var player = new Image();
    player.src = "vaisseau.png";
    player.onload = function() {player_chargement = true;}
    
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
        //on redessine le joueur
        positions_joueur();
        //on redessine les bombes
        repopBombes();
        //si les bombes sortent de l'ecran
        if (bombeX <= 0) {
            ctx.clearRect(bombeX, 0, 50, canvas.height);
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
        //alors on (re)lance une série de bombes
        creation_bombes();
        //puis on les fait bouger
        if (animationActiveFrame == false) {
            animation = setInterval(animation_bombe, 16);
        }
    }
    
    function vaisseau() {
        //Ecoute des touches
        document.onkeydown = function(e){
            e.defaultPrevented;
            if (e) {        
                //On nettoie le canvas
                ctx.clearRect(0,0, canvas.width, canvas.height);
                repopBombes();
                //gestion touches gauche/droite
                if (e.keyCode === 39) {
                    joueurX += 6;
                }
                else if(e.keyCode === 37) {
                    joueurX -= 6;
                }

                //gestion touches haut/bas
                if (e.keyCode === 40) {
                    joueurY += 6;
                }
                else if (e.keyCode === 38) {
                    joueurY -= 6;
                }
                ctx.drawImage(player, joueurX, joueurY);
            }
        }
    }
    
    function positions_joueur() {
        //on redessine le joueur
        ctx.drawImage(player, joueurX, joueurY);
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
                animation_bombe.stop();
            }
        }
    }

    //Fonction lancement du jeu
    function lancement_Jeu() {
        var text = "Pour jouer, appuyez sur Entrée puis sur les flèches du clavier";
        ctx.fillStyle = "red";
        ctx.font = "29px Lobster";
        ctx.fillText(text, 20, 100);
        document.onkeydown = function(e) {
            e.defaultPrevented;
            if (e) {
                if (e.keyCode === 13) {
                    jeu();
                }
            }
        }
    }
    
    //fonction de mort + recommencer
    function mort() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        var text = "Vous êtes mort. Appuyez sur Entrée pour recommencer";
        ctx.fillStyle = "red";
        ctx.font = "23px Lobster";
        ctx.fillText(text, 100, 100);
        document.onkeydown = function(e) {
            e.defaultPrevented;
            if (e) {
                if (e.keyCode === 13) {
                    jeu();
                }
            }
        }
    }

    //Compilation des fonctions
    function jeu() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lancement_bombe();
        //affichage joueur
        if (player_chargement) {
            ctx.drawImage(player, joueurX, joueurY);
            positions_joueur();
            vaisseau();
        }
    }
    //Lancement du jeu
    lancement_Jeu();
}