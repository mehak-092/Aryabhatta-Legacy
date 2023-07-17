const KnowMeMoreBtn = document.querySelector('.Know-me-more-btn');
const text = document.querySelector('text');

KnowMeMoreBtn.addEventListener('click', (e) => {
	text.classList.toggle('Know-me-more');
})
function navbarToggle() {
	document.querySelector('.nav-cross').classList.toggle('show');
	document.querySelector('.nav-title').classList.toggle('show');
	document.querySelector('.nav-items').classList.toggle('show');
};

function navbarClose() {
	document.querySelector('.nav-cross').classList.remove('show');
	document.querySelector('.nav-title').classList.remove('show');
	document.querySelector('.nav-items').classList.remove('show');
};

window.onscroll = function() {
	scrollFunction()
};

function scrollFunction() {
	if (window.scrollY > 50 || window.scrollY > 50) {
		document.querySelector('.scroll-top').classList.add('show');
	} else {
		document.querySelector('.scroll-top').classList.remove('show');
	}
}