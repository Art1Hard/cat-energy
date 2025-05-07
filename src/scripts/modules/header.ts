export const initChangeHeader = () => {
	const header: HTMLDivElement | null = document.querySelector(".header");
	const navLinks: NodeListOf<HTMLLinkElement> =
		document.querySelectorAll(".header__list-link");

	if (!header || navLinks.length === 0) return;

	let alpha = getAlpha(150, window.scrollY);

	header.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
	header.style.boxShadow = `0 4px 10px rgba(0, 0, 0, ${Math.min(alpha, 0.1)})`;

	changeStyleLinks();

	window.addEventListener("scroll", () => {
		alpha = getAlpha(150, window.scrollY);
		header.style.backgroundColor = `rgba(255, 255, 255, ${alpha})`;
		header.style.boxShadow = `0 4px 10px rgba(0, 0, 0, ${Math.min(
			alpha,
			0.1
		)})`;

		changeStyleLinks();
	});

	function getAlpha(maxScroll: number, scrollY: number): number {
		return Math.min(scrollY / maxScroll, 1);
	}

	function changeStyleLinks() {
		navLinks.forEach((element) => {
			if (alpha > 0) {
				element.style.color = "rgb(0, 0, 0)";
				element.style.textDecorationColor = "#68b738";
			} else {
				element.style.color = "rgb(255, 255, 255)";
				element.style.textDecorationColor = "currentColor";
			}
		});
	}
};
