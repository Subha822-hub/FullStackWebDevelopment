

randomNumber1 = 6;
randomNumber2 = 6;

document.getElementById('imageBox1').src = "./images/dice" + randomNumber1 + ".png";
document.getElementById('imageBox2').src = "./images/dice" + randomNumber2 + ".png";
    
function match()
{
    console.log("click");
    randomNumber1 = Math.floor(Math.random() * 6)+1;
    randomNumber2 = Math.floor(Math.random() * 6)+1;

    document.getElementById('imageBox1').src = "./images/dice" + randomNumber1 + ".png";
    document.getElementById('imageBox2').src = "./images/dice" + randomNumber2 + ".png";
    
    if(randomNumber1>randomNumber2)
    {
        document.getElementById("texts").innerHTML = "Player 1 Wins!";
        document.getElementById("player1").innerHTML = "Player 1 🚩";
        document.getElementById("player2").innerHTML = "Player 2";

    }
    else if(randomNumber1<randomNumber2)
    {
        document.getElementById("texts").innerHTML = "Player 2 Wins!";
        document.getElementById("player1").innerHTML = "Player 1";
        document.getElementById("player2").innerHTML = "Player 2 🚩";
    
    }
    else if(randomNumber1==randomNumber2)
    {
        document.getElementById("texts").innerHTML = "Draw 🚩!";
        document.getElementById("player1").innerHTML = "Player 1";
        document.getElementById("player2").innerHTML = "Player 2";
    }
    else
    {
        document.getElementById("texts").innerHTML = "Dice Game!";
    
    }
}



