



//global variables
var isGameOver = true;
var guessnum = 10;
var incorrectGuesses = 0
var letterPressed = "";
var wins = 0;
var losses = 0;
var mysteryWord;
var playOpeningClip = true;

// these are used by the random(mystery) word and creates the string for 
// the innerHTML to display 
var tempString;
var strDisplay = []; //this is used innerhtml panel
var strHidden = []; // this represents array - one for each letter


var alphabetArr = [["A", 0], ["B", 0], ["C", 0],
["D", 0], ["E", 0], ["F", 0],
["G", 0], ["H", 0], ["I", 0],
["J", 0], ["K", 0], ["L", 0],
["M", 0], ["N", 0], ["O", 0],
["P", 0], ["Q", 0], ["R", 0],
["S", 0], ["T", 0], ["U", 0],
["V", 0], ["W", 0], ["X", 0],
["Y", 0], ["Z", 0]];

var randomword = ["PRESIDENT", "LONGTIME", "PERSONAL",
    "FIRED", "INVESTIGATION", "SECRET", "SERVICE", "FINANCIAL",
    "ACOCK", "ACORN", "ACQUISITIVE", "ACREOCRACY", "AUDACIOUS",
    "BEHIND", "BLAME", "BLARNEY", "BLATHER", "BLATHERSKITE", "BOCKEY",
    "BOCKING", "BODEGA", "BOOSE", "BOOSILY", "BOOSY", "BUB",
    "BUCKAROO", "CABOODLE", "CABOOSE", "CADY", "CAHOOTS", "CALABOOSE",
    "COOKIE", "COOSIE", "COOT", "COURTING", "CRITTER", "CROAKER",
    "CROCK", "CROCKY", "DAISY", "DANDER", "DANG", "DANGLER",
    "DASH", "DIFFICULTED", "DIGGERS", "DIGGINGS", "DINERO",
    "DIRECTLY", "DIRK", "DISH", "DISREMEMBER", "DITCHED", "DITTY",
    "DIVE", "DOCITY", "DOCTOR", "DREADFUL", "DREAMBOOK", "DRUNK",
    "DUNDERHEAD", "DUSTED", "DYNAMITE", "EAGLE", "EARS",
    "ELEPHANT", "EQUALIZER", "EUCHER", "EVENTUATE", "FEEZE",
    "FELLER", "FETCH", "FLINDERS", "FLING", "FLITTER", "FLUMMUX",
    "FRESHET", "FROLIC", "FRONTIER", "FUDDLED", "FUDGE",
    "FUFFY", "FUNKIFY", "FUSS", "GRANGER", "GRINGO", "GRIST",
    "GRITTY", "GROCERY", "GROG", "GROGGERY", "GROWLERS", "GRUM",
    "GRUNTER", "GUMP", "GUTTERSNIPE", "HACK",
    "HAINT", "HEAP", "HEARN", "HERN", "HIDE", "HIFER", "HIGGLE", "HOUNDS",
    "HUCKLEBERRY", "HULL", "HUM", "HUMBUG", "JIMINY", "JINGLED", "JINGLER", "JUNIPER",
    "JUSTINS", "KNOB", "KNOBS", "LATHY", "LATISH", "LOCO", "LOGY", "LOLLER",
    "LUCKY", "LUNGER", "LUNKHEAD", "MARINOS", "MARM", "MAROONING", "MARY", "MASHED",
    "MAUKS", "MAULED", "MAVERICK", "MEALER", "MEAN",
    "MOCHILLA", "MOCKERED", "MOLLED", "MOLLY", "MOLOCHER", "MOONSHINE", "MOONSHINY", "MOP",
    "MOPPY", "NIBBLE", "NIBBLER", "NOTIONS", "NUBBIN", "NURLY", "OOF", "OPINE",
    "OURN", "OUTLAW", "OWDACIOUS", "PADDLE", "PAINT", "PEACEMAKER", "PEAKED", "PECK",
    "PECKER", "PECKISH", "PICTURE", "PIDDLE", "PIEBALD", "PIKE", "PILGRIM", "PILL",
    "PINK", "PINTO", "PIROOTING", "PISTAREEN", "PLUMB", "PLUMMY", "PLUNDER", "POKE",
    "POKER", "POKERISH", "POKEY", "QUID", "QUINCY", "QUIRLEY", "QUIRT", "RANDY",
    "RANNY", "RANTANKEROUS", "RAPPEE", "RATTLED", "RATTLER", "RATTLING", "RENCH", "RETCH",
    "RETIRACY", "REVERENT", "RIB", "SAND", "SANTIAGO", "SAPHEAD", "SAPPY", "SATINET",
    "SAWBONES", "SAWDUST", "SAWDUSTY", "SAY", "SCHRUNCHER", "SCRAPER", "SCRAPS", "SCRATCH",
    "SCROUGER", "SCRUB", "SCUDS", "SCUSS", "SHANK", "SHANTY", "SHARPS", "SIDLE",
    "SIGNALIZE", "SINKER", "SIPPER", "SKETCHILY",
    "SKID", "SKILLY", "SKILTS", "SKIN", "SKINK", "SKINNED", "SKIP", "SKITTLES",
    "SKULDUGGERY", "SKULL", "SKUNGLE", "SKUNK", "BACKWOODSMAN", "BODY",
    "BOOR", "BUMPKIN", "BUSHWHACKER", "CLODHOPPER", "CRACKER", "CREATURE",
    "DENIZEN", "DWELLER", "HAYSEED", "HICK", "PEASANT", "PERSON", "PERSONAGE", "PERSONALITY",
    "PROVINCIAL", "RECKON", "REDNECK", "RUBE", "RUSTIC", "SOUL", "TATER", "TILLER",
    "UPPITY", "VARMINT", "VILLAGER", "YANKEE", "YAPPER", "YOKEL", "YOUNGUNS",
    "SKY", "SLAB", "SLANG", "SLANGANDER", "SLANTINDICULAR", "SLAP",
    "SLAT", "SLATE", "SLATHERS", "SLATTED", "SLAZY", "SLEW", "SLEWED", "SLEWER",
    "SLICK", "SLICKER", "SLICKING", "SLIMSEY", "SLING", "SLING", "SLINK", "SLINKY",
    "SLIPE", "SLOG", "SLOGGING", "SLOMMACK", "SLOPE", "SLOPS", "SLOWER", "SLUE",
    "SLUG", "SLUMGUZZLING", "SLUMMY", "SLUMP", "SLUMPY", "SLUSH", "SMALL", "SMALL",
    "SMART", "SMOCK", "SMOKE", "SMOOTH", "SMOUTCH", "SNAKE", "SNAKE", "SNAPPED",
    "SNAPPER", "SNAPPERHEAD", "SNATCH", "SNIPPENY", "SNIPPER", "SNIPSNAP", "SNOOZER", "SNORTER",
    "SNOTTED", "SNUFFY", "SOAK", "SOAKED", "SOAP", "SOCKDOLOGER", "SODBUSTER", "SOFT",
    "SOFTY", "SOG", "SOILED", "SOLD", "SOLD", "SOLE", "SOMEONE", "SONK",
    "SONOFABITCH", "SOSSLE", "SOUND", "SOUP", "SOUR", "SOURDOUGH", "SOWBELLY", "SPAN",
    "SPARK", "SPARKING", "SPARKLE", "SPARROW", "SPEELER", "SPELL", "SPIDER", "SPIKE",
    "SPILL", "SPINDIGO", "SPLASHING", "SPLENDIFEROUS", "SPLIT", "SPOON", "SPOONEY", "SPOONS",
    "SPOOPS", "SPORTSMAN", "SPOSH", "SPREAD", "SPUDGEL", "SQUABASH", "SQUADDLE", "SQUALLY", "SQUATTER", "SQUAW",
    "SQUAW", "SQUEEZE", "SQUIBOB", "SQUIFFED", "SQUINNY", "SQUIRTISH",
    "STADDLE", "STALL", "STANCHEOUS", "STAND", "STARS", "STAVE", "STEAMER", "STEEL",
    "STEM", "STEMPS", "STEPPING", "STEVEDORE", "STEW", "STEW", "STICK", "STICKER",
    "STICKLING", "STICKS", "STINGO", "STIVER", "STOB", "STOGIES", "STOMP", "STOVE",
    "STOVED", "STRAPPER", "STRAPPING", "STREAKED", "STRETCHER", "STRETCHIN", "STRING", "STRINGING",
    "STRONG", "STRUMPET", "STUFF", "STUFFY", "STUMP", "STUMPAGE", "STUMPER", "SUCK",
    "SUCKER", "SUCKING", "SUGAR", "SUITCASE", "SULKY", "SUNDAY", "SURE", "SURFACE",
    "SWACK", "SWACKING", "SWAD", "SWAG", "SWAMP", "SWAN", "SWANGA", "SWATE",
    "SWEEP", "SWEET", "SWITCH", "SYCHER", "CRIMES"];



