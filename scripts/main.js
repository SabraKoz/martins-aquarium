import { generateFishList, renderFishToDOM } from './fishList.js'
//import { tipList } from './tipList.js'
//import { locationList } from './locationList.js'

// Generate the fish list
const fishHTML = generateFishList();
renderFishToDOM(fishHTML);

// Generate the care tips
const tipHTML = tipList()

// Generate the location list
const locationHTML = locationList()

// Render each HTML string to the correct DOM element