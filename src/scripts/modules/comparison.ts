export const initComparison = () => {
	const slider: HTMLInputElement | null =
		document.querySelector(".example__range");

	const prevSlide: HTMLDivElement | null = document.querySelector(
		".example__slide--before"
	);
	const nextSlide: HTMLDivElement | null = document.querySelector(
		".example__slide--after"
	);

	const prevBtn: HTMLButtonElement | null = document.querySelector(
		".example__range-prev"
	);
	const nextBtn: HTMLButtonElement | null = document.querySelector(
		".example__range-next"
	);

	if (!slider || !prevSlide || !nextSlide) return;

	slider.addEventListener("input", () => {
		prevSlide.style.width = `${100 - Number(slider.value)}%`;
		nextSlide.style.width = `${slider.value}%`;
	});

	if (!prevBtn || !nextBtn) return;

	prevBtn.addEventListener("click", () => {
		prevSlide.style.width = "100%";
		nextSlide.style.width = "0%";
		slider.value = "0";
	});

	nextBtn.addEventListener("click", () => {
		prevSlide.style.width = "0%";
		nextSlide.style.width = "100%";
		slider.value = "100";
	});
};
