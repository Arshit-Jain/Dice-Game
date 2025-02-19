// alert("Welcome");
var player1 = Math.floor((Math.random()*6)+1)
var player2 = Math.floor((Math.random()*6)+1)

var p1 = document.querySelector(".img1");
var p2 = document.querySelector(".img2");

switch(player1) {
    case 1:
        p1.setAttribute("src","./images/dice1.png");
        p1.setAttribute("alt","dice 1");
        break;
    
    case 2:
        p1.setAttribute("src","./images/dice2.png");
        p1.setAttribute("alt","dice 2");
        break;

    case 3:
        p1.setAttribute("src","./images/dice3.png");
        p1.setAttribute("alt","dice 3");
        break;
    
    case 4:
        p1.setAttribute("src","./images/dice4.png");
        p1.setAttribute("alt","dice 4");
        break;

    case 5:
        p1.setAttribute("src","./images/dice5.png");
        p1.setAttribute("alt","dice 5");
        break;
    
    case 6:
        p1.setAttribute("src","./images/dice6.png");
        p1.setAttribute("alt","dice 6");
        break;
}

switch(player2) {
    case 1:
        p2.setAttribute("src","./images/dice1.png");
        p2.setAttribute("alt","dice 1");
        break;
    
    case 2:
        p2.setAttribute("src","./images/dice2.png");
        p2.setAttribute("alt","dice 2");
        break;

    case 3:
        p2.setAttribute("src","./images/dice3.png");
        p2.setAttribute("alt","dice 3");
        break;
    
    case 4:
        p2.setAttribute("src","./images/dice4.png");
        p2.setAttribute("alt","dice 4");
        break;

    case 5:
        p2.setAttribute("src","./images/dice5.png");
        p2.setAttribute("alt","dice 5");
        break;
    
    case 6:
        p2.setAttribute("src","./images/dice6.png");
        p2.setAttribute("alt","dice 6");
        break;
}

var s = document.querySelector("h1");
if(player1 > player2) {
    s.innerText = "🚩 Player 1 wins";
}
else{

    if(player2 > player1) {
    s.innerText = "Player 2 wins 🚩";
    }
    else {
        s.innerText = "🚩 Draw 🚩";
    }
}