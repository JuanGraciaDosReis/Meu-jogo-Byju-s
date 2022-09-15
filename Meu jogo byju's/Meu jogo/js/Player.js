class Player {
    constructor() {
    this.name = null;
    this.index = null;
    this.positionY = 0;
    this.life = 3;

    }

    addPlayer() {

        var playerIndex = "players/player" + this.index;

        if (this.index === 1) {
          this.positionY = height / 2 - 100;
        } else {
          this.positionY = height / 2 + 100;
        }
    
        database.ref(playerIndex).set({
          name: this.name,
          positionY: this.positionY,
        });
    }

    getCount() {

        var playerCountRef = database.ref("playerCount");
        playerCountRef.on("value", data => {
          playerCount = data.val();
        });
    }

    update() {

        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          positionY: this.positionY,
        });
      }

    updateCount(count) {

        database.ref("/").update({
          playerCount: count
        });
      }

    static getPlayersInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {
          allPlayers = data.val();
        });
    }

}