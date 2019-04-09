var dogButton = new Button('DOG', 10, 10);
var catButton = new Button('CAT', 120, 10);
var cowButton = new Button('COW', 10, 50);
var pizzaButton = new Button('PIZZA', 120, 50)


function setup() {
    createCanvas(400,400)

}

function draw() {
    background(220);

    dogButton.draw()
    catButton.draw()
    cowButton.draw()
    pizzaButton.draw()
}

function mousePressed() {
    if (dogButton.containsMouse()) {
        alert("Woof")
    }
    if (catButton.containsMouse()) {
        alert("Meow")
    }
    if (cowButton.containsMouse()) {
        alert("Moo")
    }
    if (pizzaButton.containsMouse()) {
        alert("YES PLEASE")
    }
}