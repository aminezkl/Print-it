const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let indexActuel = 0;

function mettreAJourImage() {
    const slide = slides[indexActuel];
    document.getElementById('carousel-image').src = `./assets/images/slideshow/${slide.image}`;
    document.getElementById('carousel-text').innerHTML = slide.tagLine;
	mettreAJourCercles();
}


function creerCercles()
{
    const dots = document.querySelector('.dots');
    let node = ""

    slides.forEach(slide => node += '<div class="dot"></div>' )
	console.log(node)
	dots.innerHTML="123";
    dots.innerHTML = node;
}

function mettreAJourCercles() {
    const cercles = document.querySelectorAll('.dot');
    cercles.forEach((cercle, index) => {
        if (index === indexActuel) {
            cercle.classList.add('dot_selected');
        } else {
            cercle.classList.remove('dot_selected');
        }
    });
}



function imagePrecedente() {
    indexActuel = (indexActuel - 1 + slides.length) % slides.length;
    mettreAJourImage();
}

function imageSuivante() {
    indexActuel = (indexActuel + 1) % slides.length;
    mettreAJourImage();
}

creerCercles();
mettreAJourImage();
