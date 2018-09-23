window.onload = function() {
    //On recupère les canvas
    var canvasBackground = document.getElementById("canvasBackground");
    var ctxBackground = canvasBackground.getContext('2d');
    var canvasMain = document.getElementById("canvasMain");
    var ctxMain = canvasMain.getContext('2d');
    var canvasDim = {w:720, h:480}; //width, height
    //BACKGROUND, ALL DECORATIONS
    var sol = new Image();
    sol.src = "media/sol.png";
    var life = new Image();
    life.src = "media/life.png";
    var solX;var partie_visible_sol;var animationSol;
    var ciel = new Image();
    ciel.src = "media/background.png";
    //PLAYER VAR
    var player = new Image();
    player.src = "media/player.png";
    var playerDim = {w:55, h:90};//relles  {w:63, h:100};
    var xPlayer ,yPlayer, animPlayer;
    var jumpDown ,jumpDone, jumpDoing, vitesseSautPlayer;
    //GHOST VAR
    var ghost = new Image();
    ghost.src = "media/ghost.png";
    var animFantome; var animationFantome; //soit 0 soit 63 animFantome
    //OBSTACLE VAR
    var obstacleTombe = new Image();
    obstacleTombe.src = "media/tombe.png";
    var obstaclesDim = {w:35, h:60}; //relles {w:40, h:70}
    var obstacleAlea;var xObstacle; var nbrObstacle;
    //OTHER VARIABLES
    var score ,life_score; var bestScore = 0; //life_score va jusqu'a 5
    var isCollision;var vitesse;var frameReculer;
    
    function dessinFantome(){
        animationFantome = setInterval(function(){
        if (animFantome == 0){animFantome = 63;}else{animFantome = 0;}
        ctxBackground.clearRect(0,0,canvasDim.w, canvasDim.h);
        ctxBackground.drawImage(ghost,animFantome, 0, 63, 100, 20, 310, 63, 100);
        redessinBackground();
        }, 300);
    }
    function dessinPlayer() {
        animationFantome = setInterval(function(){
            if (animPlayer == 0){animPlayer = 68;}else{animPlayer = 0;}
                ctxMain.clearRect(0,0,canvasDim.w, canvasDim.h);
                ctxMain.drawImage(player, animPlayer,0,63, 100,xPlayer, yPlayer, 63,100);}
        , 150);    
    }
    function defilementSol(){
        ctxBackground.clearRect(0,0,canvasDim.w, canvasDim.h);
        partie_visible_sol = solX + sol.width;
        ctxBackground.drawImage(sol, solX, 400);
        //gestion défilement du sol
        solX -=vitesse;
        xObstacle -=vitesse;
        if (partie_visible_sol <= canvasDim.w){
            ctxBackground.drawImage(sol, 0+partie_visible_sol, 400);
        }
        if (partie_visible_sol <= 0) {solX = 0;}
        //OBSTACLE
        if ((xObstacle <= 340)&&(isCollision == false)){collision();}
        if (xObstacle <= -60){
            nbrObstacle = 0;
            genObstacle();}
        redessinBackground();
    }
    function gestionScore(){
        var text = "Score :" + score;
        ctxBackground.fillStyle = "red";
        ctxBackground.font = "32px Griffy, cursive";
        ctxBackground.fillText(text, 20, 40);
    }
    function gestionVie(life_score){
        ctxBackground.drawImage(life,life_score*160, 0, 160, 60, 5, 40, 160, 60);
    }
    function gestionPlayer(){
        //on détecte la touche 'Espace'
        document.onkeydown = function(e) {
            e.defaultPrevented;
            if (e) {
                if (e.keyCode === 32) {
                    if (!jumpDoing) {
                        jumpDoing = true;
                        animate = setInterval(function(){
                            if (jumpDown == true){
                                yPlayer +=2;
                                if (yPlayer == 310){
                                jumpDown = false;clearInterval(animate);jumpDoing = false;}
                            }
                            if (jumpDown == false){
                                yPlayer -=2;
                                if (yPlayer == 100){
                                    jumpDown = true;}
                            }
                            ctxMain.clearRect(0,0,canvasDim.w, canvasDim.h);
                            redessinMain();}, vitesseSautPlayer);}}}}
    }
    function mort(){
		clearInterval(animationSol);clearInterval(animationFantome);
        if (jumpDoing){clearInterval(animate);}
        if (frameReculer){clearInterval(animationRecul);}
        if (score > bestScore){
            bestScore = score;
        }
        ctxMain.fillStyle = "red";
        ctxMain.font = "36px Griffy, cursive";
        ctxMain.fillText("You are DEAD. Press Enter to restart.", 70, 130);
        ctxMain.fillText("Votre score: " + score,100, 200);
        ctxMain.fillText("Votre meilleur score: " + bestScore,100, 300);
        //on détecte la touche 'Entrée'
        document.onkeydown = function(e) {
            e.defaultPrevented;
            if (e) {
                if (e.keyCode === 13) {
                    launch();}}}
    }
    function animObstacle(nbrObstacleAlea){
        ctxBackground.clearRect(0,0,canvasDim.w, canvasDim.h);
        if (nbrObstacleAlea ==1){ctxBackground.drawImage(obstacleTombe, xObstacle,340);}
        if (nbrObstacleAlea ==2){ctxBackground.drawImage(obstacleTombe, xObstacle,340);ctxBackground.drawImage(obstacleTombe, xObstacle+40,340);}
        redessinBackground();
    }
    function genObstacle(){
        if (vitesse == 13){vitesse = 13;}else{vitesse +=1;}
        if (vitesse == 6){vitesseSautPlayer = 2;}
        if (vitesse == 10){vitesseSautPlayer = 1;}
        score +=1; gestionScore();isCollision = false;
        nbrObstacleAlea = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
        xObstacle = 760;animObstacle(nbrObstacleAlea);nbrObstacle=nbrObstacleAlea;
    }
    function recul(){
        frameReculer = true;
        var nbrareculer = 46;
        life_score +=1;
        gestionVie(life_score);
        setTimeout(function() {
        animationRecul = setInterval(function(){
            xPlayer -= 2;
            nbrareculer -=2;
            ctxMain.clearRect(0,0,canvasDim.w,canvasDim.h);
            redessinMain();
            if (nbrareculer == 0){
            clearInterval(animationRecul);}
        }, 30);}, 600);
        frameReculer = false;
    }
    function collision() {
        //On regarde si il y a collision 1 obstacle
        if (xPlayer < xObstacle + obstaclesDim.w &&
        xPlayer +  playerDim.w > xObstacle &&
        yPlayer < 310 + obstaclesDim.h &&
        playerDim.h + yPlayer > 310) {
            if (life_score > 4){mort();}
            else if ((!isCollision)&&(!frameReculer)){
            isCollision = true;
            recul();}
        }
        if (nbrObstacleAlea == 2) {
            //On regarde si il y a collision 2 obstacle
            if (xPlayer < xObstacle+50 + obstaclesDim.w &&
            xPlayer +  playerDim.w > xObstacle+50 &&
            yPlayer < 310 + obstaclesDim.h &&
            playerDim.h + yPlayer > 310) {
                if (life_score >4 ){mort();}
                if ((!isCollision)&&(!frameReculer)){
                    isCollision = true;
                    recul();}     
            }
        }
    }
    function redessinBackground(){
        ctxBackground.drawImage(ciel, 0, 0);
        ctxBackground.drawImage(sol, solX, 400);
        if (partie_visible_sol <= canvasDim.w){ctxBackground.drawImage(sol, 0+(partie_visible_sol-vitesse), 400);}
        gestionScore();
        gestionVie(life_score);
        if (nbrObstacleAlea ==1){ctxBackground.drawImage(obstacleTombe, xObstacle,340);}
        if (nbrObstacleAlea ==2){ctxBackground.drawImage(obstacleTombe, xObstacle,340);ctxBackground.drawImage(obstacleTombe, xObstacle+30,340);}
        ctxBackground.drawImage(ghost,animFantome, 0, 63, 100, 20, 310, 63, 100);
    }
    function redessinMain(){
        ctxMain.drawImage(player, animPlayer,0,63, 100,xPlayer, yPlayer, 63,100);
    }
    function launch() {
        //Reinitialisation variables
        xPlayer = 320; yPlayer = 310; score = -1; life_score = 0;jumpDown = false; jumpDone = false; jumpDoing = false;animFantome = 0;solX = 0;xObstacle = 760;vitesse = 3;frameReculer = false;isCollision = false;vitesseSautPlayer = 3;animPlayer = 0;
        //LANCEMENT
        //Nettoyage Canvas
        ctxMain.clearRect(0,0,canvasDim.w, canvasDim.h);
        ctxBackground.clearRect(0,0,canvasDim.w, canvasDim.h);
        //defilementSol();
        ctxMain.drawImage(player, animPlayer,0,63, 100,xPlayer, yPlayer, 63,100);
        gestionScore();
        gestionVie(0);//Entre 0 et 5
        gestionPlayer();
        ctxBackground.drawImage(ghost,0, 0, 63, 100, 20, 310, 63, 100);
        dessinFantome();
        dessinPlayer();
        animationSol = setInterval(defilementSol, 30);
        genObstacle();
    } 
    function presentation(){
        score = 0;xPlayer = 320; yPlayer = 310;solX = 0;
        ctxMain.clearRect(0,0,canvasDim.w, canvasDim.h);
        ctxBackground.drawImage(ciel, 0, 0);
        ctxMain.drawImage(sol,solX, 400);
        ctxMain.drawImage(player, 0,0,63, 100,xPlayer, yPlayer, 63,100);
        ctxMain.drawImage(life,0, 0, 160, 60, 5, 40, 160, 60);
        ctxMain.drawImage(ghost,0, 0, 63, 100, 20, 315, 63, 100);
        ctxMain.drawImage(obstacleTombe, 470, 340);
        gestionScore();
        ctxMain.fillStyle = "red";ctxMain.font = "36px Griffy, cursive";ctxMain.fillText("← Your score", 150, 40);ctxMain.fillText("← Your lifebar", 180, 80);ctxMain.fillText("↓",30, 320);ctxMain.fillText("The ghost who wants to kill you !", 20, 290);ctxMain.fillText("You →", 240, 370);ctxMain.fillText("↓ Jump over it !", 480, 330);ctxMain.font = "60px Griffy, cursive";ctxMain.fillText("Press Enter", 200, 200)
        //on détecte la touche 'Entrée'
        document.onkeydown = function(e) {
            e.defaultPrevented;
            if (e) {
                if (e.keyCode === 13){launch();}}}
    }
    function start(){
            var compteur = 0;
            var text = "To play, hit the Enter key";
            ctxMain.fillStyle = "red";
            ctxMain.font = "40px Griffy, cursive"; //Griffy, cursive
            ctxMain.fillText(text, 140, 100);
            //on détecte la touche 'Entrée'
            document.onkeydown = function(e) {
                e.defaultPrevented;
                if (e) {
                    if ((e.keyCode === 13)&&(compteur == 2)) {
                        presentation();}
                    if ((e.keyCode === 13)&&(compteur == 1)) {
                        ctxMain.font = "50px Griffy, cursive"; //Griffy, cursive
                        var text = "Good Luck !";
                        ctxMain.fillText(text, 220, 250);compteur++; }
                    if ((e.keyCode === 13)&&(compteur == 0)) {
                        var text = "Oh, just an advice...Use space key to jump...";
                        ctxMain.font = "26px Griffy, cursive"; //Griffy, cursive
                        ctxMain.fillText(text, 130, 180); compteur ++; }}}
    }
    start();
}