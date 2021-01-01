class Form {
    constructor(){

        this.input = createInput("Name");
        this.button = createButton("Submit");
        this.greeting = createElement("h3");

    }

    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();

    }


    display(){
        var title = createElement("h2");
        title.html("CarRacingGame");
        title.position(140, 10);

        
        this.input.position(140, 160);

        this.button.position(150, 180);

        

        this.button.mousePressed(()=>{ 
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            PlayerCount = PlayerCount + 1;
            player.index = PlayerCount;
            player.updateCount(PlayerCount);
            player.updateName();
            this.greeting.html("Hello, "+player.name);
            this.greeting.position(140, 60);
         })
    }

}