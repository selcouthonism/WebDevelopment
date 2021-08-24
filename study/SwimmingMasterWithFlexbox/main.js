function openCloseDropDownMenu(){
	let toggle = document.getElementById("navbar-toggle");
	if(toggle.className == "topnav"){
		toggle.className += " responsive";
	}else{
		toggle.className = "topnav";
	}
}

var imgIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("slide");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	imgIndex++;
	if (imgIndex > x.length) {imgIndex = 1}    
	x[imgIndex-1].style.display = "block";  
	setTimeout(carousel, 2000); // Change image every 2 seconds
}