//end of globals


//start functions
function initializeGame() {

    initVariables();

    //pick random word
    var randX = Math.floor(Math.random() * randomword.length);
    mysteryWord = randomword[randX];

    // build the 2 string arrays from mysteryWord. one with ' _, _, _, ' and hidden  with  'A, B, C,'
    for (let index = 0; index < mysteryWord.length; index++) {
        tempString = "&nbsp;&nbsp" + "_" + "&nbsp;&nbsp";
        strDisplay.push(tempString);
        tempString = "&nbsp;&nbsp;" + mysteryWord[index] + "&nbsp; &nbsp;";
        strHidden.push(tempString);
    };


    document.getElementById("mysteryWord").innerHTML = displayStringHtml();
    document.getElementById("guessremain").innerHTML = guessnum;

    //unhide all letters
    // to be written later

    //resets the original picture 
    document.getElementById("myImage").src = "assets/images/0.jpg";

}

function initVariables() {
    isGameOver = false;
    guessnum = 10;
    incorrectGuesses = 0;
    //empty the 2 arrays -strDisplay is what HTML shows, strHidden is what 
    //keeps changing the strDisplay when good letter is selected
    strDisplay.length = 0;
    strHidden.length = 0;

    // resets (1) the letter selected count to zero
    //  and (2) puts original colors back to letter circles on the page  
    for (let i = 0; i < alphabetArr.length; i++) {
        alphabetArr[i][1] = 0;
        var j = alphabetArr[i][0] + 3;
        document.getElementById(j).style.color = "#666";
        document.getElementById(j).style.background = "#fff";
    }
}


