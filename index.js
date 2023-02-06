//#region constants and variables

var randomNumber = 0;
var solutionIsCorrect;

var solutionNumbers = [];

var isClicked = false;

let countTimelines = 0

//#endregion

window.onload = function() {

    var numbers = "";
    var randState = Math.floor(Math.random() * 10);

    switch(randState){
        case 1: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 1;
            if(solutionNumbers.includes(temp)){
                i--
            }
            else if(i == 2) {
                numbers += randomNumber + "1    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "1  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 2: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 2;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "2    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "2  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 3:
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 3;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "3    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "3  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 4: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 4;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "4    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "4  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 5: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 5;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "5    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "5  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 6: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 6;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "6    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "6  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 7: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 7;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "7    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "7  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 8: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 8;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "8    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "8  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;

        case 9: 
        for (let i = 0; i<3; i++){
            randomNumber =  Math.floor(Math.random() * 100);
            let temp = randomNumber * 10 + 9;
            if(solutionNumbers.includes(temp)){
                i--
            } 
            else if(i == 2) {
                numbers += randomNumber + "9    ";
                solutionNumbers.push(temp);
            }
            else {
                numbers += randomNumber + "9  -  ";
                solutionNumbers.push(temp);
            } 
        }
        break;
        
    }

    console.log(solutionNumbers)
    
    document.getElementById('exercise').innerHTML = "Wo liegen die Zahlen " + numbers + " ?   "+"<button class=\"btn\" style=\"background-color:#00868b\" onClick=\"playSound()\"><i class=\"bi bi-mic-fill\"></i></button>";
}



function refreshBtnClicked() {
    window.location.reload();
}


function playSound() {
    var msg = new SpeechSynthesisUtterance();
    var zahl1 = solutionNumbers[0];
    var zahl2 = solutionNumbers[1];
    var zahl3 = solutionNumbers[2];

    msg.text = "wo liegt die erste zahl " + zahl1 + ",die zweite zahl " + zahl2 + ",und die letzte zahl "  + zahl3;
    msg.volume = 0.5;
    msg.lang = 'de-at';
    window.speechSynthesis.speak(msg);
    
}



function createThousandTimeLine(){
    const div = document.getElementById("thousand")
    for(let i = 0; i < 10; i++){
        const segment = document.createElement("div")
        segment.classList.add("timelineSegment")
        if(i === 0){
            segment.setAttribute("onclick",`createHundredTimeline(100, 0);`);
        } else {
            segment.setAttribute("onclick",`createHundredTimeline(${i*100 + 100}, ${i*100});`);
        }
        for(let x = 0; x <= 10; x++){
            const line = document.createElement("div")
            const number = document.createElement("div")

            if(x !== 10){
                if(x === 0){
                    line.classList.add("bigLine")
                    number.innerHTML = 10*(i*10+x)
                    line.appendChild(number)
                } else {
                    line.classList.add("smallLine")
                }
            }

            if(i === 9 && x === 10){
                line.classList.add("bigLine")
                number.innerHTML = 10*(i*10+x)
                line.appendChild(number)
            }
            segment.appendChild(line)
        }

        div.appendChild(segment)
    }
}

function createHundredTimeline(max, min){
    if(countTimelines > 2) {
        return
    }
    const divHundred = document.getElementById("hundred")
    countTimelines++
    const timelineHundred = document.createElement("div")
    timelineHundred.id = "timeLineHundred"
    timelineHundred.classList.add("timelineFull")
    let counter = 0
    for(let i = min; i <= max; i+= 1){
        const smallLine = document.createElement("div")
        const number = document.createElement("div")
        if(counter === 10 || i === min){
            smallLine.classList.add("bigLine")
            counter = 1
            number.innerHTML = i
            smallLine.appendChild(number)
        } else {
            smallLine.classList.add("smallLineHundred")
            smallLine.id = i
            smallLine.setAttribute("onclick",`createBox(${i});`)
            counter += 1
        }
        timelineHundred.appendChild(smallLine)
    }
    divHundred.appendChild(timelineHundred)
    divHundred.innerHTML += "<button id=\"deleteBtn\" class=\"btn btn-primary btn-lg left-icon-holder\" onclick=\"deleteTimeline()\"><i id=\"trash\" class=\"bi bi-trash\"></i></button>"
}

function deleteTimeline(){
    document.getElementById("timeLineHundred").remove()
    document.getElementById("deleteBtn").remove()
    console.log("Neyse az bucuk oldu :D")
    countTimelines--
}

function createBox(x){
    const div = document.getElementById(x)
    div.id = x;
    const textField = document.createElement("input")
    textField.type = "text"
    textField.classList.add("smallLineHundredBox")
    
    if(isClicked == false){
        div.removeAttribute("onclick")
        div.appendChild(textField)
        div.style.height = "40px"
        isClicked = true
    }else if(isClicked == true){
        textField.removeAttribute("input")
        isClicked = false
    }
}

function submitBtnClicked() {
    let inputs = document.getElementsByTagName("input")
    let output = ""
    let wrongNumber = []
    let wrongPlace = []
    if(inputs.length !== 3){
        alert("Not enough Inputs")
        return
    }

    for (let i = 0; i < 3; i++){
        if(!solutionNumbers.includes(parseInt(inputs[i].value))){
            wrongNumber.push(i)
        }

        if(inputs[i].value !== inputs[i].parentElement.id){
            wrongPlace.push(i)
        }
    }

    if(wrongPlace.length === 0 && wrongNumber.length === 0){
        output = "Alles richtig :)"
    } else {
        output = ""
        for (let x = 0; x < inputs.length; x++) {
            output += "Die Nummer " + inputs[x].value + " ist"
            if (!wrongNumber.includes(x) && wrongPlace.includes(x)) {
                output += " an der falschen Stelle!"
            } else if (wrongNumber.includes(x)) {
                output += " nicht gefragt!"
            } else {
                output += " richtig"
            }
            output += "\n"
        }
    }
    alert(output)
}


createThousandTimeLine();

/*
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
*/
