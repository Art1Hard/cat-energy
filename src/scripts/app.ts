import { initComparison } from "./modules/comparison";
import { initChangeHeader } from "./modules/header";
import { initMap } from "./modules/map";
import isWebp from "./modules/webp.js";

isWebp();
initChangeHeader();
initComparison();
initMap();
