class Game {
    constructor(){

    }


    getState(){

        dbref = db.ref("gameState");
        dbref.on("value", function (data){GameState = data.val();} );
    }

    update(state){
        db.ref("/").update({"gameState" : state});
    }

    start(){
        if(GameState === 0){
            player = new Player();
            player.getCount();
            form = new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        text("Game Start", 120, 120);

        Player.getPlayerInfo();

        if(allPlayers != undefined){
            var positionY = 150;
            for(var p in allPlayers){
                if(p==="player"+player.index){
                    fill("red");
                }
                else{
                    fill("black");
                }
                text(allPlayers[p].Name+" "+allPlayers[p].Distance, 130, positionY);
                positionY = positionY + 30;
            }
        }
        if(keyDown(UP_ARROW) && player.index != null){
            player.distance=player.distance+50;
            player.updateName()
        }
    }
}