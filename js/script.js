// Menu Drawer
const hamburgerButton = document.querySelector(".header__hamburger-button");
const menuDrawer = document.querySelector(".menu-drawer")
const closeDrawerButton = document.querySelector(".menu-drawer__close")
let menuLinks = [];

hamburgerButton.addEventListener("click", ()=> {
	menuDrawer.classList.toggle("menu-drawer--visible");
	menuLinks = document.querySelectorAll(".menu-drawer__links>a")
	hamburgerButton.style.display = "none";
	menuLinks.forEach((link, i) => {
		setTimeout(()=> {
			link.classList.add("links-animation")
	}, i*150);
	});
});


closeDrawerButton.addEventListener("click", ()=> {
	menuDrawer.classList.toggle("menu-drawer--visible");
	hamburgerButton.style.display = "block";
	menuLinks.forEach((link) => {
		link.classList.remove("links-animation");
	});
});



// Pop Drawer
const closePopDrawerButton = document.querySelector(".pop-drawer__close")
const popDrawer = document.querySelector(".pop-drawer")
const accordionButton = document.querySelector(".pop-drawer__accordion-button");
const accordionContent = document.querySelector(".pop-drawer__accordion-content");
const accordionContentButtons = document.querySelectorAll(".pop-drawer__accordion-content__button");
const thanksMessage = document.querySelector(".pop-drawer__thanks");

const displayPopDrawer = ()=> {
	setTimeout(()=> {
		popDrawer.classList.add("pop-drawer__visible");
		accordionButton.focus();
	}, 4000)
};

closePopDrawerButton.addEventListener("click", ()=>{
	popDrawer.classList.remove("pop-drawer__visible");
})

const toggleAccordionContent = ()=> {
	thanksMessage.style.display = "none";
	accordionContent.classList.toggle("pop-drawer__accordion-content--visible");
	accordionButton.classList.toggle("pop-drawer__accordion-button--expanded");
}

const closeAndDisplayThanks = ()=> {
	toggleAccordionContent();
	thanksMessage.style.display = "flex";
}

accordionContentButtons.forEach((button)=>{	
	button.addEventListener("click", ()=> {
		closeAndDisplayThanks();
	})
});


document.addEventListener("keydown", (event)=> {
	if (event.key === "Escape") {
		console.log();
		popDrawer.classList.remove("pop-drawer__visible");
	};
});

accordionButton.addEventListener("click", toggleAccordionContent);


// Thanks for contact-drawer
const thanksForSubmitMessage = document.querySelector(".thanks-submit-message")
const emailInput = document.querySelector("input");
const errorMessage = document.querySelector(".error-message");

const displayThanksAndPopDrawer = ()=> {	
	if (emailInput.checkValidity()) {  
		thanksForSubmitMessage.classList.add("thanks-submit-message--visible");
		displayPopDrawer();
	} else {
		errorMessage.style.display = "block";
	}
}

const inputEmailField = document.querySelector("input[type='email']");
inputEmailField.addEventListener("focus", ()=> {
	errorMessage.style.display = "none"
})

// Submit e-mail
const submitButton = document.querySelector(".section-contact__button");

submitButton.addEventListener("click", (event)=> {
	event.preventDefault();
	displayThanksAndPopDrawer();
});


// Hamburger change color on scroll

const changeHamburgerColor = ()=> {
	
	const hamburgerButtonPath = document.querySelector(".header__hamburger-button path");

	const pixelsScrolledFromTop = window.scrollY;

	const sectionsToSwitchColor = {
		sectionOneStart: 211,
		sectionOneEnd: 875,		
		sectionTwoStart: 1599,
		sectionTwoEnd: 2393,
		sectionThreeStart: 2452,
		sectionThreeEnd: 2649,
		sectionFourStart: 3382,
		sectionFourEnd: 4300,
		sectionFiveStart: 6020,
		sectionFiveEnd: 6675,
	}

	if (pixelsScrolledFromTop > sectionsToSwitchColor.sectionOneStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionOneEnd
		||
		(pixelsScrolledFromTop > sectionsToSwitchColor.sectionTwoStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionTwoEnd)
		||
		(pixelsScrolledFromTop > sectionsToSwitchColor.sectionThreeStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionThreeEnd)
		||
		(pixelsScrolledFromTop > sectionsToSwitchColor.sectionFourStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionFourEnd)
		||
		(pixelsScrolledFromTop > sectionsToSwitchColor.sectionFiveStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionFiveEnd)
		) {
			hamburgerButtonPath.style.fill = "white";
		} else {
			hamburgerButtonPath.style.fill = "black";
		}


}

window.addEventListener("scroll", changeHamburgerColor);

