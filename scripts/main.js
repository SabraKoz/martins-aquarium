import { generateFishList, renderFishToDOM } from './fishList.js'
import { generateTipList, renderTipsToDOM } from './tipList.js'
import { generateLocationList, renderLocationsToDOM } from './locationList.js'
import { filterFish } from './filter.js'



const filteredFish = filterFish();

const orderedFish = [
    ...filteredFish.holyFish,
    ...filteredFish.soldierFish,
    ...filteredFish.regularFish
];

const fishHTML = generateFishList(orderedFish);
renderFishToDOM(fishHTML);

const tipHTML = generateTipList();
renderTipsToDOM(tipHTML);


const locationHTML = generateLocationList();
renderLocationsToDOM(locationHTML);
