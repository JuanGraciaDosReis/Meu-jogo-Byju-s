class Game {
    constructor() {  

    }

    play() {

        this.handleElements();
        Player.getPlayersInfo();

        if (allPlayers !== undefined) {
            background(backgroundImg);

            drawSprites();
        }
    }

    update(state) {

        database.ref("/").update({
          gameState: state
        });
      }

    getState() {

        var gameStateRef = database.ref("gameState");
        gameStateRef.on("value", function(data) {
          gameState = data.val();
        });
    }

    start() {

        player = new Player();
        playerCount = player.getCount();
    
        form = new Form();
        form.display();

        navePrinc = createSprite(width -200, height /2);
        navePrinc.addImage("miniNaveImg", navePrincImg);
        navePrinc
        navePrinc.scale = 0.2;
    
        navePrinc2 = createSprite(width -1200, height /2);
        navePrinc2.addImage("miniNaveImg", navePrinc2Img);
        navePrinc2
        navePrinc2.scale = 0.2;
        
        shield = createSprite(width - 350, height /2, 50, 630);
        shield.shapeColor ="#00BFFF";
    
        shield2 = createSprite(width - 1050, height /2, 50, 630);
        shield2.shapeColor ="#FF6347";

        nave = [navePrinc, navePrinc2];
        shield = [shield, shield2];
    }

    handleElements() {
        form.hide();
        //form.titleImg.position(40, 50);
        //form.titleImg.class("gameTitleAfterEffect");
    }

}