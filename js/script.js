var numSquare = 6;
var colors = generateRandomcolors(numSquare);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquare = 3: numSquare = 6;
		// if(this.textContent === "Easy"){
		// 	numSquare = 3;
		// }else{
		// 	numSquare = 6;
		// }
		reset();
	})
}

function reset(){
	colors = generateRandomcolors(numSquare);
	//pick a new random color frm arry
	pickedColor = pickColor();
	resetButton.textContent = "new Color";
	//change the color display to pickColor
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = "";
	//change a color of sqaure
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	h1.style.background = "steelblue";
}


// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquare = 3; 
// 	colors = generateRandomcolors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background = colors[i];
// 		}else{
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquare = 6;
// 	colors = generateRandomcolors(numSquare);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i = 0; i < squares.length; i++){
// 		squares[i].style.background = colors[i];
// 		squares[i].style.display = "block";		
// 	}
// });


resetButton.addEventListener("click", function(){

	reset();
	//generate a new color
	// colors = generateRandomcolors(numSquare);  
	// //pick a new random color frm arry
	// pickedColor = pickColor();
	// this.textContent = "new Color";
	// //change the color display to pickColor
	// colorDisplay.textContent = pickedColor;
	// messageDisplay.textContent = "";
	// //change a color of sqaure
	// for(var i = 0; i < squares.length; i++){
	// 	squares[i].style.background = colors[i];
	// }
	// h1.style.background = "steelblue";
});


colorDisplay.textContent = pickedColor;


for(var i=0 ; i< squares.length; i++){
	//for initial color
	squares[i].style.background =  colors[i];
	//add click listener to square
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.background;
		console.log(clickedColor, pickedColor);
		 if(clickedColor === pickedColor){
		 	messageDisplay.textContent = "correct";
		 	colorChange(clickedColor);
		 	h1.style.background = clickedColor;
		 	resetButton.textContent = "Play again? ";
		 } else{
		 	this.style.background = "#232323";
		 	messageDisplay.textContent = "Try again";
		 }
	});
}

function colorChange(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomcolors(num){
	var arr =[];
	//reapeat a num times
	for(var i=0 ; i < num; i++){
		arr.push(randomColor());
		//get a random color and push into a array
	}
	return arr;
}

function randomColor(){
	//pick a red color
	var r = Math.floor(Math.random() * 256);
	//pick a green color
	var g = Math.floor(Math.random() * 256);
	//pick a blue color
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}