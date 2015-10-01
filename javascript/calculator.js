function calculate(action){
	
	//console.log("adi");
	var one= parseInt(document.getElementById("one").value);
	var two= parseInt(document.getElementById("two").value);
	var output = null;

	if(isNaN(one)){
		document.getElementById("invalidinput1").innerHTML="Please enter only numbers in first number";
	}else{
		document.getElementById("invalidinput1").innerHTML="";
	}
	if(isNaN(two)){
		document.getElementById("invalidinput2").innerHTML="Please enter only numbers in second number";
	}else{
		document.getElementById("invalidinput2").innerHTML="";
	}
	if(!(isNaN(one) && isNaN(two))){
		if (1==action) {
			output = one + two ;
		} else if (2==action) {
			output = one - two ;
		}else if(3==action){
			output = one * two ;
		}else if(4==action){
			output = one / two ;
		}
		//console.log('output >',output);
		document.getElementById("output").innerHTML=output;
	}
}
 
function isnumeric(value){
	// didnt work have to check
	if(value == NaN){
		alert(value);
		return false;
	}else{
		return true;
	}
}