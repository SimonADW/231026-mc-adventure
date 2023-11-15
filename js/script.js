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

window.addEventListener("DOMContentLoaded", ()=> {
	setTimeout(()=> {
		popDrawer.classList.add("pop-drawer__visible");
	}, 300)
})

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

accordionButton.addEventListener("click", toggleAccordionContent);






// Tanks for contact-drawer




// Submit e-mail