var miniNaveImg, navePrincImg, navePrinc2Img, backgroundImg;
var miniNave, navePrinc, navePrinc2, background;
var shidld, shield2;
var player, playerCount, allPlayers;
var game, form;
var gameState;
var playerCount;
var database;
var nave = [], shield = [];

function preload() {

    navePrincImg = loadImage("imagens/nave_principal.png");
    navePrinc2Img = loadImage("imagens/nave_principal2.png");
    miniNaveImg = loadImage("imagens/mini_nave.png");
    backgroundImg = loadImage("imagens/fundo_espaco.jpg");
    
}

function setup() {

    createCanvas(windowWidth, windowHeight);
    database = firebase.database();

    game = new Game();
    game.getState();
}

function draw() {

    //naveMovimentation();

    if (playerCount == 2) {
       game.update(1);

    }

    if (gameState == 1) {
       game.play();

    }
}

/*function naveMovimentation() {

    if (keyIsDown(UP_ARROW)) {
      navePrinc.position.y -= 5;
      
    }

    if (keyIsDown(DOWN_ARROW)) {
        navePrinc.position.y += 5;
        
      }

}*/