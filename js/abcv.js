function navToMenu() {
	console.log("trigger");
	$.mobile.navigate("#bmi-calc");
}

//gsap.to(".logo",{duration: 2, x: 300});
gsap.to(".logo",{
		duration: 2, 
		y: -50,
		opacity: 1,
		onComplete: navToMenu
});
