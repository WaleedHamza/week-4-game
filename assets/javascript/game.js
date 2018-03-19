$(document).ready(function(){
//code below this line

// game objects each contains a character
var kenshi = {
    name: "Kenshi",
    health: 100,
    attack: 10,
    imageUrl: "assets/images/kenshi.png",
    enemyAttackBack: 15
};

var subzero = {
    name: "Sub Zero",
    health: 100,
    attack: 10,
    imageUrl: "assets/images/kenshi.png",
    enemyAttackBack: 15
};

var scorpion = {
    name: "Scorpion",
    health: 100,
    attack: 10,
    imageUrl: "assets/images/kenshi.png",
    enemyAttackBack: 15
};

var jade = {
    name: "Jade",
    health: 100,
    attack: 10,
    imageUrl: "assets/images/kenshi.png",
    enemyAttackBack: 15
};

//create object array for all the charactors//
var character = [kenshi, subzero, scorpion, jade];
var r = Math.floor(Math.random() * character.length);

//moving the fighter selected to the my fighter section function test//
var fighterSelected = false
$("#selectFighter").on("click", ".card", function (event) {
    if (fighterSelected === false) {
        fighterSelected = true;
        $("#myFighter").append($(this))
    } else if (fighterSelected === true) {
        $("#opponent").append($(this))
    }
});

//if 3 fighters were in the opponent section then stop the click function//
//reset the opponent section fighters//
var opponentSelected = false
$("#opponenet").on("click", ".card", function(event) {
    if (opponentSelected === true){
        opponentSelected =false;
    $("#selectFigher").append($(this))
    }
})

// add a function to stop inserting fighters in the opponent div when reach is 3 fighters



// add charectors attack and helth etc. values//





//display charactors values on the card corners//


//add function to reset the game// 




//keep your code above this line//
});