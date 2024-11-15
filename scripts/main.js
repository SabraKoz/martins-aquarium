import { generateFishList, renderFishToDOM } from './fishList.js'
import { generateTipList, renderTipsToDOM } from './tipList.js'
import { generateLocationList, renderLocationsToDOM } from './locationList.js'

// Generate the fish list
const fishHTML = generateFishList();
renderFishToDOM(fishHTML);

// Generate the care tips
const tipHTML = generateTipList();
renderTipsToDOM(tipHTML);

// Generate the location list
const locationHTML = generateLocationList();
renderLocationsToDOM(locationHTML);


// Render each HTML string to the correct DOM element