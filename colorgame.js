var colors = generateRandomColors(6);

var squares = document.querySelectorAll(".square")
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
  
});

resetButton.addEventListener("click", function() {
  colors = generateRandomColors(6);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor.toUpperCase();
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = " ";

  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]
  }

  h1.style.backgroundColor = "#5096FF";
});

colorDisplay.textContent = pickedColor.toUpperCase();

for(var i = 0; i < squares.length; i++){
  squares[i].style.backgroundColor = colors[i];

  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      for(var j = 0; j < squares.length; j++){
        squares[j].style.backgroundColor = pickedColor;
        h1.style.backgroundColor = pickedColor;
        messageDisplay.textContent = "Correct";
        resetButton.textContent = "Play Again?";
      }
    }
    else
    {
      this.style.backgroundColor = "#101010";
      messageDisplay.textContent = "Try Again";
    }
  });
}

function pickColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
  var arr = [];

  for(var i = 0; i < num; i++) {
    arr.push(randomColor());
  }

  return arr;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
