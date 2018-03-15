



//global variables
var isGameOver = true;
var guessnum = 10;
var incorrectGuesses = 0
var letterPressed = "";
var wins = 0;
var losses = 0;
var mysteryWord;

var alpray = [["A", 0], ["B", 0], ["C", 0],
["D", 0], ["E", 0], ["F", 0],
["G", 0], ["H", 0], ["I", 0],
["J", 0], ["K", 0], ["L", 0],
["M", 0], ["N", 0], ["O", 0],
["P", 0], ["Q", 0], ["R", 0],
["S", 9990], ["T", 0], ["U", 0],
["V", 0], ["W", 0], ["X", 0],
["Y", 0], ["Z", 0]];

var randomword = ["PRESIDENT", "LONGTIME", "PERSONAL",
    "FIRED", "INVESTIGATION", "SECRET",
    "SERVICE", "FINANCIAL", "CRIMES"];

var mysteryH = document.getElementById("mysteryWord");
//put blanks in panel
var st;
var stDisplay = []; //this is used innerhtml panel
var stHidden = []; // this represents array - one for each letter

//end of globals


//start functions
function initializeGame() {

    isGameOver = false;
    var guessnum = 10;
    var incorrectGuesses = 0

    for (let i = 0; i < alpray.length; i++) {
        alpray[i][1] = 0;
    }

    //pick random word
    var randX = Math.floor(Math.random() * randomword.length);
    mysteryWord = randomword[randX];
    console.log("mysteryWord: " + mysteryWord, randX);

    
    for (let index = 0; index < mysteryWord.length; index++) {
        st = "&nbsp;&nbsp" + "_" + "&nbsp;&nbsp";
        stDisplay.push(st);
        st = "&nbsp;&nbsp;" + mysteryWord[index] + "&nbsp; &nbsp;";
        stHidden.push(st);
    };
    console.log("st: " + stDisplay);
    console.log("st: " + stHidden);
    st = "";
    stDisplay.forEach(element => {
        st += element
    });
    
    document.getElementById("mysteryWord").innerHTML = st; //stDisplay;
    document.getElementById("guessremain").innerHTML = guessnum;

    //unhide all letters
    // to be written later

    //put pic 0 back
    document.getElementById("myImage").src = "assets/images/0.jpg";

}

function blackoutLetter(myId) {
    console.log("blackout", myId);
    document.getElementById(myId).style.color = "red";
    document.getElementById(myId).style.background = "red";
}

function checkLetter(ltr) {
    //var ind = mysteryWord.findIndex;
    console.log("checkltr", mysteryWord, ltr, );
    var found = false;
    for (let i = 0; i < mysteryWord.length; i++) {
        if (mysteryWord[i] === ltr) {
            found = true;
            stDisplay[i] = "&nbsp;&nbsp;" + mysteryWord[i] + "&nbsp;&nbsp;";
            mysteryWord[i] = " ";
            console.log(mysteryWord);
        }
    }

    updateStatus(found);
}

function updateStatus(goodletter) {
    if (!goodletter) {
        guessnum -= 1;
        incorrectGuesses += 1;
        document.getElementById("myImage").src = "assets/images/" + incorrectGuesses + ".jpg";
        st = "";
        stDisplay.forEach(element => {
            st += element
        });
        document.getElementById("mysteryWord").innerHTML = st; //stDisplay;
        document.getElementById("guessremain").innerHTML = guessnum;

    }else{
        st = "";
        stDisplay.forEach(element => {
            st += element
        });
        document.getElementById("mysteryWord").innerHTML = st; //stDisplay;
    }
}

//start processing code
document.onkeyup = function (event) {

    letterPressed = event;
    console.log("event.keyCode", event.keyCode, "letterPressed.key", letterPressed.key);

    //RESET GAME -- IF GAME IS OVER AND SPACEBAR IS PRESSED
    if (event.keyCode === 32 && isGameOver) {
        //Initialize all variables
        initializeGame();
        return;
    }

    //validate the key pressed - only accept Aplhabet -upper or lower allowed
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        console.log("after init rtne", letterPressed.key);
        letterPressed = letterPressed.key.toUpperCase();
    } else { return; }


    //get the index in the aplhabet array of letter pressed 
    // coolest line of code foundWOW
    var indx = alpray.findIndex(sa => sa[0] === letterPressed);

    console.log("indx", indx);
    //check the inde- so we catch any unexplained err.
    // black out the letter on screen box3
    if (indx > -1) {
        // console.log(alpray[indx][1]);
        if (alpray[indx][1] === 0) {
            alpray[indx][1] += 1;
            console.log("before blackout", letterPressed);
            blackoutLetter(letterPressed + 3);
            console.log("before checkletter", letterPressed);
            checkLetter(letterPressed);
            console.log("aftr checkletter", letterPressed);            
        }
    }  

}