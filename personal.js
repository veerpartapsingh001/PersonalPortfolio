var mybutton = document.getElementById("topbutton");
var logo = document.getElementById("logo");

var burger = document.querySelector(".hamburger");
var navBar = document.querySelector(".nav");
var mainNavBar = document.querySelector(".main-nav");


window.onscroll = function() {scrollButtonDetect()};

function scrollButtonDetect() {
  if (document.body.scrollTop > 210 || document.documentElement.scrollTop > 210) {
    mybutton.style.display = "block"
	logo.style.left = "0px";
	navBar.classList.add("burgershow");
	mainNavBar.classList.add("navmover");
  } else {
    mybutton.style.display = "none";
	navBar.classList.remove("burgershow");
	mainNavBar.classList.remove("navmover");
  }
}

function scrollToTop() {
  window.scrollTo({top: 0, behavior: 'smooth'});
}

burger.addEventListener("click", function() {
	navBar.classList.toggle("changenav")
})


// I will be creating a different pen with touch support but right // now I have no time for it due to school



		const slider = document.querySelector(".items");
		const slides = document.querySelectorAll(".item");
		const button = document.querySelectorAll(".button");

		let current = 0;
		let prev = 4;
		let next = 1;

		for (let i = 0; i < button.length; i++) {
			button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
		}

		const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1);

		const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

		const gotoNum = number => {
			current = number;
			prev = current - 1;
			next = current + 1;

			for (let i = 0; i < slides.length; i++) {
				slides[i].classList.remove("active");
				slides[i].classList.remove("prev");
				slides[i].classList.remove("next");
			}

			if (next == 5) {
				next = 0;
			}

			if (prev == -1) {
				prev = 4;
			}

			slides[current].classList.add("active");
			slides[prev].classList.add("prev");
			slides[next].classList.add("next");
		}






// Sliding

var slideIns = document.querySelectorAll(".slidetext");

const appearOptions = {
	thresholds: 0,
	rootMargin: "0px 0px -250px 0px"
  };

  var appearWhenScrolling = new IntersectionObserver(function(entries, appearOnScroll) {
	entries.forEach(function(entry) {
	  if (!entry.isIntersecting) {
		return;
	  } 
	  else {
		entry.target.classList.add("slideAppear");
		appearOnScroll.unobserve(entry.target);
	  }
	});
  }, appearOptions);

  slideIns.forEach(slideIn => {
	appearWhenScrolling.observe(slideIn);
  });


  function contactValidate() {

	let firstName = document.getElementById("firstName");
	let lastName = document.getElementById("lastName");
	let email = document.getElementById("Email");
	let regExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/;
	let messageBox = document.getElementById("messageBox");

	event.preventDefault();
	
	  event.preventDefault();
	
	  if (firstName.value == "" || firstName.value == null) {
		firstName.focus();
		  alert("Please enter a first name!");
	  }

	  else if (lastName.value == "" || lastName.value == null) {
		lastName.focus();
		  alert("Please enter a last name!");
	  }

	  else if (!regExp.test(email.value) ) {
		email.focus();
		  alert("Check the email address");
	  }

	  else if (messageBox.value == "" || messageBox.value == null) {
		messageBox.focus();
		  alert("Please enter a message!");
	  }

	  else {
		alert("Email Sent!");

		window.open("mailto:27Veers@gmail.com"
		+ "&subject=" + encodeURIComponent("This is my subject")
		+ "&body=" + encodeURIComponent(messageBox.value));

	  }
	  
	}


// var projectCard1 = document.getElementById("projectCardOpener1");
// var projectCard2 = document.getElementById("projectCardOpener2");
// var projectCard3 = document.getElementById("projectCardOpener3");
// var projectCard4 = document.getElementById("projectCardOpener4");
// var cardButton1 = document.getElementById("cardButton1");
// var cardButton2 = document.getElementById("cardButton2");
// var cardButton3 = document.getElementById("cardButton3");
// var cardButton4 = document.getElementById("cardButton4");
// var closeCard1 = document.getElementById("closeCard1");

// cardButton1.onclick = function() {
// 	projectCard1.style.display = "block";
// 	projectCard1.classList.add("displayCardContent");
// }
// cardButton2.onclick = function() {
// 	projectCard2.style.display = "block";
// 	projectCard2.classList.add("displayCardContent");
// }
// cardButton3.onclick = function() {
// 	projectCard3.style.display = "block";
// 	projectCard3.classList.add("displayCardContent");
// }
// cardButton4.onclick = function() {
// 	projectCard4.style.display = "block";
// 	projectCard4.classList.add("displayCardContent");
// }

// closeCard1.onclick = function() {
// 	projectCard1.style.display = "none";
// 	projectCard1.classList.remove("displayCardContent");
// }
// closeCard2.onclick = function() {
// 	projectCard2.style.display = "none";
// 	projectCard2.classList.remove("displayCardContent");
// }
// closeCard3.onclick = function() {
// 	projectCard3.style.display = "none";
// 	projectCard3.classList.remove("displayCardContent");
// }
// closeCard4.onclick = function() {
// 	projectCard4.style.display = "none";
// 	projectCard4.classList.remove("displayCardContent");
// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// function scrollProgressBar() {
// 	var getMax = function () {
// 	  return $(document).height() - $(window).height();
// 	};
  
// 	var getValue = function () {
// 	  return $(window).scrollTop();
// 	};
  
// 	var progressBar = $(".progress-bar"),
// 	  max = getMax(),
// 	  value,
// 	  width;
  
// 	var getWidth = function () {
// 	  // Calculate width in percentage
// 	  value = getValue();
// 	  width = (value / max) * 100;
// 	  width = width + "%";
// 	  return width;
// 	};
  
// 	var setWidth = function () {
// 	  progressBar.css({ width: getWidth() });
// 	};
  
// 	$(document).on("scroll", setWidth);
// 	$(window).on("resize", function () {
// 	  // Need to reset max
// 	  max = getMax();
// 	  setWidth();
// 	});
//   }

//   $(document).ready(function () {
// 	SF_scripts();
  
// 	scrollProgressBar();
//   });