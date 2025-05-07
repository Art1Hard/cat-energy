import type { YMapLocationRequest } from "@yandex/ymaps3-types";

export async function initMap(): Promise<void> {
	const mapElement = document.getElementById("ymap");
	if (!mapElement) return;

	await ymaps3.ready;

	const LOCATION: YMapLocationRequest = {
		center: [30.321254037023863, 59.93880662125815],
		zoom: 18,
	};

	const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapMarker } =
		ymaps3;

	mapElement.addEventListener("click", (e) => {
		map.setBehaviors(["scrollZoom", "drag", "pinchZoom"]);

		e.stopPropagation();
	});

	document.addEventListener("click", () => {
		map.setBehaviors([]);
	});

	const map = new YMap(mapElement, {
		location: LOCATION,
		behaviors: [],
	});
	map.addChild(new YMapDefaultSchemeLayer({}));
	map.addChild(new YMapDefaultFeaturesLayer({}));

	const content = document.createElement("div");
	content.style.position = "relative";

	// Инициализируйте маркер
	const marker = new YMapMarker(
		{
			coordinates: [30.323009940675345, 59.93867062114945],
		},
		content
	);

	// Добавьте маркер на карту
	map.addChild(marker);

	// Добавьте произвольную HTML-разметку внутрь содержимого маркера
	content.innerHTML =
		"<img class='map__marker' src='../img/map-pin.png' alt='marker'>";
}
