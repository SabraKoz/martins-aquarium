import { generateFishList, renderFishToDOM } from './fishList.js'
import { generateTipList, renderTipsToDOM } from './tipList.js'
import { generateLocationList, renderLocationsToDOM } from './locationList.js'
import { mostHolyFish, soldierFish, regularFish } from './filter.js'

const holyFish = mostHolyFish();
const soldier = soldierFish();
const regular = regularFish();

const fishHTML = generateFishList();
renderFishToDOM(fishHTML);


const tipHTML = generateTipList();
renderTipsToDOM(tipHTML);


const locationHTML = generateLocationList();
renderLocationsToDOM(locationHTML);


renderFishToDOM.innerHTML = `${holyFish}${soldier}${regular}`