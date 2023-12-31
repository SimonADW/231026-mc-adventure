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
	let sectionsToSwitchColor = {};
	const hamburgerButtonPath = document.querySelector(".header__hamburger-button path");
	const pixelsScrolledFromTop = window.scrollY;
	const standardSectionHeigth = window.innerHeight;
	const sectionTwoHeight = innerHeight * 0.7;
	const sectionBikes = document.querySelector(".section-bikes");
	const sectionBikesHeight = sectionBikes.offsetHeight;

	if (window.innerWidth >= 840) {	
		sectionsToSwitchColor = {
			sectionOneStart: 211,
			sectionOneEnd: standardSectionHeigth - 30,		// -30 is half the hamburger vertically //
			sectionTwoStart: sectionTwoHeight + (standardSectionHeigth),
			sectionTwoEnd: sectionTwoHeight + (standardSectionHeigth * 2) - 30,
			sectionThreeStart: sectionTwoHeight + (standardSectionHeigth * 3) - 30,
			sectionThreeEnd: sectionTwoHeight + (standardSectionHeigth * 4),
			sectionFourStart: sectionTwoHeight + sectionBikesHeight + (standardSectionHeigth * 4) - 30,
			sectionFourEnd: sectionTwoHeight + sectionBikesHeight + (standardSectionHeigth * 5) - 30,
		}; 

	} else if (window.innerWidth < 840) {	
		sectionsToSwitchColor = {	
			sectionOneStart: 430,
			sectionOneEnd: standardSectionHeigth - 30,	
			sectionTwoStart: sectionTwoHeight + (standardSectionHeigth),
			sectionTwoEnd: sectionTwoHeight + (standardSectionHeigth * 2) - 30,
			sectionThreeStart: sectionTwoHeight + (standardSectionHeigth * 4) - 30,
			sectionThreeEnd: sectionTwoHeight + (standardSectionHeigth * 5),
			sectionFourStart: sectionTwoHeight + sectionBikesHeight + (standardSectionHeigth * 5) - 30,
			sectionFourEnd: sectionTwoHeight + sectionBikesHeight + (standardSectionHeigth * 6) - 30,
		}; 
	}
	
	if (pixelsScrolledFromTop > sectionsToSwitchColor.sectionOneStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionOneEnd
		||
		(pixelsScrolledFromTop > sectionsToSwitchColor.sectionTwoStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionTwoEnd)
		||
		(pixelsScrolledFromTop > sectionsToSwitchColor.sectionThreeStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionThreeEnd)
		||
		(pixelsScrolledFromTop > sectionsToSwitchColor.sectionFourStart && pixelsScrolledFromTop < sectionsToSwitchColor.sectionFourEnd)		
	) {
		hamburgerButtonPath.style.fill = "white";
	} else {
		hamburgerButtonPath.style.fill = "black";
	};		
};

window.addEventListener("scroll", changeHamburgerColor);

