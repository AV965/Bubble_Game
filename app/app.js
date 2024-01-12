let timerVal = 60,hit = 0,hitten = 0, score = 0,start = false;


$(document).on("keypress", function(){
    if (!start) {
        start = true;
        setTimer();
        printval();
        hitval();
    }
});


$(".bottombar").on("click", function(event){
hitten = event.target.textContent;
checkAnswer(hitten);
});



function setTimer(){
    let val = setInterval(function() {
        if (timerVal >0) {
            $(".timer").html(--timerVal);
        }
        else {
            clearInterval(val);
            start = false;
            timerVal = 60;
            $(".bottombar").html(`<h2> Great! Your Score is ${score}.</h2><br><h4>Press A to Play Again</h4>`);
        }
    }, 1000);

}

//Using Jquery
function printval (){
    var htcode = "",val;
    for(let i=0; i<=160; i++) {
        val = Math.floor(Math.random() * 9);
    htcode += `<div class="target">${val}</div>`;
    }
    $(".bottombar").html(htcode);
}

     //Using JS DOM structure 
// let printval = () => {
//     var htcode = "",val;
//     for(let i=0; i<=160; i++) {
//         val = Math.floor(Math.random() * 9);
//         document.querySelector(".bottombar").innerHTML += `<div class="target">${val}</div>`;
//     }
// ;
// }

function hitval() {
    hit = Math.floor(Math.random() * 9);
    $(".hit").html(hit);
}

function incrScore() {
    score += 10;
    $(".score").html(score);
    printval();
    hitval();
}

function checkAnswer(hitten) {
    if (hitten == hit) {
        incrScore();
    }
}

