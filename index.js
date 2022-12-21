//#region constants and variables

var randomNumber = 0;
var solutionIsCorrect;

//#endregion

window.onload = function() {
    randomNumber =  Math.floor(Math.random() * 1000);
    document.getElementById('exercise').innerHTML = "Wo liegt die Zahl " + randomNumber + " ?   "+"<button class=\"btn\" style=\"background-color:#00868b\" onClick=\"playSound()\"><i class=\"bi bi-mic-fill\"></i></button>";
}



function refreshBtnClicked() {
    window.location.reload();
}


function playSound() {
    var msg = new SpeechSynthesisUtterance();
    msg.text = randomNumber;
    msg.volume = 0.5;
    msg.lang = 'de-at';
    window.speechSynthesis.speak(msg);
}



var elm = document.getElementById('slidecontainer');
for (var i = 0; i<=100; i++){
    var line = document.createElement("div");
    line.className = "line";
    elm.appendChild(line);
}


function print(){
    let slider = document.getElementById("myRange");
    console.log(slider.value);
}

