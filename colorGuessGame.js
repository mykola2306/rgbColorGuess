var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    setUpModeButtons();
    setUpSquares();
    
    reset();
}
function setUpModeButtons(){
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            // if (this.textContent === "Easy") {
            //     numSquares = 3;
            // } else {
            //     numSquares = 6;
            // }
            reset();
        })
    }
}
function setUpSquares(){
    for (var i = 0; i < squares.length; i++) {
        // add click listeners to sqaures
        squares[i].addEventListener("click", function () {
            //grab picked color of square
            var clickedColor = this.style.background;
            //compare to picked color
            if (pickedColor === clickedColor) {
                messageDisplay.textContent = "Correct";
                resetButton.textContent = "Play Again?"
                changeColors(pickedColor);
                h1.style.background = clickedColor;
            } else {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset() {
    colors = generaRandomColors(numSquares)
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    //change colors of square
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = "none";
        }

    }
    h1.style.background = "steelblue";
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
}

// easyBtn.addEventListener("click", function () {
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generaRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         // i used if i < 3. this is better
//         //if there is a color, change the square background
//         if (colors[i]) {
//             squares[i].style.background = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });
// hardBtn.addEventListener("click", function () {
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6
//     colors = generaRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i < squares.length; i++) {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
// });


resetButton.addEventListener("click", function () {
    reset();
});

function changeColors(color) {
    //look through each square
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = color;
    }
    //change each color to match picked color
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generaRandomColors(num) {
    //make an array
    var arr = [];
    //add num random colors to array
    for (var i = 0; i < num; i++) {
        //get random color and push into array
        arr.push(randomColor());
    }
    //return array 
    return arr;
}

function randomColor() {
    //pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    //pick a "red" from 0 - 255
    var g = Math.floor(Math.random() * 256);
    //pick a "red" from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + r + (")");
}