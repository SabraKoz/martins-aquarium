import { database } from './aquariumData.js';

export const generateFishList = (fishList = database.fish) => {
    let fishHTML = '<header id="fish-title">Fish</header>';

    for (const fish of fishList) {
        fishHTML += `
            <article class="fishHTML">
                <img src="${fish.image}" alt="${fish.name} picture" class="fish__image">
                <div class="fish__details">
                    <h2 class="fish__name">${fish.name}</h2>
                    <p class="fish__type">${fish.species}</p>
                </div>
            </article>
            `;
    }
    return fishHTML
};

export const renderFishToDOM = (fishHTML) => {
    const fishList = document.getElementById('fishList');

    if (fishList) {
        fishList.innerHTML = fishHTML;
    } else {
        console.error('Could not find element with id "fishList"');
    }
};