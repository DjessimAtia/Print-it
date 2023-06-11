const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

//on va assigner une variable (const) a un selector .//  

const next = document.querySelector('.arrow_right');
const previous = document.querySelector('.arrow_left');
const dots = document.querySelector('.dots')
const items = document.querySelector('.banner-img');
const baseUrlImage = "assets/images/slideshow/";
let count = 0;
//ici on reccupere l'elements par le ID//
const text = document.getElementById("banner").querySelector("p");

//on Apelle la fonction pour cree nos boules

createDots();

//on creer  un event pour que nos fleches soit clickable et on leur rajoute une fonctions Precedant (pour reculer ) et Suivant (pour avancer)
previous.addEventListener("click", Precedant);

next.addEventListener("click", Suivant);


/***FONCTION***/

function createDots() {
	for (let i = 0; i < slides.length; i++) {
		//boucle pour indiquer le nombre de boule à placer, tant que i est inférieur à la taille du tableau, on ajoute +1 à i
		let div = document.createElement("div");
		//on cree un element html nommer "div" qu'on ajoute dans une variable pour le reutiliser.
		div.classList.add("dot");
		//on ajoute a notre "div" la classe css (dot)
		dots.appendChild(div);
		// on attache notre "div" a l'element parrent (dots)
		if (i == count) div.classList.add("dot_selected");
		//Si i =count (0) alors le premier points recuperer dot_selected
	}

}



function changeDotSelected() {
	let Dot = document.querySelectorAll('.dot')
	// On cree une variables pour recuperer tout les div avec le queryAll
	for (let i = 0; i < Dot.length; i++) {
		Dot[i].classList.remove("dot_selected");
		// a chaque iteration de la boucle la classe dot_selected est supprimer de la boule actuel cela permet de supprimer la classe a tout les elements  div 
		if (i == count) Dot[i].classList.add('dot_selected');
		// Dot [i] (correspond au nombre du compteur )  herite de la classe dot_selected.
	}

}
function Precedant() {
	if (count == 0) {
		count = slides.length - 1;
		// Si count = Slides.lenght -1  la position prendra le dernier element du tableau 
	} else {
		count = count - 1;
		// Sinon la variable count est decrementée de 1 
	}

	items.src = baseUrlImage + slides[count].image;
	// on indique la source à afficher selon le numéro du compteur.
	text.innerHTML = slides[count].tagLine;
	// on change le text en fonction du numéro du compteur.
	changeDotSelected();
	// La fonction sert a nous indiquer ou nous somme (grace a une boule qui a la classe dot_selected)
}
function Suivant() {
	if (count == slides.length - 1) {
		count = 0;
		// Si count = slides.length-1(Dernier element du tableau) count est reset a 0
	} else {
		count = count + 1;
		// Sinon  la variable count est  incrementée de 1
	}

	//quand le compteur est au dernier index du tableau (longueur du tableau -1), on remet à zéro sinon on lui ajoute +1
	items.src = baseUrlImage + slides[count].image;

	text.innerHTML = slides[count].tagLine;

	changeDotSelected();
}