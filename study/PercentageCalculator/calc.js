var numField1 = document.getElementById("numField1");
var numField2 = document.getElementById("numField2");
var resultTextField = document.getElementById("calcResult");
var form = document.getElementById("xIsWhatPercentOfY");

form.addEventListener("submit", function(event){
	//Null Check
	if(!numField1.value || !numField2.value){
		alert("Fileds are empty! Enter numbers.");
	}else{
		//numField1.value returns String. Convert it to float.
		var result = parseFloat(numField1.value) / parseFloat(numField2.value) * 100;
		resultTextField.innerText = "Answer is: " + result;
		
		//When we don't use preventDefault() method, the page will be refreshed.
		//Form fields will be empty again.
		//preventDefault() -> Dont refresh the page.
		event.preventDefault();
	}
});
