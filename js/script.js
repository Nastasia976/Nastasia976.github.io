var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}
function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slider-item");
	var sl = document.getElementsByClassName("item");
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}
	for (i=0; i <slides.length; i++){
		slides[i].style.display= "none";
	}
	for (i=0; i <sl.length; i++){
		sl[i].style.display= "none";
	}
	slides[slideIndex-1].style.display = "block";
	sl[slideIndex-1].style.display = "block";
}


document.getElementById("bm").onclick = function() {
	document.getElementById("bm").classList.toggle("active");
	document.getElementById("rm").classList.toggle("active");
	document.getElementById("hidden").classList.toggle("lock");
}
