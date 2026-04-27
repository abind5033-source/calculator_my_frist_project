let display = document.querySelector(".display");
let currentInput = "0";
let condition = false;


const updateDisplay = () => {
    display.textContent = currentInput;
}


function addingInput(value) {
    if (currentInput === "0") {
        currentInput = "";
    } else {
        currentInput = currentInput + value;
        updateDisplay();
    }
}

function cleardisplay() {
    currentInput = "0";
    updateDisplay();
}














// let updateDisplay = (i) => { 
//     display.append(i); 
// };




// selectin buttons---------------------------------------------------------------- 

let buttonAc = document.querySelector("#buttonAc");
let buttondel = document.querySelector("#buttondel");
let buttonPersentage = document.querySelector("#buttonPersentage");
let buttonslash = document.querySelector("#buttonslash");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let buttonx = document.querySelector("#buttonx");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let buttonMines = document.querySelector("#buttonMines");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let buttonPlush = document.querySelector("#buttonPlush");
let button0 = document.querySelector("#button0");
let buttonpoint = document.querySelector("#buttonpoint");
let buttonequle = document.querySelector("#buttonequle");
let buttonmt = document.querySelector("#buttonmt");


// number buttons-----------------------------------------------------------------
button1.onclick = () => {
    addingInput(1);
}
button2.onclick = () => {
    addingInput(2);
}
button3.onclick = () => {
    addingInput(3);
}
button4.onclick = () => {
    addingInput(4);
}
button5.onclick = () => {
    addingInput(5);
}
button6.onclick = () => {
    addingInput(6);
}
button7.onclick = () => {
    addingInput(7);
}
button8.onclick = () => {
    addingInput(8);
}
button9.onclick = () => {
    addingInput(9);
}
button0.onclick = () => {
    addingInput(0);
}



// operator bukttons-----------------------------------------------------------------

buttonPlush.onclick = () => {
    addingInput('+');
}
buttonMines.onclick = () => {
    addingInput('-');
}
buttonx.onclick = () => {
    addingInput('*');
}
buttonslash.onclick = () => {
    addingInput('/');
}
buttonpoint.onclick = () => {
    addingInput('.');
}

buttonAc.onclick = () => {
    cleardisplay();
}
buttonPersentage.onclick = () => {
    addingInput('%');
}
