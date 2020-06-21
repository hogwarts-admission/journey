var modal = document.getElementById("myModal");
//toggle button
$(".js-sort").on("click", ()=> {
	$(".sorting-hat,.avatar__mouth").removeClass("animate");
	var item = "ravenclaw";
	setTimeout(()=> { $(".sorting-hat").addClass("animate"); $(".sorting-hat__answer").text(item + "!"); }, 1000);
	setTimeout(()=> { $(".avatar__mouth").addClass("animate"); }, 1500);
	setTimeout(()=> { $(".main-content__wrapper").addClass(item); $("body").css("background", "#006daf"); }, 4000);
	setTimeout(()=> {
		$("body").css("background", "black");
		$(".main-content__wrapper").css("display", "none");
		$(".traverse").toggleClass("active");
		$(".traverse").css("animation","0.5s animatetop");
	}, 7000);
});
$(".js-first").on("click",()=> {
	$(".butt").css("display", "none");
	$(".map-base").toggleClass("first");
	setTimeout(() => { modal.style.animation="0.5s animatetop"; modal.style.display = "block"; }, 9000);	
});
$(".submit").on("click",()=> {
	var pass = document.getElementById("pass").value;
	switch(pass){
		case "chemical twins":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-1").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-1").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("first"); $(".map-base").toggleClass("second"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-1").toggleClass("active"); $(".loc-2").toggleClass("active");
			$(".msg-1").toggleClass("active"); $(".msg-2").toggleClass("active"); }, 10000);
			break;
		case "dark temptation":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-2").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-2").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-2").toggleClass("active"); $(".msg-3").toggleClass("active"); }, 5300);
			break;
		case "david":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-3").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-3").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("second"); $(".map-base").toggleClass("third"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-2").toggleClass("active"); $(".loc-3").toggleClass("active");
			$(".msg-3").toggleClass("active"); $(".msg-4").toggleClass("active"); }, 10000);
			break;
		case "kfc":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-4").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-4").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-4").toggleClass("active"); $(".msg-5").toggleClass("active"); }, 5300);
			break;
		case "maggie":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-5").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-5").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("third"); $(".map-base").toggleClass("fourth"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-3").toggleClass("active"); $(".loc-4").toggleClass("active");
			$(".msg-5").toggleClass("active"); $(".msg-6").toggleClass("active"); }, 10000);
			break;
		case "litt up":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-6").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-6").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-6").toggleClass("active"); $(".msg-7").toggleClass("active"); }, 5300);
			break;
		case "fourth":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-7").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-7").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("fourth"); $(".map-base").toggleClass("fifth"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-4").toggleClass("active"); $(".loc-5").toggleClass("active");
			$(".msg-7").toggleClass("active"); $(".msg-8").toggleClass("active"); }, 10000);
			break;
		case "vodka":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-8").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-8").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-8").toggleClass("active"); $(".msg-9").toggleClass("active"); }, 5300);
			break;
		case "kittens":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-9").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-9").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("fifth"); $(".map-base").toggleClass("sixth"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-5").toggleClass("active"); $(".loc-6").toggleClass("active");
			$(".msg-9").toggleClass("active"); $(".msg-10").toggleClass("active"); }, 10000);
			break;
		case "photoshop":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-10").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-10").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-10").toggleClass("active"); $(".msg-11").toggleClass("active"); }, 5300);
			break;
		case "buttershock":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-11").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-11").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("sixth"); $(".map-base").toggleClass("seventh"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-6").toggleClass("active"); $(".loc-7").toggleClass("active");
			$(".msg-11").toggleClass("active"); $(".msg-12").toggleClass("active"); }, 10000);
			break;
		case "jack of diamonds":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-12").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-12").toggleClass("active");
			}, 5000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".msg-12").toggleClass("active"); $(".msg-13").toggleClass("active"); }, 5300);
			break;
		case "three":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-13").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".toast-13").toggleClass("active");
			}, 5000);
			setTimeout(() => {  $(".map-base").toggleClass("seventh"); $(".map-base").toggleClass("back"); }, 2000);
			setTimeout(() => {  modal.style.animation="0.5s animatetop"; modal.style.display = "block";
			$(".loc-7").toggleClass("active"); $(".loc-1").toggleClass("active");
			$(".msg-13").toggleClass("active"); $(".msg-14").toggleClass("active"); }, 10000);
			break;
		case "constant":
			modal.style.animation="0.5s animatebot"; modal.style.display = "none"; document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-chibi").toggleClass("active"); $(".last").toggleClass("active");
			break;
		default:
			document.getElementById("pass").value="";
			$(".toast").toggleClass("active"); $(".toast-ron").toggleClass("active"); $(".wrong").toggleClass("active");
			setTimeout(() => {   
			$(".toast").toggleClass("active"); $(".toast-ron").toggleClass("active"); $(".wrong").toggleClass("active");
			}, 5000);
			break;
	}
});