function blackoutLetter(myId) {
    document.getElementById(myId).style.color = "black"; //"red";
    document.getElementById(myId).style.background = "black"; //"red";
}

function checkLetter(ltr) {
    var found = false;
    for (let i = 0; i < mysteryWord.length; i++) {
        if (mysteryWord[i] === ltr) {
            found = true;
            strDisplay[i] = strHidden[i]; // copy the string hid value into str displ
            strHidden[i] = "";  //move empty string to the hidden field,
        }
    }

    updateStatus(found);
}

function updateStatus(boolFound) {
    if (!boolFound) {
        guessnum -= 1;
        incorrectGuesses += 1;
        document.getElementById("myImage").src = "assets/images/" + incorrectGuesses + ".jpg";
        document.getElementById("guessremain").innerHTML = guessnum;
    }

    document.getElementById("mysteryWord").innerHTML = displayStringHtml();  //tempString; //stDisplay;

    checkForGameOver();

}

function displayStringHtml() {
    //builds the string representatin of the hiddn word .. i.e.   ' _  _  A  _  B '
    tempString = "";
    strDisplay.forEach(element => {
        tempString += element
    });
    return tempString;
}

function checkForGameOver() {
    //check to see if game is lost
    if (incorrectGuesses > 9) {
        isGameOver = true;
        losses += 1;
        playClip("assets/sounds/good_bad_ugly.wav");
        // display the word
        for (let i = 0; i < strHidden.length; i++) {
            if (strHidden[i] > "") {
                strDisplay[i] = strHidden[i];
            }
        }
        document.getElementById("mysteryWord").innerHTML = displayStringHtml();
    }

    //check to see if game is won
    var winner = true;
    strHidden.forEach(element => {
        if (element !== "") {
            console.log(" no winner yet")
            winner = false;
        }
    });
    if (winner) {
        wins += 1;
        isGameOver = true;
    }

    //update the html 
    document.getElementById("gameWins").innerHTML = wins;
    document.getElementById("gameLosses").innerHTML = losses;

}

function playClip(soundByte) {
    var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", soundByte);
    audioElement.play();

}

//start processing code
document.onkeyup = function (event) {

    letterPressed = event;

    //RESET GAME -- ONLY WHEN GAME IS OVER AND SPACEBAR IS PRESSED
    //if (event.keyCode === 32 && isGameOver) {
    if ( isGameOver) {
        //Initialize all variables
        initializeGame();
        if (playOpeningClip) {
            //play dirtyharry feel lucky punk
            playClip("assets/sounds/punk.wav");
            playOpeningClip = false;
        }
        return;
    }


    //if game is over - do not do anything else.
    if (isGameOver) {
        return;
    }

    //validate the key pressed - only accept Aplhabet -upper or lower allowed
    if ((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122)) {
        //console.log("after init rtne", letterPressed.key);
        letterPressed = letterPressed.key.toUpperCase();
    } else { return; }


    //get the index in the aplhabet array of letter pressed from 2 level array
    // cool line of code 
    var indx = alphabetArr.findIndex(sa => sa[0] === letterPressed);

    //console.log("indx", indx);
    //check the inde- so we catch any unexplained err.
    // black out the letter on screen box3
    if (indx > -1) {
        if (alphabetArr[indx][1] === 0) {   //if the key pressed i.e 'T' - press count equal 0 , then we do more 
            alphabetArr[indx][1] += 1;
            blackoutLetter(letterPressed + 3); //sends "T3" which is the id  for html  T circle --to blackout T
            checkLetter(letterPressed);
        }
    }


    // // Gets Link for Theme Song
}