var email = document.getElementById("inputEmail");
var password = document.getElementById("inputPassword");
var form = document.getElementById("inputSignIn");

form.addEventListener("submit", function(event){
	//Null Check
	if(!email.value || !password.value){
		alert("Email or password cannot be empty!");
	}else{
		alert("Thank you for login! \n "+ "Email: " + email.value + " Pass: " + password.value);	
	}
});
