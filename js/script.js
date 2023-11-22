// Menu Drawer
const hamburgerButton = document.querySelector(".header__hamburger-button");
const menuDrawer = document.querySelector(".menu-drawer")
const closeDrawerButton = document.querySelector(".menu-drawer__close")

hamburgerButton.addEventListener("click", ()=> {
	menuDrawer.classList.toggle("menu-drawer--visible");
});

closeDrawerButton.addEventListener("click", ()=> {
	menuDrawer.classList.toggle("menu-drawer--visible");
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






// Tanks for contact-drawer
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

