// Accordions (filter-buttons)

const partnerAccordions = document.querySelectorAll(".partner__accordion-button");
const accordionTypeContent = document.querySelector(".accordion__content-type");
const accordionMakeContent = document.querySelector(".accordion__content-make");

const filterButtons = document.querySelectorAll(".partner__accordion-content__button");
const cardContainer = document.querySelector(".partner__card-container");

const closeAccordions = ()=> {
		partnerAccordions.forEach((button)=>{		
		button.classList.remove("partner__accordion-button--expanded");
		button.nextElementSibling.classList.remove("partner__accordion-content--visible");
	});
};

const toggleAccordionFilterList = (event)=> {	
	event.currentTarget.classList.toggle("partner__accordion-button--expanded");
	event.currentTarget.nextElementSibling.classList.toggle("partner__accordion-content--visible");
};

partnerAccordions.forEach((button)=> {
	button.addEventListener("click", toggleAccordionFilterList);
});

filterButtons.forEach(button => {
	button.addEventListener("click", closeAccordions);	
});



// Render cards

const allCards = [
	{
		make: "Honda",
		model: "Goldwing",
		cylinders: 6,
		engine: 1833,
		type: "touring",
		imageUrl: "https://mtshop.no/assets/img/1024/1024/bilder_nettbutikk/8c293d4cdce21c477c37b8893c514e94-image.jpeg"
	},
	
	{
		make: "Honda",
		model: "CBR600F Hide UW",
		cylinders: 4,
		engine: 599,
		type: "sport",
		imageUrl: "https://www.motomachines.com/media/catalog/category/Honda-CBR600F-1999.jpg"
	},
	
	{
		make: "Suzuki",
		model: "Hayabusa",
		cylinders: 4,
		engine: 1340,
		type: "sport",
		imageUrl: "https://cloudfront-us-east-1.images.arcpublishing.com/octane/P5HAXSECQRFC3J4FNR2RZ2KGDE.jpg"
	},
	  
	{
		make: "Harley Davidson",
		model: "Road Ultra Glide",
		cylinders: 2,
		engine: 1600,
		type: "cruiser",
		imageUrl: "https://www.harley-davidson.com/content/dam/h-d/images/product-images/bikes/motorcycle/2023/2023-ultra-limited/2023-ultra-limited-010/360/2023-ultra-limited-010-motorcycle-02.jpg?impolicy=myresize&rw=1600"
	},

	{
		make: "Yamaha",
		model: "YZF R1",
		cylinders: 4,
		engine: 1000,
		type: "sport",
		imageUrl: "https://www.rovikmc.no/wp-content/uploads/2017/04/YZFR1_Black2.jpg"
	},

	{
		make: "Ducati",
		model: "Diavel",
		cylinders: 2,
		engine: 1262,
		type: "cruiser",
		imageUrl: "https://global-fs.webike-cdn.net/moto_img/cg/10/9178/L_c39a52edfaea49704e91fe40b9.jpg"
	},

	{
		make: "Kawasaki",
		model: "Ninja ZX-10R",
		cylinders: 4,
		engine: 998,
		type: "sport",
		imageUrl: "https://www.monsterbike.no/assets/img/640/640/bilder_nettbutikk/f8139982a04cdba3654860123234aac8-image.jpeg"
	},

	{
		make: "BMW",
		model: "R1250GS",
		cylinders: 2,
		engine: 1254,
		type: "adventure",
		imageUrl: "https://speedmc.no/wp-content/uploads/2020/12/BMW-R-1250-GS-14-2021-Speed-Motorcenter.jpg"
	},

	{
		make: "Suzuki",
		model: "Boulevard M109R",
		cylinders: 2,
		engine: 1783,
		type: "cruiser",
		imageUrl: "https://crs1.powersporttechnologies.com/photogallery/Suzuki/2019_Suzuki_Boulevard_M109RBOSS_WHT-BLU.jpg"
	}, 

	{
		make: "Triumph",
		model: "Street Triple RS",
		cylinders: 3,
		engine: 765,
		type: "naked",
		imageUrl: "https://media.triumphmotorcycles.co.uk/image/upload/f_auto/q_auto/sitecoremedialibrary/media-library/images/configurator/roadsters/hd/hd%20original%20baselayers/streettriplers_black_rhs.png?w=825"
	},

	{
		make: "Moto Guzzi",
		model: "V7 III Stone",
		cylinders: 2,
		engine: 744,
		type: "classic",
		imageUrl: "https://psmfirestorm.blob.core.windows.net/crs-images/337855/25611/original.jpg"
	},

	{
		make: "Harley Davidson",
		model: "Sportster Iron 883",
		cylinders: 2,
		engine: 883,
		type: "cruiser",
		imageUrl: "https://www.cycleworld.com/resizer/eUJZct86wYp3omhnpEkXaiIpIRY=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/72XNXX3LFVB2FO2MLWT77HW7Q4.jpg"
	},

	{
		make: "Indian",
		model: "Chief Vintage",
		cylinders: 2,
		engine: 1890,
		type: "cruiser",
		imageUrl: "https://cdn.dealerspike.com/imglib/v1/800x600/imglib/trimsdb/2025031-0-8600451.jpg"
	}, 

	{
		make: "Ducati",
		model: "Panigale V4",
		cylinders: 4,
		engine: 1103,
		type: "sport",
		imageUrl: "https://media.gq-magazine.co.uk/photos/5d24fc7217647800088b648d/master/w_1600%2Cc_limit/panigale-v4-studio-side.jpeg"
	},

	{
		make: "KTM",
		model: "1290 Super Adventure R",
		cylinders: 2,
		engine: 1301,
		type: "adventure",
		imageUrl: "https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2016/10/2017-KTM-1290-Super-Adventure-R-USA-01-scaled.jpg?fit=2560%2C1735&ssl=1"
	},

	{
		make: "Aprilia",
		model: "Tuono V4 1100 Factory",
		cylinders: 4,
		engine: 1077,
		type: "naked",
		imageUrl: "https://images.piaggio.com/aprilia/vehicles/ap6129800ebl00/ap6129800ebl01/ap6129800ebl01-01-s.png"
	},

	{
		make: "Yamaha",
		model: "MT-09",
		cylinders: 3,
		engine: 847,
		type: "naked",
		imageUrl: "https://speedmc.no/wp-content/uploads/2020/12/Yamaha-MT-09-1-a-2021-Speed-Motorcenter.jpg"
	},

	{
		make: "Kawasaki",
		model: "Versys 650",
		cylinders: 2,
		engine: 649,
		type: "adventure",
		imageUrl: "https://mcn-images.bauersecure.com/wp-images/4265/1440x960/versys-2.jpg?mode=max&quality=90&scale=down"
	},

	{
		make: "Harley Davidson",
		model: "Fat Boy",
		cylinders: 2,
		engine: 1868,
		type: "cruiser",
		imageUrl: "https://d2bywgumb0o70j.cloudfront.net/2021/01/28/294e4a51854a45ad99cfac3ca62e6a97_fb825d12a546f943.jpg"
	},

	{
		make: "Honda",
		model: "CB500F",
		cylinders: 2,
		engine: 471,
		type: "naked",
		imageUrl: "https://www.honda.co.uk/content/dam/central/motorcycles/colour-picker/street/cb500f/cb500f_2022/nh-303m_matteaxisgreymetallic/cb500f_2022_nh-303m_matteaxisgreymetallic.png/_jcr_content/renditions/c4.png"
	},

	{
		make: "Ducati",
		model: "Monster 821",
		cylinders: 2,
		engine: 821,
		type: "naked",
		imageUrl: "https://i0.wp.com/www.asphaltandrubber.com/wp-content/uploads/2014/05/Ducati-Monster-821-03.jpg?fit=2000%2C1497&ssl=1"
	},	  
];

