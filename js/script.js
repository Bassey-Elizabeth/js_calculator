//script.js




//Custom function
function calculateTip(){

	//store the data of the input
	var billAmount = document.getElementById("billAmount").value;
	var serviceQuality = document.getElementById("serviceQuality").value;
	var numPeople = document.getElementById("totalPeople").value;

	//Quick validation
	if(billAmount === "" || serviceQuality == 0 ){
		return window.alert("Please enter some values to get this baby up and running!"); //This will prevent the function from continuing.
	}

//check to see if this input is empty or less than or equals to 1.
if(numPeople === "" || numPeople <= 1){
	numPeople = 1;

//Hide the value "each".
	document.getElementById("each").style.display = "none";
}
else{
	document.getElementById("each").style.display = "block";
}

//Do some Math!
	var total = (billAmount * serviceQuality)/numPeople;
	total = Math.round(total*100)/100; //rounds the total to 2 decimal places.
	total = total.toFixed(2); //To a fixed decimal place of 2.
	
	//Display the tip
	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}






//Hide the tip amount on load.
let totalAmount = document.getElementById("totalTip");
totalAmount.style.display = "none";
document.getElementById("each").style.display = "none";


//clicking the button calls our custom function.
document.getElementById("calculate").onclick = function() {calculateTip();};
