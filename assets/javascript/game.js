$(document).ready(function(){
//code below this line

// game objects each contains a character
var mileena = {
    name: "mileena",
    health: 120,
    attack: 17,
    counterAttack: 15
};

var subzero = {
    name: "Sub Zero",
    health: 110,
    attack: 9,
    counterAttack: 4
};

var scorpion = {
    name: "Scorpion",
    health: 100,
    attack: 12,
    counterAttack: 7
};

var jade = {
    name: "Jade",
    health: 90,
    attack: 20,
    counterAttack: 13
};

//create object array for all the charactors//
var defenders=[]
var character = [mileena, subzero, scorpion, jade];
var r = Math.floor(Math.random() * character.length);

//set the characters attr//
$(".crad").push($(this).attr(character))

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
$("#opponent").on("click", ".card", function (event) {
    $(defenders).push($(this).attr("id"))
    console.log(defenders)
    if (opponentSelected === true && ($("#oponnent").card <= 3)){
        $(".card").click (function(){
            //disable mouse click
        })
 
  }
});

// add a function to stop inserting fighters in the opponent div when reach is 3 fighters



// add charectors attack and helth etc. values//





//display charactors values on the card corners//


//add function to reset the game// 

    var restart = $("#reset").click(function(){
        location.reload();
    });


});
//end of reset function 

//keep your code above this line//