const createAndRenderCard = (object)=> {
	const newCard = document.createElement("div");
	newCard.className = "partner-card";

	const newImage = document.createElement("img");
	newCard.appendChild(newImage);
	newImage.src = object.imageUrl;
	
	const cardContent = document.createElement("div");
	cardContent.className = "partner-card__content";
	newCard.appendChild(cardContent);

	const cardMake = document.createElement("div");
	cardMake.className = "card-content__make";
	cardContent.appendChild(cardMake);
	cardMake.textContent = object.make;
	
	const cardModel = document.createElement("div");
	cardModel.className = "card-content__model";
	cardContent.appendChild(cardModel);
	cardModel.textContent = object.model;

	const cardCylinders = document.createElement("div");
	cardCylinders.className = "card-content__cylinders";
	cardContent.appendChild(cardCylinders);
	cardCylinders.textContent = "Cylinders: " + object.cylinders;
	
	const cardEngine = document.createElement("div");
	cardEngine.className = "card-content__engine";
	cardContent.appendChild(cardEngine);
	cardEngine.textContent = "Engine: " + object.engine;

	cardContainer.appendChild(newCard);
};

const renderArrayOfCards = (cardsArray)=> {
	cardContainer.textContent = "";
	cardsArray.forEach((card)=> {
		createAndRenderCard(card);
	})
}


// Filter section
let filteredCards = [];
let filterIsActive = false;


//Filter by type or make
filterButtons.forEach((filterButton)=> {
	const filterCardsType = (event)=> {
		let currentButton = event.currentTarget.dataset.filterBy;
		if (filterIsActive === false) {
				filteredCards = allCards.filter((card) => {
					return card.type.toLowerCase() === currentButton || card.make.toLowerCase() === currentButton; 
				});
				filterIsActive = true;
			} else {
				filteredCards = filteredCards.filter((card) => {
					return card.type.toLowerCase() === currentButton || card.make.toLowerCase() === currentButton; 	
				});
				filterIsActive = true;
			}	
		renderArrayOfCards(filteredCards);
	};	
	filterButton.addEventListener("click", filterCardsType);
});

// Clear filter
const clearButton = document.querySelector(".partner__clear-filter");
clearButton.addEventListener("click", ()=> {
	filterIsActive = false;
	renderArrayOfCards(allCards);	
});

//Render on page load
renderArrayOfCards(allCards);