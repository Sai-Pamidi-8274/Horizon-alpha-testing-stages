class Form {

    constructor() {
    }
    //html elements
    display() {
        var stateTitle = createElement("h2");
        stateTitle.html("Horizon Alpha 2.0");
        stateTitle.position(200, 5);
        var input = createInput("NAME");
        var button = createButton("Race");
        var heyo = createElement("h3");
        input.position(250, 250);
        button.position(250, 300);
        button.mousePressed(function () {

            input.hide();
            button.hide();
            var name = input.value();
            playerCount = playerCount + 1;
            player.update(name);
            player.updateCount(playerCount);
            heyo.html("Hello Racer" + name);
            heyo.position(250, 250);












        })


    }



}