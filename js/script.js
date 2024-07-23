let currentSlide = 0;

function showSlide(index) {
	const slides = document.querySelector(".slides");
	const totalSlides = document.querySelectorAll(".slide").length;
	const indicators = document.querySelectorAll(".indicator");

	if (index >= totalSlides - 2) {
		currentSlide = totalSlides - 3; // щоб не показувати порожнє місце в кінці
	} else if (index < 0) {
		currentSlide = 0;
	} else {
		currentSlide = index;
	}

	const offset = -currentSlide * (100 / 3); // оскільки ми показуємо 3 слайда
	slides.style.transform = `translateX(${offset}%)`;

	indicators.forEach((indicator, i) => {
		indicator.classList.toggle("active", i === currentSlide);
	});
}

function nextSlide() {
	showSlide(currentSlide + 1);
}

function prevSlide() {
	showSlide(currentSlide - 1);
}

showSlide(currentSlide);
