function myFunction() {
	var x = document.getElementById("nav-items-all");
	if (x.style.display === "none") {
		x.style.display = "flex";
	} else {
		x.style.display = "none";
	}
	var y = document.getElementById("space-div");
	if (y.style.display === "none") {
		y.style.display = "block";
	} else {
		y.style.display = "none";
	}
}