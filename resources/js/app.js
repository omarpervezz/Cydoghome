const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', ()=>{
   //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});



// Header Type = Fixed
$(window).scroll(function () {
	var scroll = $(window).scrollTop();
	// var box = $('.nav_bg_adder').height();
	// var header = $('nav').height();
  
	if (scroll > 20) {
	  $("nav").addClass("nav_bg_adder");
	} else {
	  $("nav").removeClass("nav_bg_adder");
	}
  });