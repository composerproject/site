function revealMessage(){
	document.getElementById("hiddenMessage").style.display = 'block';
}

function countDown(){
	var currentVal = document.getElementById("countDownButton").innerHTML;
	var newVal = currentVal - 1;
	if(newVal == 0){
		newVal = 10
	}
	document.getElementById("countDownButton").innerHTML = newVal;
}