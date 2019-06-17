var backgroundColor = "#232323";
var colors; // = setColor(6); // 6 colors
var rgbColor; // = getColor();
var numColors = 6;
var squares = document.querySelectorAll(".square"); // class
var colorDisp = document.getElementById("colorDisp");
var msgDisp = document.querySelector("#msg"); // id
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#resetBtn");
var modeBtns = document.querySelectorAll(".mode");

btnListner();
init();

function init(){
  reset(numColors);
  rgbColor = getColor();
  colorDisp.textContent = rgbColor;
  colorSquares();
}

function btnListner(){

  resetBtn.addEventListener("click", function(){
    h1.style.backgroundColor = "steelblue";
    msgDisp.textContent = "";
    this.textContent = "Reset";
    reset(numColors);
    //change colors of squares
    for(var i = 3; i < squares.length; i++){
      if(numColors === 6){
        squares[i].style.display = "block";
      } else {
        squares[i].style.display = "none";
      }
    }
  })

  for(var i = 0; i < modeBtns.length; i++){
    modeBtns[i].addEventListener("click", function() {
      h1.style.backgroundColor = "steelblue";
      msgDisp.textContent = "";
      resetBtn.textContent = "Reset";

      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");

      // the code bellow means the same thing as the if bellow it
      this.textContent === "Easy" ? numColors = 3 : numColors = 6;
      // if(this.textContent === "Easy"){
      //   numColors = 3;
      // } else {
      //   numColors = 6;
      // };

      reset(numColors);
    })
  }
};

function colorSquares(){
  for (var i = 0; i < squares.length; i++) {
    // add initial colors to the squares
    squares[i].style.backgroundColor = colors[i];

    // add clicj listener to the squares
    squares[i].addEventListener("click", function(){
      // get color of the clicked squares
      var colorClicked = this.style.backgroundColor;
      //compare the color to the colorDisp
      if (colorClicked === rgbColor) {
        msgDisp.textContent = "Correct";
        resetBtn.textContent = "Play Again?";
        changeColors(rgbColor);
        h1.style.backgroundColor = rgbColor;
      } else{
        this.style.backgroundColor = backgroundColor;
        msgDisp.textContent = "Try Again";
      }
    });
  }
}

function changeColors(color){
  //loop through all squares
  for (var i = 0; i < numColors; i++) {
    if (!(color === squares[i].style.backgroundColor)) {
      squares[i].style.backgroundColor = backgroundColor ;
    }
  }
}

function getColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function setColor(num){
  var arr = [];

  // add num random colors to the array
  for (var i = 0; i < num; i++) {
    arr.push(randomColor());
    // arr[i] = randomColor();
  }
  return arr;
}

function randomColor(){
  // random goes from 0 to 1 and does not include 1
  // use Math.floor to make the number withdout decimal

  // get a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  // get a "green" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  // get a "blue" from 0 to 255
  var b = Math.floor(Math.random() * 256);

  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(num){
  colors = setColor(num); // 6 colors
  rgbColor = getColor();
  colorDisp.textContent = rgbColor;
  colorSquares();

  // makes the square visible
  for (var i = 3; i < squares.length; i++) {
    if (num === 3) {
      squares[i].style.display = "none";
    } else{
      squares[i].style.display = "block";
    };
  }
}
