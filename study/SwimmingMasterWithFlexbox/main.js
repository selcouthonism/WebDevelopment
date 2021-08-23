function openCloseDropDownMenu(){
	let toggle = document.getElementById("navbar-toggle");
	if(toggle.className == "topnav"){
		toggle.className += " responsive";
	}else{
		toggle.className = "topnav";
	}
}
